import { combineReducers } from "redux";
import BreakinReducer from "./reducer-restaurant";

const rootReducer = combineReducers({
  breakins: BreakinReducer
});

export default rootReducer;
