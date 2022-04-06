import {
  Box,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const AboutMeStep = () => {
  return (
    <Box mt={2} pt={4}>
      <Box display={"flex"} mb={2} pb={3} justifyContent="center">
        <Typography variant="h4">A Little Info</Typography>
      </Box>

      <Grid container justifyContent={"center"}>
        <Grid item xs={12} sm={8} md={6}>
          <Box>
            <Typography variant="h6"> What is your email address?</Typography>
            <TextField
              placeholder="name@awesome.com"
              name="email"
              fullWidth
              error={false}
              helperText={null}
            />
          </Box>

          <Box mt={1} pt={2}>
            <Typography variant="h6"> How old are you?</Typography>
            <TextField placeholder="years" name="age" fullWidth />
          </Box>

          <Box mt={1} pt={2}>
            <Typography variant="h6"> What is your gender?</Typography>
            <Select fullWidth>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="prefer not to say">Prefer not to say</MenuItem>
            </Select>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMeStep;
