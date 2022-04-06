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
import {
  Box,
  Button,
  Card,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Line from "../components/Line";
import { CheckCircle } from "@mui/icons-material";

const ColorlibConnector = styled(StepConnector)({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },

  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
  },
});

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: "#ccc",
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

      <Box mt={2} pt={4}>
        <Box display={"flex"} mb={2} pb={3} justifyContent="center">
          <Typography variant="h4">Insurance Packages</Typography>
        </Box>

        <Grid container>
          <Grid item xs={12} sm={8} md={4}>
            <Card component={Box} textAlign="center">
              <Box bgcolor={"primary.main"} color="white" p={3}>
                <Typography variant="h5" fontWeight={500}>
                  Most Affordable
                </Typography>
              </Box>

              <Box p={2}>
                <Typography variant="subtitle1" fontWeight={600}>
                  Proteco Insurance
                </Typography>
              </Box>
              <Box>
                <Box
                  display="flex"
                  alignItems={"flex-end"}
                  justifyContent="center"
                >
                  <Typography variant="h2">$12.50</Typography>
                  <Box mb={1}>
                    <Typography variant="h6">/month</Typography>
                  </Box>
                </Box>
                <Line />
              </Box>

              <Box textAlign={"left"}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body1">
                        Your personal belongings will be covered up to $15k
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      Perfect if you own a few belongings
                    </ListItemText>
                  </ListItem>
                </List>
              </Box>

              <Box pb={2}>
                <Button variant="outlined" size="large">
                  Select
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={4}></Grid>
          <Grid item xs={12} sm={8} md={4}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CustomizedSteppers;
