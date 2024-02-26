export const content = ["./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    minWidth: {
      4: "1rem", // 16px
    },
    maxWidth: {
      "8xl": "90rem",// 1440px
      "9xl": "110rem",
      "10xl": "130rem"
    },
    fontSize: {
      "custom-large": "56px",
      "cutom-lg": "32px",
      "custom-subimage-caption": "18px",
      "custom-regular": "18px",
      "custom-regular-small": "13px"
    },
    colors: {
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
    fontFamily: {
      'opensanshebrew': ['"Open Sans Hebrew"', 'sans-serif'],
      'ebgaramond': ['"EB Garamond"', 'serif'],
    },
  },
};
