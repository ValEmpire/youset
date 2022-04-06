import { SET_INSURANCE_PACKAGES } from "../../const";

import data from "../../api/data.json";

/**
 * * This action will get all the insurance packages and dispatch to reducers with type SET_INSURANCE_PACKAGES
 * Todo: use axios when getting data from backend
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
    console.log(err);
  }
};
