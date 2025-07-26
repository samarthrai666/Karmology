/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-purple': '#B794F4',
        'cosmic-pink': '#F687B3',
        'cosmic-blue': '#78DCFF',
        'dark-bg': '#0a0a0a',
        'dark-surface': '#1a1a2e',
      },
    },
  },
  plugins: [],
}
