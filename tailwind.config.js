/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // 'display' is Fredoka — rounded, chunky, friendly Animal-Crossing-adjacent
        // headline face. 'sans' is Nunito — clean, friendly body face that pairs
        // well with Fredoka and has a wide weight range. 'mono' is JetBrains
        // Mono — kept for numerals and technical contexts where alignment
        // matters.
        display: ['Fredoka', 'system-ui', 'sans-serif'],
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Birdfolk palette — saturated pastels with high readability.
        // Each color has a base, dark (for borders/shadows), light (for
        // backgrounds), and an accessible text variant where applicable.
        // Sky blue family — primary "exploring" color
        sky:   { 50:'#f0faff', 100:'#dceefb', 200:'#bfe1f6', 300:'#7cc4e8', 400:'#5fa8d3', 500:'#3d87b8', 600:'#2a5680', 700:'#1f3f5e' },
        // Coral red — accent, action, "hot" stat color
        coral: { 50:'#fff5f0', 100:'#ffe0d4', 200:'#ffc4ad', 300:'#ff9a76', 400:'#ff6b6b', 500:'#e84545', 600:'#a83a3a', 700:'#7a1e1e' },
        // Mint green — nature, growth, "go" actions
        mint:  { 50:'#f0fbf4', 100:'#d8f3df', 200:'#a8e6cf', 300:'#7dd3a4', 400:'#5cba87', 500:'#3d7e3d', 600:'#2e6b4f', 700:'#1f4a36' },
        // Sunshine yellow — highlights, badges, optimism
        sun:   { 50:'#fffceb', 100:'#fff3c4', 200:'#ffe066', 300:'#ffd166', 400:'#f5d042', 500:'#d9a441', 600:'#c9a01a', 700:'#7a5a0f' },
        // Cream paper / surface
        cream: { 50:'#fffdf5', 100:'#fff8e8', 200:'#fff3d4', 300:'#fbe7be', 400:'#f4d09a', 500:'#e8b478' },
        // Deep ink — the dark borders & shadows that give the AC chunky feel
        ink:   { 50:'#7e8a9c', 100:'#5d6678', 200:'#4a5263', 300:'#3d4a5e', 400:'#2a3445', 500:'#1d2433' },
      },
      boxShadow: {
        // Chunky offset shadows — the Animal Crossing 3D button signature
        'chunky':    '0 4px 0 0 var(--shadow-color, #2a3445)',
        'chunky-sm': '0 3px 0 0 var(--shadow-color, #2a3445)',
        'chunky-xs': '0 2px 0 0 var(--shadow-color, #2a3445)',
      },
    },
  },
  plugins: [],
};
