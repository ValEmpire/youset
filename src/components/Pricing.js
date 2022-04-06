import { CheckCircle } from "@mui/icons-material";
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
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Line from "./Line";
import { selectInsurancePackage } from "../redux/actions";

const Pricing = (props) => {
  const { title, name, price, includes, id, hideSelect } = props;

  const dispatch = useDispatch();

  const { selected } = useSelector((state) => state.insurancePackage);

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

export default Pricing;
