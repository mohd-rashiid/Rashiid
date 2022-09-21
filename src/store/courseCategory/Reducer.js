import { Action } from "history";
import {
  COURSE_CATEGORY_DELETE_FAIL,
  COURSE_CATEGORY_DELETE_REQUEST,
  COURSE_CATEGORY_DELETE_SUCCESS,
  COURSE_CATEGORY_SINGLEVIEW_FAIL,
  COURSE_CATEGORY_SINGLEVIEW_REQUEST,
  COURSE_CATEGORY_SINGLEVIEW_SUCCESS,
  COURSE_CATEGORY_UPADATE_SUCCESS,
  COURSE_CATEGORY_UPDATE_FAIL,
  COURSE_CATEGORY_UPDATE_REQUEST,
  CREATE_COURSE_CATEGORY_FAIL,
  CREATE_COURSE_CATEGORY_REQUEST,
  CREATE_COURSE_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
} from "./actionType";

const initiailState = {
  loading: false,
  error: "",
  userDetails: [],
  courseCategory: {},
  singleView: {},
  deleteCategory: {},
  courseCategoryUpdate: {},
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
    // get category details

    case GET_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        courseCategory: action.payload,
        courseCategoryCount: action.payload.count,
        error: "",
      };
    case GET_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //  course category sinlge view
    case COURSE_CATEGORY_SINGLEVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COURSE_CATEGORY_SINGLEVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        singleView: action.payload,
        error: "",
      };
    case COURSE_CATEGORY_SINGLEVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // course category delete

    case COURSE_CATEGORY_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COURSE_CATEGORY_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        delete: action.payload,
        error: "",
      };
    case COURSE_CATEGORY_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // course category update

    case COURSE_CATEGORY_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case COURSE_CATEGORY_UPADATE_SUCCESS:
      return {
        ...state,
        loading: false,
        courseCategoryUpdate: action.payload,
        error: "",
      };
    case COURSE_CATEGORY_UPDATE_FAIL:
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
