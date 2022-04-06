import { Box, Typography } from "@mui/material";
import React from "react";

const UserInfo = (props) => {
  const { name, value } = props;

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="h5">{name} :</Typography>
      <Typography
        sx={{ marginLeft: "5px" }}
        variant="body1"
      >{`${value}`}</Typography>
    </Box>
  );
};

export default UserInfo;
