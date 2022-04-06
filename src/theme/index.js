import { createTheme, responsiveFontSizes } from "@mui/material/styles";

/**
 * This will modify and create custom theme
 */
const customTheme = createTheme({
  palette: {
    primary: {
      main: "#5754f2",
      contrastText: "#FFFFFF",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "95px",
        },
      },
    },
  },

  typography: {
    button: {
      textTransform: "none",
      fontFamily: "'Poppins', sans-serif",
    },

    h1: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "54px",
      fontWeight: 700,
      textTransform: "uppercase",
    },

    h2: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "36px",
      fontWeight: 600,
    },

    h3: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "36px",
      lineHeight: "1.3",
    },

    h4: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
    },

    h5: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "18px",
      lineHeight: "1.5",
    },

    h6: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "16px",
      color: "#686868",
    },

    subtitle1: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "22px",
      lineHeight: "1.5",
    },

    body1: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "15px",
      lineHeight: "1.5",
      color: "#757575",
    },

    body2: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "15px",
      lineHeight: "1.5",
      color: "#757575",
      fontWeight: "600",
    },
  },
});

/**
 * This will make sure that typography fonts will be responsive in all screen sizes
 */
export const theme = responsiveFontSizes(customTheme);
