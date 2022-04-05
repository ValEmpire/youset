import { SET_USER_DETAILS } from "../../const";

/**
 * The preloaded state
 */
const initialState = {
  email: "",
  age: "",
  gender: "",
};

/**
 * * the action will be triggered by action type cases
 * @returns the modified state
 */
export const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      const user = action.payload;

      const detail = Object.keys(user)[0];

      return {
        ...state,
        [detail]: user[detail],
      };

    default:
      return { ...state };
  }
};
