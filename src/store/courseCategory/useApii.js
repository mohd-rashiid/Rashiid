import axios from "axios";
import { AxiosApi } from "../AxiosMethod";
import {
  CategoryDeleteFail,
  CategoryDeleteRequest,
  CategoryDeleteSuccess,
  CategorySingleViewFail,
  CategorySingleViewRequest,
  CategorySingleViewSuccess,
  courseCategoryUpdateFail,
  courseCategoryUpdateRequest,
  courseCategoryUpdateSuccess,
  createCourseCategoryFail,
  createCourseCategoryRequest,
  createCourseCategorySuccess,
  getCourseCategoryFail,
  getCourseCategoryRequest,
  getCourseCategorySuccess,
} from "./action";

export const createCourseCategoryApi = (data, navigate) => {
  return async (dispatch) => {
    dispatch(createCourseCategoryRequest(data));
    try {
      const res = await AxiosApi.post(`/course/course_category/`, data);
      dispatch(createCourseCategorySuccess(res));
      navigate("/CategoryList");
    } catch (error) {
      dispatch(createCourseCategoryFail(error?.response?.data));
    }
  };
};
//get-course category

export const getCourseCategoryApi = (page) => {
  return async (dispatch) => {
    dispatch(getCourseCategoryRequest());
    try {
      const res = await AxiosApi.get(
        `/course/course_category/?page=${page ?? 1}`
      );
      dispatch(getCourseCategorySuccess(res.data));
    } catch (error) {
      dispatch(getCourseCategoryFail(error?.response?.data));
    }
  };
};

// single view

export const CategorySingleViewApi = (id) => {
  return async (dispatch) => {
    dispatch(CategorySingleViewRequest());
    try {
      const res = await AxiosApi.get(`/course/course_category/${id}`);
      dispatch(CategorySingleViewSuccess(res.data));
    } catch (error) {
      dispatch(CategorySingleViewFail(error?.response?.data));
    }
  };
};
// console.log(CategorySingleViewApi);

//  delete course category //

export const CourseCategoryDeleteApi = (id, navigate) => {
  return async (dispatch) => {
    dispatch(CategoryDeleteRequest(id));
    try {
      const res = await AxiosApi.delete(`/course/course_category/${id}`);
      dispatch(CategoryDeleteSuccess(res.data));
      navigate("/CategoryList");
    } catch (error) {
      dispatch(CategoryDeleteFail(error?.response?.data));
    }
  };
};

// course category update //

export const CourseCategoryUpdateApi = (catId, navigate, data) => {
  return async (dispatch) => {
    dispatch(courseCategoryUpdateRequest(catId));
    try {
      const res = await AxiosApi.put(`/course/course_category/${catId}/`, data);
      dispatch(courseCategoryUpdateSuccess(res.data));
      navigate(`/CourseView/${catId}`);
    } catch (error) {
      dispatch(courseCategoryUpdateFail(error?.response?.data));
    }
  };
};
