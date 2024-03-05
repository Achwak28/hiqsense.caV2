/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      colors: {
        "btn-primary": "#F6393D",
        "txt-primary": "#0A0628",
        "custom-color": "#0A0628",
        "gradient-start": "#4334B6",
        "gradient-end": "#F6393D",
        'custom-purple': '#4334B6',
        'custom-pink': '#F6393D',
        "hero": '#372B92',
        "content": '#100529',
        "teamview": "#0e0327",
        "hero-bottom-gradient": '#5f1a86',
        "content-left-gradient": "#350736",
        "content-underline": "#3a167e"
      },

      screens: {
        'mid': '930px',
        'small':'200px'
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        whyChooseCols: "0.7fr 2fr 0.3fr",
      },

      fontFamily: {
        "garamond-semibold": ["EB Garamond-SemiBold"],
        "hebrew-regular": ["Open Sans Hebrew-Regular"],
        "hebrew-bold": ["Open Sans Hebrew-Bold"],
        "garamond-bold": ["EB Garamond-Bold"],
        "hebrew-light": ["Open Sans Hebrew-Light"],
        "lato-bold": ["Lato-bold"],
        "lato-regular": ["Lato-regular"],
        'opensanshebrew': ['"Open Sans Hebrew"', 'sans-serif'],
        'ebgaramond': ['"EB Garamond"', 'serif'],
      },
  
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
       
      animation: {
        slideLeft: 'slideLeft 2s ease-out forwards',
        slideRight: 'slideRight 2s ease-out forwards'
      },
    },
  },

  plugins: [],
};
