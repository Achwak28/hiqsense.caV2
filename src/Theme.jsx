import { createTheme } from  "@mui/material/styles";




const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
        contrastText: '#ff6090',
      },
      secondary: {
        main: '#ff6090',
      },
      text: {
        primary: '#ffffff',
        secondary: '#ff6090',
      },
      background: {
        default: '#282c34',
        paper: '#424242',
      },
    },
    typography: {
      fontFamily: 'Arial, sans-serif',
      fontSize: 14,
      h5: {
        fontWeight: 700,
      },
      button: {
        textTransform: 'none',
        fontWeight: 'bold',
      },
    },
  });

  export default theme;