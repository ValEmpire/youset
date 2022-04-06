import React from "react";
import { AppBar, Box, Container, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <>
      <Box height={"69px"}>
        <AppBar position="fixed" sx={{ backgroundColor: "#fff" }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1 }}>
                <Button size="large" LinkComponent={Link} to="/">
                  {"</CodingTest>"}
                </Button>
              </Box>
              <Box>
                <Button
                  LinkComponent={Link}
                  to="/getquote"
                  variant="contained"
                  size="large"
                >
                  Get your free quote
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};

export default Appbar;
