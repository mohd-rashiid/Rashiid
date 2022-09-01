import axios from "axios";
import { AxiosApi } from "../AxiosMethod";
import {
  createCourseCategoryFail,
  createCourseCategoryRequest,
  createCourseCategorySuccess,
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
