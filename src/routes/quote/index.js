import React, { useCallback, useEffect } from "react";
import { Box, Button } from "@mui/material";
import Stepper from "../../components/Stepper";
import { getInsurancePackages, setActiveStep } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import PricingStep from "./PricingStep";

const QuoteRoute = () => {
  const dispatch = useDispatch();

  const { activeStep } = useSelector((state) => state.step);

  const { selected } = useSelector((state) => state.insurancePackage);

  const handleInsurancePackages = useCallback(() => {
    dispatch(getInsurancePackages());
  }, [dispatch]);

  useEffect(() => {
    handleInsurancePackages();
  }, [handleInsurancePackages]);

  const handleNextStep = () => {
    dispatch(setActiveStep(activeStep + 1));
  };

  const handleBackStep = () => {
    dispatch(setActiveStep(activeStep - 1));
  };

  return (
    <Box mt={2} pt={3}>
      <Stepper activeStep={activeStep} />

      {activeStep === 0 && <PricingStep />}

      <Box display={"flex"} justifyContent="flex-end" mt={1} pt={4}>
        <Button
          size="large"
          disabled={activeStep === 0}
          variant="outlined"
          onClick={handleBackStep}
        >
          Back
        </Button>
        <Button
          size="large"
          variant="contained"
          sx={{ marginLeft: "10px" }}
          onClick={handleNextStep}
          disabled={!selected}
        >
          {activeStep === 2 ? "Submit" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};

export default QuoteRoute;
