/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'garamond': ['EB Garamond', 'serif'],
      },
      screens: {
        'md': '930px',
        'sm':'200px'
      },
    },
  },
  plugins: [],
}