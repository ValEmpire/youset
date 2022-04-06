import React, { useCallback, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Pricing from "../../components/Pricing";
import Stepper from "../../components/Stepper";
import { getInsurancePackages } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const QuoteRoute = () => {
  const dispatch = useDispatch();

  const { packages } = useSelector((state) => state.insurancePackage);

  const handleInsurancePackages = useCallback(() => {
    dispatch(getInsurancePackages());
  }, [dispatch]);

  useEffect(() => {
    handleInsurancePackages();
  }, [handleInsurancePackages]);

  return (
    <Box mt={2} pt={3}>
      <Stepper activeStep={0} />

      <Box mt={2} pt={4}>
        <Box display={"flex"} mb={2} pb={3} justifyContent="center">
          <Typography variant="h4">Insurance Packages</Typography>
        </Box>

        <Grid container justifyContent={"center"} spacing={3}>
          {packages.map((insurancePackage, i) => (
            <Grid item xs={12} sm={6} md={4} key={insurancePackage.id + i}>
              <Pricing {...insurancePackage} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default QuoteRoute;
