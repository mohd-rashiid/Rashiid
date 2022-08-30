import { combineReducers } from "redux";
import LoginReducer from "./Login/Reducer";
import Logout from "../pages/Logout";
import createReducer from "../store/students/reducer";

const rootReducer = combineReducers({
  LoginReducer,
  Logout,
  createReducer,
});

export default rootReducer;
