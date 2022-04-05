import { SET_USER } from "../../const";

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
    case SET_USER:
      const { email, age, gender } = action.payload;

      return {
        ...state,
        email,
        age,
        gender,
      };

    default:
      return { ...state };
  }
};
