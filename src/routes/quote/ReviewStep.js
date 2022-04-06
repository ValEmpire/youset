import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Pricing from "../../components/Pricing";
import Actions from "./Actions";
import UserInfo from "../../components/UserInfo";

// redux
import { useSelector } from "react-redux";

const ReviewStep = () => {
  const { age, gender, email } = useSelector((state) => state.user);
  const { selected, packages } = useSelector((state) => state.insurancePackage);

  const selectedPackage = packages.find((el) => el.id === selected);

  const details = [
    {
      name: "Email",
      value: email,
    },
    {
      name: "Age",
      value: age,
    },
    {
      name: "Gender",
      value: gender,
    },
  ];

  return (
    <Box mt={2} pt={4}>
      <Box display={"flex"} mb={2} pb={3} justifyContent="center">
        <Typography variant="h4">Please take a moment to review</Typography>
      </Box>

      <Grid container justifyContent={"center"} spacing={3}>
        <Grid item xs={12} sm={8} md={4}>
          <Box>
            <Box textAlign={"center"} pb={2}>
              <Box pb={2} mb={1}>
                <Typography variant="h5" fontWeight={500}>
                  Account Details
                </Typography>
              </Box>

              {details.map((detail, i) => (
                <UserInfo {...detail} key={detail.value + i} />
              ))}
            </Box>
          </Box>

          <Box mb={1}>
            <Typography variant="h5">Selected Insurance :</Typography>
          </Box>
          <Pricing {...selectedPackage} hideSelect={true} />
        </Grid>
      </Grid>

      <Actions
        age={age}
        gender={gender}
        email={email}
        selectedPackage={selectedPackage}
      />
    </Box>
  );
};

export default ReviewStep;
