import React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

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

UserInfo.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

export default UserInfo;
