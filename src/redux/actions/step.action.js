import { SET_ACTIVE_STEP } from "../../const";

/**
 * * This action will set activeStep and dispatch to reducers with type SET_ACTIVE_STEP
 * @param type: number this will handle transition of steps
 */
export const setActiveStep = (step) => async (dispatch) => {
  dispatch({
    type: SET_ACTIVE_STEP,
    payload: step,
  });

  return;
};
