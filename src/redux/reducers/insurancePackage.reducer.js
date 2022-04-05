import { SET_INSURANCE_PACKAGES } from "../../const";

/**
 * The preloaded state
 */
const initialState = {
  packages: [],
};

/**
 * * the action will be triggered by action type cases
 * @returns the modified state
 */
export const insurancePackage = (state = initialState, action) => {
  switch (action.type) {
    case SET_INSURANCE_PACKAGES:
      return {
        ...state,
        packages: action.payload,
      };

    default:
      return { ...state };
  }
};
