import React from "react";

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
import Line from "../../components/Line";
import { CheckCircle } from "@mui/icons-material";

import Stepper from "../../components/Stepper";

const QuoteRoute = () => {
  return (
    <Box mt={2} pt={3}>
      <Stepper activeStep={0} />

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
        </Grid>
      </Box>
    </Box>
  );
};

export default QuoteRoute;
