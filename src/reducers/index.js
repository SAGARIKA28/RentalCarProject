import { combineReducers } from "redux";
import carsReducer from "./carReducer";

export default combineReducers({
  data: carsReducer,
});
