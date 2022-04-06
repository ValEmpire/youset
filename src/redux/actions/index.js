import {
  getInsurancePackages,
  selectInsurancePackage,
  submitInsurance,
} from "./insurancePackage.action";
import { setActiveStep } from "./step.action";

/**
 * Export all actions as one object
 */
export {
  getInsurancePackages,
  setActiveStep,
  selectInsurancePackage,
  submitInsurance,
};
