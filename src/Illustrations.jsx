// Illustrations.jsx — hand-drawn SVG components used throughout Birder.
//
// These match the chunky, friendly Animal-Crossing-adjacent aesthetic: thick
// dark outlines, color-blocked fills, cheek-blush dots, eye sparkles, soft
// highlight gradients. They're all sized to a unit viewBox so they scale
// cleanly inside any container — caller sets width/height (or className).
//
// Convention: every illustration accepts a `size` prop (number, default 48)
// and an optional `className`. Where an illustration has a "color" identity
// (e.g. the cardinal is red, the goldfinch is yellow), that's baked in —
// these are character illustrations, not abstract icons.
import React from 'react';

// ---------- Birds ----------

export function BluebirdMascot({ size = 64, className = '' }) {
  // Chubby cartoon bluebird — main app mascot. Has a wheat-orange beak,
  // visible feet, cheek blush, eye sparkle. Cast a soft shadow to ground it.
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="92" rx="22" ry="3" fill="rgba(40,30,60,0.18)" />
      <path d="M30 50 C30 35, 42 25, 55 27 C70 29, 80 40, 80 55 C80 72, 68 84, 52 84 C36 84, 30 70, 30 60 Z"
            fill="#6cb8e4" stroke="#2a5680" strokeWidth="2" />
      <path d="M42 60 C42 50, 50 45, 58 47 C66 49, 70 58, 68 66 C66 74, 56 78, 48 76 C40 74, 42 66, 42 60 Z"
            fill="#fff8e8" />
      <path d="M58 50 C68 50, 76 58, 74 68 C72 76, 64 76, 58 70 Z"
            fill="#3d7eb8" stroke="#2a5680" strokeWidth="2" strokeLinejoin="round" />
      <path d="M60 56 L70 60" stroke="#2a5680" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M59 62 L68 66" stroke="#2a5680" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 42 Q34 32 42 30 Q40 36 38 42 Z" fill="#3d7eb8" stroke="#2a5680" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="40" cy="48" r="6" fill="#fff" />
      <circle cx="38" cy="49" r="3.5" fill="#2a3445" />
      <circle cx="37" cy="48" r="1.2" fill="#fff" />
      <path d="M30 55 L22 53 L30 60 Z" fill="#f6a13a" stroke="#a96a18" strokeWidth="1.5" strokeLinejoin="round" />
      <ellipse cx="36" cy="58" rx="3.5" ry="2" fill="#ff9bb3" opacity="0.7" />
      <path d="M46 84 L46 88 M44 88 L48 88 M53 84 L53 88 M51 88 L55 88"
            stroke="#f6a13a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Cardinal({ size = 48, className = '' }) {
  // Cute cardinal — used in the "Try Spotting" discovery card and elsewhere
  // when a featured-bird thumbnail is needed.
  return (
    <svg viewBox="0 0 60 60" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M16 33 C16 23, 25 18, 33 19 C43 20, 49 28, 49 36 C49 46, 41 51, 31 51 C21 51, 16 43, 16 36 Z"
            fill="#e84545" stroke="#7a1e1e" strokeWidth="1.8" />
      <path d="M40 33 C46 35, 50 41, 48 47 C46 51, 40 50, 36 46 Z"
            fill="#b8232f" stroke="#7a1e1e" strokeWidth="1.5" />
      <path d="M22 22 L20 12 L26 18 L25 13 L30 19 Z"
            fill="#e84545" stroke="#7a1e1e" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 32 Q22 28 28 30 L28 36 Q22 36 17 35 Z" fill="#1a1a1a" />
      <circle cx="25" cy="32" r="2.5" fill="#fff" />
      <circle cx="24" cy="33" r="1.5" fill="#1a1a1a" />
      <path d="M16 35 L10 33 L16 39 Z" fill="#f6a13a" stroke="#7a5a0f" strokeWidth="1.4" />
    </svg>
  );
}

export function Goldfinch({ size = 48, className = '' }) {
  return (
    <svg viewBox="0 0 60 60" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M15 32 C15 22, 24 17, 32 18 C42 19, 48 27, 48 35 C48 45, 40 50, 30 50 C20 50, 15 42, 15 35 Z"
            fill="#f5d042" stroke="#7a5a0f" strokeWidth="1.8" />
      <path d="M18 26 Q19 19 25 18 Q23 23 22 28 Z" fill="#2a2a2a" stroke="#1a1a1a" strokeWidth="1.4" />
      <path d="M36 30 C44 32, 48 38, 46 44 C44 48, 38 48, 34 44 Z" fill="#2a2a2a" stroke="#1a1a1a" strokeWidth="1.4" />
      <circle cx="24" cy="29" r="3" fill="#fff" />
      <circle cx="23" cy="30" r="1.7" fill="#1a1a1a" />
      <circle cx="22.5" cy="29.5" r="0.6" fill="#fff" />
      <path d="M15 33 L9 32 L15 37 Z" fill="#f6a13a" stroke="#7a5a0f" strokeWidth="1.4" />
    </svg>
  );
}

// ---------- Decorations ----------

export function Cloud({ size = 64, className = '', opacity = 0.85 }) {
  return (
    <svg viewBox="0 0 80 40" width={size} height={size * 40 / 80} className={className} xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
      <path d="M15 28 Q5 28 8 18 Q10 12 18 14 Q20 6 32 8 Q42 4 48 14 Q58 12 62 20 Q70 22 68 30 Q66 35 56 34 L20 34 Q12 34 15 28 Z"
            fill="#fff" stroke="#a8c8e0" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function Sparkle({ size = 20, className = '' }) {
  return (
    <svg viewBox="0 0 20 20" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2 L11.5 8 L17 9.5 L11.5 11 L10 17 L8.5 11 L3 9.5 L8.5 8 Z"
            fill="#ffe066" stroke="#c9a01a" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export function Compass({ size = 42, className = '' }) {
  return (
    <svg viewBox="0 0 60 60" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="26" fill="#fff8e8" stroke="#2e6b4f" strokeWidth="2" />
      <circle cx="30" cy="30" r="20" fill="none" stroke="#9bd49b" strokeWidth="1.2" strokeDasharray="2,2" />
      <path d="M30 8 L34 30 L30 26 L26 30 Z" fill="#ff6b6b" stroke="#7a1e1e" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M30 52 L34 30 L30 34 L26 30 Z" fill="#fff" stroke="#3d4a5e" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="30" cy="30" r="2.5" fill="#3d4a5e" />
      <text x="30" y="14" textAnchor="middle" fontFamily="Fredoka, sans-serif" fontSize="6" fontWeight="600" fill="#3d4a5e">N</text>
    </svg>
  );
}

// ---------- Stat-tile icons ----------
// Each is sized to fit comfortably in a 34px circle inside a stat tile.

export function TreeIcon({ size = 32, className = '' }) {
  return (
    <svg viewBox="0 0 40 50" width={size} height={size * 50 / 40} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M15 40 L25 40 L23 50 L17 50 Z" fill="#a06a3d" stroke="#5a3a1f" strokeWidth="1.5" />
      <circle cx="20" cy="24" r="14" fill="#7dd3a4" stroke="#2e6b4f" strokeWidth="2" />
      <circle cx="12" cy="18" r="8" fill="#7dd3a4" stroke="#2e6b4f" strokeWidth="2" />
      <circle cx="28" cy="20" r="9" fill="#7dd3a4" stroke="#2e6b4f" strokeWidth="2" />
    </svg>
  );
}

export function HeartIcon({ size = 32, className = '' }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M20 33 C8 23, 4 16, 8 10 C12 5, 18 6, 20 12 C22 6, 28 5, 32 10 C36 16, 32 23, 20 33 Z"
            fill="#ff7e7e" stroke="#a83a3a" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function EyeIcon({ size = 32, className = '' }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M4 20 Q20 8 36 20 Q20 32 4 20 Z" fill="#fff" stroke="#2a5680" strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="5" fill="#5fa8d3" stroke="#2a5680" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="2" fill="#1a1a1a" />
    </svg>
  );
}

export function CalendarIcon({ size = 32, className = '' }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="28" height="24" rx="3" fill="#fff" stroke="#c9a01a" strokeWidth="2" />
      <rect x="6" y="10" width="28" height="7" rx="3" fill="#ffe066" stroke="#c9a01a" strokeWidth="2" />
      <line x1="14" y1="6" x2="14" y2="14" stroke="#c9a01a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="26" y1="6" x2="26" y2="14" stroke="#c9a01a" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="14" cy="24" r="1.8" fill="#c9a01a" />
      <circle cx="20" cy="24" r="1.8" fill="#ff7e7e" />
      <circle cx="26" cy="24" r="1.8" fill="#c9a01a" />
      <circle cx="14" cy="30" r="1.8" fill="#c9a01a" />
    </svg>
  );
}

export function ChecklistIcon({ size = 32, className = '' }) {
  // Clipboard with a checkmark — used for the "Sightings" stat tile.
  // Symbolic for "things I've logged" / "items checked off my list".
  // Replaces an earlier binoculars icon whose two-circles-with-bridge
  // composition could read as something other than birding equipment.
  return (
    <svg viewBox="0 0 40 44" width={size} height={size * 44 / 40} className={className} xmlns="http://www.w3.org/2000/svg">
      {/* clipboard body */}
      <rect x="5" y="8" width="30" height="32" rx="3.5" fill="#fff" stroke="#2a5680" strokeWidth="2.2" />
      {/* clip at top */}
      <rect x="13" y="3" width="14" height="8" rx="2" fill="#5fa8d3" stroke="#2a5680" strokeWidth="2" />
      <rect x="16" y="5" width="8" height="3" rx="1" fill="#fff" />
      {/* list lines */}
      <line x1="11" y1="20" x2="29" y2="20" stroke="#a8c8e0" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="11" y1="27" x2="25" y2="27" stroke="#a8c8e0" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="11" y1="34" x2="29" y2="34" stroke="#a8c8e0" strokeWidth="1.8" strokeLinecap="round" />
      {/* green checkmark on the first line — the "logged sighting" mark */}
      <path d="M11 19 L14 22 L19 17" fill="none" stroke="#5cba87" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BinocularsIcon({ size = 32, className = '' }) {
  // Legacy export kept for any external references — points at ChecklistIcon
  // so renames don't break anything that imported the old name.
  return <ChecklistIcon size={size} className={className} />;
}
