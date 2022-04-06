import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Pricing from "../../components/Pricing";
import Stepper from "../../components/Stepper";

const QuoteRoute = () => {
  return (
    <Box mt={2} pt={3}>
      <Stepper activeStep={0} />

      <Box mt={2} pt={4}>
        <Box display={"flex"} mb={2} pb={3} justifyContent="center">
          <Typography variant="h4">Insurance Packages</Typography>
        </Box>

        <Grid container justifyContent={"center"} spacing={3}>
          <Grid item xs={12} sm={8} md={4}>
            <Pricing />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default QuoteRoute;
