import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveStep, submitInsurance } from "../../redux/actions";

const Actions = (props) => {
  const { disabled, age, email, gender, selectedPackage } = props;

  const dispatch = useDispatch();

  const { activeStep } = useSelector((state) => state.step);

  const handleNextStep = () => {
    if (activeStep === 2) {
      return dispatch(
        submitInsurance({
          age,
          email,
          gender,
          selectedPackage,
        })
      );
    }

    return dispatch(setActiveStep(activeStep + 1));
  };

  const handleBackStep = () => {
    dispatch(setActiveStep(activeStep - 1));
  };

  return (
    <Box display={"flex"} justifyContent="center" p={7}>
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
        disabled={disabled}
      >
        {activeStep === 2 ? "Submit" : "Next"}
      </Button>
    </Box>
  );
};

export default Actions;
