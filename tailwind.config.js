/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body:['EB Garamond'],
        subTitle:['Open Sans'],
        otherFont:['Poppins']
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/about-us/about-bg.png')",
      },
      colors:{
        whiteTitle: "#F9F9F9"
      }
    },
  },
  plugins: [],
}
