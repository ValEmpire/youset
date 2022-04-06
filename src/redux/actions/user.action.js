import { SET_USER_DETAILS } from "../../const";
import { validateEmail } from "../../helpers";

/**
 * * This action will set user details and dispatch to reducers with type SET_USER_DETAILS
 */
export const setUserDetails = (detail, err) => (dispatch) => {
  const key = Object.keys(detail)[0];

  if (key === "email") {
    const isValid = validateEmail(detail[key]);

    if (!isValid) {
      err(true);
    } else {
      err(false);
    }

    dispatch({
      type: SET_USER_DETAILS,
      payload: detail,
    });
  }

  return;
};
