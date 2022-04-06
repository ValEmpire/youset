import { SET_ACTIVE_STEP } from "../../const";

/**
 * The preloaded state
 */
const initialState = {
  activeStep: null,
};

/**
 * * the action will be triggered by action type cases
 * @returns the modified state
 */
export const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_STEP:
      const { activeStep } = action.payload;

      return {
        ...state,
        activeStep,
      };

    default:
      return { ...state };
  }
};
