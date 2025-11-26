/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          950: '#0c1322',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          gold: '#c0a062',
          sand: '#f5f5f4',
        }
      }
    },
  },
  plugins: [],
}
