import { combineReducers } from "redux";
import LoginReducer from "./Login/Reducer";
import Logout from "../pages/Logout";

const rootReducer = combineReducers({
  LoginReducer,
  Logout,
});

export default rootReducer;
