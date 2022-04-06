import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Line from "../../components/Line";
import { Link } from "react-router-dom";

const HomeRoute = () => {
  return (
    <Box>
      <Grid container alignItems={"center"} justifyContent="center">
        <Grid item md={6} sm={10} xs={12}>
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
              <Box pt={2} pb={3}>
                <Line />
              </Box>
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{ padding: "15px", fontSize: "18px" }}
              LinkComponent={Link}
              to="/getquote"
            >
              Get your free quote{" "}
              <ArrowForwardIcon sx={{ marginLeft: "10px" }} />
            </Button>
          </Box>
        </Grid>
        <Grid item md={6} sm={7} xs={12}>
          <Box mt={3}>
            <img src="/images/jumbotron.jpg" width={"100%"} alt="jumbotron" />
          </Box>
        </Grid>
      </Grid>

      <Box mt={2} pt={5} textAlign="center">
        <Typography variant="h3">
          "Lorem ut perspiciatis unde omnis iste natus voluptatem accusantium
          inventore veritatis et."
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeRoute;
