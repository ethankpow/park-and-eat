import { combineReducers } from "redux";
import {Locator, Outlaws} from "./reducer-breakin";

const rootReducer = combineReducers({
  location: Locator,
  breakinData: Outlaws
});

export default rootReducer;
