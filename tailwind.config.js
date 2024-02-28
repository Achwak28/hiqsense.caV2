@@ -26,6 +26,7 @@ module.exports = {
},
plugins: [],


export const content = ["./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
extend: {
@@ -75,6 +76,18 @@ export const theme = {
      slideLeft: 'slideLeft 2s ease-out forwards',
      slideRight: 'slideRight 2s ease-out forwards'
    },
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

};