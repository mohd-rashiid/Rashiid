import { Action } from "history";
import {
  CREATE_COURSE_CATEGORY_FAIL,
  CREATE_COURSE_CATEGORY_REQUEST,
  CREATE_COURSE_CATEGORY_SUCCESS,
} from "./actionType";

const initiailState = {
  loading: false,
  error: "",
  userDetails: [],
};

const createCourseCategoryReducer = (state = initiailState, action) => {
  switch (action.type) {
    case CREATE_COURSE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_COURSE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
        error: "",
      };
    case CREATE_COURSE_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default createCourseCategoryReducer;
