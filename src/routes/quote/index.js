import React, { useCallback, useEffect } from "react";
import { Box } from "@mui/material";
import Stepper from "../../components/Stepper";
import { getInsurancePackages } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import PricingStep from "./PricingStep";
import AboutMeStep from "./AboutMeStep";
import ReviewStep from "./ReviewStep";
import ThankStep from "./ThankStep";

const QuoteRoute = () => {
  const dispatch = useDispatch();

  const { activeStep } = useSelector((state) => state.step);

  const handleInsurancePackages = useCallback(() => {
    dispatch(getInsurancePackages());
  }, [dispatch]);

  useEffect(() => {
    handleInsurancePackages();
  }, [handleInsurancePackages]);

  return (
    <Box mt={2} pt={3}>
      <Stepper activeStep={activeStep} />

      {activeStep === 0 && <PricingStep />}

      {activeStep === 1 && <AboutMeStep />}

      {activeStep === 2 && <ReviewStep />}

      {activeStep === 3 && <ThankStep />}
    </Box>
  );
};

export default QuoteRoute;
