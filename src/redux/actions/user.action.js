import { SET_USER_DETAILS } from "../../const";

/**
 * * This action will set user details and dispatch to reducers with type SET_USER_DETAILS
 */
export const setUserDetails = (user) => (dispatch) => {
  try {
    dispatch({
      type: SET_USER_DETAILS,
      payload: user,
    });

    return;
  } catch (err) {
    console.log(err);
  }
};
