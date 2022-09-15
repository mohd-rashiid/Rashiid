import {
  COURSE_SINGLE_VIEW_FAIL,
  COURSE_SINGLE_VIEW_REQUEST,
  COURSE_SINGLE_VIEW_SUCCESS,
  CREATE_COURSE_FAIL,
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  GET_COURSE_DATA_FAIL,
  GET_COURSE_DATA_REQUEST,
  GET_COURSE_DATA_SUCCESS,
} from "./actionType";

// CREATE COURSE //

export const createCourseRequest = (values) => ({
  type: CREATE_COURSE_REQUEST,
  payload: values,
});
export const createCourseSuccess = (userDetails) => ({
  type: CREATE_COURSE_SUCCESS,
  payload: userDetails,
});
export const createCourseFail = (error) => ({
  type: CREATE_COURSE_FAIL,
  payload: error,
});

//  GET COURSE DATA //

export const getCourseDataRequest = () => ({
  type: GET_COURSE_DATA_REQUEST,
  payload: "",
});
export const getCourseDataSuccess = (getCourse) => ({
  type: GET_COURSE_DATA_SUCCESS,
  payload: getCourse,
});
export const getCourseDataFail = (error) => ({
  type: GET_COURSE_DATA_FAIL,
  payload: error,
});

// Course single view //

export const CourseSingleViewRequest = () => ({
  type: COURSE_SINGLE_VIEW_REQUEST,
  payload: "",
});
export const CourseSingleViewSuccess = (courseSingleView) => ({
  type: COURSE_SINGLE_VIEW_SUCCESS,
  payload: courseSingleView,
});
export const CourseSingleViewFail = (error) => ({
  type: COURSE_SINGLE_VIEW_FAIL,
  payload: error,
});
