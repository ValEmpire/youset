import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import Appbar from "./Appbar";

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box minHeight={"100vh"}>
        <Appbar />
        {props.children}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
