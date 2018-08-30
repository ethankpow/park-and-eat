import { combineReducers } from "redux";
import WeatherReducer from "./reducer-restaurant";

const rootReducer = combineReducers({
  restaurant: WeatherReducer
});

export default rootReducer;
