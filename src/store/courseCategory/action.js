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
export const getCourseCategoryRequest = () => ({
  type: GET_CATEGORY_REQUEST,
  payload: "",
});
export const getCourseCategorySuccess = (courseCategory) => ({
  type: GET_CATEGORY_SUCCESS,
  payload: courseCategory,
});
export const getCourseCategoryFail = (error) => ({
  type: GET_CATEGORY_FAIL,
  payload: error,
});
// single view

export const CategorySingleViewRequest = () => ({
  type: COURSE_CATEGORY_SINGLEVIEW_REQUEST,
  payload: "",
});
export const CategorySingleViewSuccess = (singleView) => ({
  type: COURSE_CATEGORY_SINGLEVIEW_SUCCESS,
  payload: singleView,
});
export const CategorySingleViewFail = () => ({
  type: COURSE_CATEGORY_SINGLEVIEW_FAIL,
  payload: "",
});

//DELETE course category

export const CategoryDeleteRequest = () => ({
  type: COURSE_CATEGORY_DELETE_REQUEST,
  payload: "",
});
export const CategoryDeleteSuccess = (deleteCategory) => ({
  type: COURSE_CATEGORY_DELETE_SUCCESS,
  payload: deleteCategory,
});

export const CategoryDeleteFail = () => ({
  type: COURSE_CATEGORY_DELETE_FAIL,
  payload: "",
});

// UPDATE COURSE CATEGORY  DETAILS

export const courseCategoryUpdateRequest = () => ({
  type: COURSE_CATEGORY_UPDATE_REQUEST,
  payload: "",
});

export const courseCategoryUpdateSuccess = (courseCategoryUpdate, catId) => ({
  type: COURSE_CATEGORY_UPADATE_SUCCESS,
  payload: courseCategoryUpdate,
  catId,
});

export const courseCategoryUpdateFail = () => ({
  type: COURSE_CATEGORY_UPDATE_FAIL,
  payload: "",
});
