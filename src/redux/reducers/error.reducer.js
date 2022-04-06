import { SET_ERROR } from "../../const";

/**
 * The preloaded state
 */
const initialState = {
  emailErr: null,
};

/**
 * * the action will be triggered by action type cases
 * @returns the modified state
 */
export const error = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      const error = action.payload;

      return {
        ...state,
        ...error,
      };

    default:
      return { ...state };
  }
};
