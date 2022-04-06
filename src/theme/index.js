import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#5754f2",
      contrastText: "#FFFFFF",
    },
  },

  typography: {
    allVariants: {
      opacity: 1,
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

    h4: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
    },

    h5: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "18px",
    },

    h6: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "16px",
      color: "#686868",
    },
  },
});

export const theme = responsiveFontSizes(customTheme);
