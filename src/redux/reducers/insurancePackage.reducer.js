import { SELECT_INSURANCE_PACKAGE, SET_INSURANCE_PACKAGES } from "../../const";

/**
 * The preloaded state
 */
const initialState = {
  packages: [],

  selected: null,
};

/**
 * * the action will be triggered by action type cases
 * @returns the modified state
 */
export const insurancePackage = (state = initialState, action) => {
  switch (action.type) {
    case SET_INSURANCE_PACKAGES:
      const packages = action.payload;

      return {
        ...state,
        packages,
      };

    case SELECT_INSURANCE_PACKAGE:
      const selected = action.payload;

      return {
        ...state,
        selected,
      };

    default:
      return { ...state };
  }
};
