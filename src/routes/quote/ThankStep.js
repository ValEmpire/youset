import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const ThankStep = () => {
  return (
    <Box mt={2} pt={4}>
      <Box display={"flex"} mb={2} pb={3} justifyContent="center">
        <Typography variant="h4">Thank you!</Typography>
      </Box>
      <Grid container justifyContent={"center"}>
        <Grid item md={8}>
          <Box>
            <Typography variant="h5">
              Thank you for considering us. We have received your application.
              You will receive an email from us in few minutes.
            </Typography>
          </Box>

          <Box mt={1} pt={2} display="flex" justifyContent={"flex-end"}>
            <Box>
              <Typography>Regards,</Typography>
              <Typography>Arcival Palma</Typography>
              <Typography>FullStack Developer</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThankStep;
