// Tiny Promise-based IndexedDB wrapper.
// Mimics the get/set/delete interface of window.storage used in the artifact,
// so the rest of the app doesn't need to know about IDB.
//
// Robustness notes:
// - openDb() races against a 5s timeout. iOS Safari can leave indexedDB.open
//   pending forever in private browsing or during a Service Worker upgrade,
//   and the open call fires neither onsuccess nor onerror. Without the
//   timeout, every storage.get() in flight hangs and the app never moves
//   off the loading splash.
// - If the open fails or times out, we reset dbPromise so future calls can
//   retry on their own. Until a retry succeeds, get() returns null and
//   set()/del() are no-ops — so the app falls back to "empty state"
//   gracefully instead of throwing.

const DB_NAME = 'birder';
const DB_VERSION = 1;
const STORE = 'kv';
const OPEN_TIMEOUT_MS = 5000;

let dbPromise = null;
function openDb() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    let settled = false;
    const finish = (fn, arg) => {
      if (settled) return;
      settled = true;
      fn(arg);
    };

    let req;
    try {
      req = indexedDB.open(DB_NAME, DB_VERSION);
    } catch (err) {
      // SecurityError in some private-browsing contexts where IDB is blocked.
      finish(reject, err);
      return;
    }

    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE);
      }
    };
    req.onsuccess = () => finish(resolve, req.result);
    req.onerror = () => finish(reject, req.error);
    req.onblocked = () => finish(reject, new Error('IndexedDB open blocked'));

    setTimeout(() => finish(reject, new Error('IndexedDB open timeout')), OPEN_TIMEOUT_MS);
  });

  // If the open fails, drop the cached rejection so subsequent calls can retry.
  dbPromise.catch(() => { dbPromise = null; });
  return dbPromise;
}

function tx(mode, fn) {
  return openDb().then(
    (db) =>
      new Promise((resolve, reject) => {
        const t = db.transaction(STORE, mode);
        const store = t.objectStore(STORE);
        const result = fn(store);
        t.oncomplete = () => resolve(result);
        t.onerror = () => reject(t.error);
        t.onabort = () => reject(t.error);
      })
  );
}

export const storage = {
  async get(key) {
    return new Promise((resolve, reject) => {
      openDb().then((db) => {
        const t = db.transaction(STORE, 'readonly');
        const req = t.objectStore(STORE).get(key);
        req.onsuccess = () => {
          const v = req.result;
          resolve(v === undefined ? null : v);
        };
        req.onerror = () => reject(req.error);
      }).catch(reject);
    });
  },

  async set(key, value) {
    await tx('readwrite', (store) => store.put(value, key));
  },

  async del(key) {
    await tx('readwrite', (store) => store.delete(key));
  },

  // List keys, optionally filtered by prefix. Mirrors the artifact storage API.
  async list(prefix) {
    return new Promise((resolve, reject) => {
      openDb().then((db) => {
        const t = db.transaction(STORE, 'readonly');
        const req = t.objectStore(STORE).getAllKeys();
        req.onsuccess = () => {
          const allKeys = req.result || [];
          const keys = prefix
            ? allKeys.filter((k) => typeof k === 'string' && k.startsWith(prefix))
            : allKeys;
          resolve({ keys });
        };
        req.onerror = () => reject(req.error);
      }).catch(reject);
    });
  },
};
