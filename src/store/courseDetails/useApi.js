import { AxiosApi } from "../AxiosMethod";
import {
  CourseSingleViewFail,
  CourseSingleViewRequest,
  CourseSingleViewSuccess,
  createCourseFail,
  createCourseRequest,
  createCourseSuccess,
  getCourseDataFail,
  getCourseDataRequest,
  getCourseDataSuccess,
  UpdateCoursefail,
  UpdateCourseRequest,
  UpdateCourseSuccess,
} from "./action";

export const createCourseApi = (values, navigate) => {
  return async (dispatch) => {
    dispatch(createCourseRequest(values));
    try {
      const res = await AxiosApi.post(`/course/course/`, values);
      dispatch(createCourseSuccess(res));
      navigate("/Courses");
    } catch (error) {
      dispatch(createCourseFail(error?.responce?.data));
    }
  };
};

//  GET COURSE DATA //

export const getCourseDataApi = (page) => {
  return async (dispatch) => {
    dispatch(getCourseDataRequest());
    try {
      const res = await AxiosApi.get(`/course/course/?page=${page ?? 1}`);
      dispatch(getCourseDataSuccess(res.data));
    } catch (error) {
      dispatch(getCourseDataFail(error?.responce?.data));
    }
  };
};

// single view //

export const CourseSingleViewApi = (id) => {
  return async (dispatch) => {
    dispatch(CourseSingleViewRequest());
    try {
      const res = await AxiosApi.get(`/course/course/${id}`);
      dispatch(CourseSingleViewSuccess(res.data));
    } catch (error) {
      dispatch(CourseSingleViewFail(error?.responce?.data));
    }
  };
};

// delete course //

export const DeleteCourseApi = (id, navigate) => {
  return async (dispatch) => {
    dispatch(CourseSingleViewRequest(id));
    try {
      const res = await AxiosApi.delete(`/course/course/${id}`);
      dispatch(CourseSingleViewSuccess(res.data));
      navigate("/Courses");
    } catch (error) {
      dispatch(CourseSingleViewFail(error?.responce?.data));
    }
  };
};
//  update course //

export const UpdateCourseApi = (catId, navigate, values) => {
  return async (dispatch) => {
    dispatch(UpdateCourseRequest(catId));
    try {
      const res = await AxiosApi.put(`/course/course/${catId}/`, values);
      dispatch(UpdateCourseSuccess(res.data));
      navigate(`/View/${catId}`);
    } catch (error) {
      dispatch(UpdateCoursefail(error?.responce?.data));
    }
  };
};
