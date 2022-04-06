import { SET_ACTIVE_STEP } from "../../const";

/**
 * * This action will set activeStep and dispatch to reducers with type SET_ACTIVE_STEP
 */
export const setActiveStep = (step) => async (dispatch) => {
  try {
    dispatch({
      type: SET_ACTIVE_STEP,
      payload: step,
    });

    return;
  } catch (err) {
    console.log(err);
  }
};
