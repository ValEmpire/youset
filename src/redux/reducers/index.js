import { combineReducers } from "redux";

import { insurancePackage } from "./insurancePackage.reducer";
import { user } from "./user.reducer";
import { step } from "./step.reducer";
import { error } from "./error.reducer";

/**
 * This will combine all reducers that will be exported for redux store
 */
export default combineReducers({
  insurancePackage,
  user,
  step,
  error,
});
