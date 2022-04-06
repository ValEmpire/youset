import React from "react";
import {
  Box,
  Button,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Line from "./Line";
import PropTypes from "prop-types";

// redux
import { useDispatch, useSelector } from "react-redux";
import { selectInsurancePackage } from "../redux/actions";

const Pricing = (props) => {
  const dispatch = useDispatch();

  const { title, name, price, includes, id, hideSelect } = props;

  const { selected } = useSelector((state) => state.insurancePackage);

  /**
   *
   * @param {set the id of insurancePackage as selected} id
   */
  const handleSelectedInsurancePackage = (id) => {
    dispatch(selectInsurancePackage(id));
  };

  return (
    <Card component={Box} textAlign="center">
      <Box bgcolor={"primary.main"} color="white" p={3}>
        <Typography variant="h5" fontWeight={500}>
          {title}
        </Typography>
      </Box>

      <Box p={2}>
        <Typography variant="subtitle1" fontWeight={600}>
          {name}
        </Typography>
      </Box>
      <Box>
        <Box display="flex" alignItems={"flex-end"} justifyContent="center">
          <Typography variant="h2">{`$${price}`}</Typography>
          <Box mb={1}>
            <Typography variant="h6">/month</Typography>
          </Box>
        </Box>
        <Line />
      </Box>

      <Box textAlign={"left"}>
        <List>
          {/* Map the includes array */}
          {includes.map((inc, i) => (
            <ListItem key={inc + i}>
              <ListItemIcon>
                <CheckCircle color="primary" />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body1">{inc}</Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box pb={2} display={hideSelect ? "none" : true}>
        <Button
          variant={selected === id ? "contained" : "outlined"}
          size="large"
          onClick={() => handleSelectedInsurancePackage(id)}
        >
          Select
        </Button>
      </Box>
    </Card>
  );
};

Pricing.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  includes: PropTypes.array,
  id: PropTypes.string,
  hideSelect: PropTypes.string,
};

export default Pricing;
