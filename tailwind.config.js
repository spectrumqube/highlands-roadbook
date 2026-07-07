/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0f172a',
        'gold': '#d4af37',
        'emerald': '#10b981',
        'slate': '#1e293b',
      },
    },
  },
  plugins: [],
};