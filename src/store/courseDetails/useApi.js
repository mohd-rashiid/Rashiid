import { AxiosApi } from "../AxiosMethod";
import {
  createCourseFail,
  createCourseRequest,
  createCourseSuccess,
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
