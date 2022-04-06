import { SELECT_INSURANCE_PACKAGE, SET_INSURANCE_PACKAGES } from "../../const";

import data from "../../api/data.json";
import axios from "axios";

/**
 * This action will get all the insurance packages and dispatch to reducers with type SET_INSURANCE_PACKAGES
 * Todo: use axios when getting data from backend in realtime
 */
export const getInsurancePackages = () => async (dispatch) => {
  try {
    // fake data
    const res = data.insurancePackages;

    dispatch({
      type: SET_INSURANCE_PACKAGES,
      payload: res,
    });

    return;
  } catch (err) {
    //handle Error
    return;
  }
};

/**
 * This action will recieve id and dispatch to reducers with type of SELECT_INSURANCE_PACKAGE
 * @param {id of insurancePackage} id
 */
export const selectInsurancePackage = (id) => (dispatch) => {
  dispatch({
    type: SELECT_INSURANCE_PACKAGE,
    payload: id,
  });

  return;
};

/**
 * This will post request to api endpoint
 * @param {all the data from forms} data
 * Todo: change the api endpoint
 */
export const submitInsurance = (data) => async (dispatch) => {
  try {
    console.log(`Submitting data:`, data);

    axios.post("https://www.example.com", {
      data,
    });

    return;
  } catch (err) {
    // handle error

    return;
  }
};
