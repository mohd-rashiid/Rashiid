import {
  CREATE_COURSE_CATEGORY_FAIL,
  CREATE_COURSE_CATEGORY_REQUEST,
  CREATE_COURSE_CATEGORY_SUCCESS,
} from "./actionType";

export const createCourseCategoryRequest = (data) => ({
  type: CREATE_COURSE_CATEGORY_REQUEST,
  payload: data,
});

export const createCourseCategorySuccess = (userDetails) => ({
  type: CREATE_COURSE_CATEGORY_SUCCESS,
  payload: userDetails,
});
export const createCourseCategoryFail = (error) => ({
  type: CREATE_COURSE_CATEGORY_FAIL,
  payload: error,
});
