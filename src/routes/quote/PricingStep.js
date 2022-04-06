import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Pricing from "../../components/Pricing";
import Actions from "./Actions";

// redux
import { useSelector } from "react-redux";

const PricingStep = () => {
  const { packages } = useSelector((state) => state.insurancePackage);

  const { selected } = useSelector((state) => state.insurancePackage);

  return (
    <Box mt={2} pt={4}>
      <Box display={"flex"} mb={2} pb={3} justifyContent="center">
        <Typography variant="h4">Insurance Packages</Typography>
      </Box>

      <Grid container justifyContent={"center"} spacing={3}>
        {packages.map((insurancePackage, i) => (
          <Grid item xs={12} sm={8} md={4} key={insurancePackage.id + i}>
            <Pricing {...insurancePackage} />
          </Grid>
        ))}
      </Grid>

      <Actions disabled={!selected} />
    </Box>
  );
};

export default PricingStep;
