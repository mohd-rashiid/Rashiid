import { combineReducers } from "redux";
import LoginReducer from "./Login/Reducer";
import Logout from "../pages/Logout";
import createReducer from "./students/reducer";
// import createCourseCategoryReducer from "./courseCategory/Reducer";
import createCourseCategoryReducer from "./courseCategory/Reducer";
import createCourseReducer from "./courseDetails/Reducer";
import profileReducer from "./Login/profileReducer";
const rootReducer = combineReducers({
  LoginReducer,
  Logout,
  createReducer,
  createCourseCategoryReducer,
  createCourseReducer,
  profileReducer,
});

export default rootReducer;
