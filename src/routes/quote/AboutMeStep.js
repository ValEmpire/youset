import React from "react";
import {
  Box,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Actions from "./Actions";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../redux/actions/user.action";

const AboutMeStep = () => {
  const dispatch = useDispatch();

  const { emailErr } = useSelector((state) => state.error);

  const { email, age, gender } = useSelector((state) => state.user);

  /**
   * this will handle all the textfields
   * @param {events} e
   */
  const handleUserDetails = (e) => {
    const detail = {
      [e.target.name]: e.target.value,
    };

    dispatch(setUserDetails(detail));
  };

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
              value={email}
              error={!!emailErr}
              helperText={emailErr ?? null}
              onChange={handleUserDetails}
            />
          </Box>

          <Box mt={1} pt={2}>
            <Typography variant="h6"> How old are you?</Typography>
            <TextField
              type={"number"}
              placeholder="years"
              value={age}
              name="age"
              fullWidth
              onChange={handleUserDetails}
            />
          </Box>

          <Box mt={1} pt={2}>
            <Typography variant="h6"> What is your gender?</Typography>
            <Select
              fullWidth
              value={gender}
              name="gender"
              onChange={handleUserDetails}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
            </Select>
          </Box>
        </Grid>
      </Grid>

      <Actions disabled={!email || !age || !gender || !!emailErr} />
    </Box>
  );
};

export default AboutMeStep;
