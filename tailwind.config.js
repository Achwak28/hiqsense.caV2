/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn-primary': '#F6393D',
        'txt-primary': '#0A0628',  
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'whyChooseCols': '0.7fr 2fr 0.3fr',

       
      }

    },
    fontFamily: {

      'garamond-semibold': ['EB Garamond-SemiBold'],
      'hebrew-regular': ['Open Sans Hebrew-Regular'],
      'hebrew-bold': ['Open Sans Hebrew-Bold'],
      'garamond-bold': ['EB Garamond-Bold']

    }
  },
  plugins: [],
}