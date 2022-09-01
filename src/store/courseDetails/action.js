import {
  CREATE_COURSE_FAIL,
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
} from "./actionType";

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
