import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Box, Typography } from "@mui/material";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },

  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 40,
  height: 40,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: theme.palette.primary.main,
  }),
  ...(ownerState.completed && {
    backgroundColor: theme.palette.primary.main,
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <BusinessCenterIcon />,
    2: <AccountBoxIcon />,
    3: <FactCheckIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ["Select insurance", "About me", "Review"];

const CustomizedSteppers = () => {
  return (
    <Box mt={2} pt={3}>
      <Stack>
        <Stepper
          alternativeLabel
          activeStep={0}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>

      <Box textAlign={"center"} mt={2} pt={4}>
        <Typography variant="h4">Select Insurance Package</Typography>
      </Box>
    </Box>
  );
};

export default CustomizedSteppers;
