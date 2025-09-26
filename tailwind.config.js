/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'air-force-blue': '#1e3a8a',
        'air-force-light': '#3b82f6',
        'air-force-dark': '#1e40af',
      },
    },
  },
  plugins: [],
}