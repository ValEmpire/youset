import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HomeRoute = () => {
  return (
    <Box>
      <Grid container alignItems={"center"} justifyContent="center">
        <Grid item sm={6} xs={12}>
          <Box mt={3}>
            <Box pb={2} mb={1}>
              <Typography variant="h1">Need Insurance?</Typography>
            </Box>
            <Box mb={1} pb={2}>
              <Typography variant="h5">
                Lorem ipsum dolor sit amet. Est officiis velit aut officiis
                labore vel asperiores suscipit qui eligendi eligendi a
                voluptatibus voluptatum.
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{ padding: "15px", fontSize: "18px" }}
            >
              Get your free quote{" "}
              <ArrowForwardIcon sx={{ marginLeft: "10px" }} />
            </Button>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box mt={3}>
            <img src="/images/jumbotron.jpg" width={"100%"} alt="jumbotron" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeRoute;
