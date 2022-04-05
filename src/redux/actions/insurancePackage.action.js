import { SET_INSURANCE_PACKAGES } from "../../const";

/**
 * * This action will set all the insurance packages and dispatch to reducers with type SET_INSURANCE_PACKAGES
 * Todo: use axios when getting data from backend
 */
export const setInsurancePackages = () => async (dispatch) => {
  try {
    // fake data
    const res = [];

    dispatch({
      type: SET_INSURANCE_PACKAGES,
      payload: res,
    });

    return;
  } catch (err) {
    console.log(err);
  }
};
