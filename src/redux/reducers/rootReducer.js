import { combineReducers } from "redux";
import authReducer from "./authReducer";
import shippingReducer from "./shippingReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  shipping: shippingReducer
});

export default rootReducer;
