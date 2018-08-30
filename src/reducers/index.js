import { combineReducers } from "redux";
import RestaurantReducer from "./reducer-restaurant";

const rootReducer = combineReducers({
  restaurant: RestaurantReducer
});

export default rootReducer;
