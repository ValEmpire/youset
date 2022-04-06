import { SET_ERROR, SET_USER_DETAILS } from "../../const";
import { validateEmail } from "../../helpers";

/**
 * * This action will set user details and dispatch to reducers with type SET_USER_DETAILS
 */
export const setUserDetails = (detail) => (dispatch) => {
  // get detail key
  const key = Object.keys(detail)[0];

  switch (key) {
    case "email":
      const isValid = validateEmail(detail[key]);

      // dispatch error if email is not valid
      if (!isValid) {
        dispatch({
          type: SET_ERROR,
          payload: {
            emailErr: "Please check your email address",
          },
        });
      } else {
        dispatch({
          type: SET_ERROR,
          payload: {
            emailErr: null,
          },
        });
      }

      break;

    default:
      break;
  }

  dispatch({
    type: SET_USER_DETAILS,
    payload: detail,
  });

  return;
};
