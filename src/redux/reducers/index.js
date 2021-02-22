import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import vendorReducer from "./vendor.reducer";

export default combineReducers({
  auth: authReducer,
  vendor: vendorReducer,
});
