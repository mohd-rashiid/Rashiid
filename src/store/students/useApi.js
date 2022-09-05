import {
  createFail,
  createRequest,
  createSuccess,
  getStudentdataFail,
  getStudentdataRequest,
  getStudentdatasuccess,
} from "./action";
// import { AxiosApi } from "../../../AxiosMethod";
import { AxiosApi } from "../AxiosMethod";

export const createApi = (input, navigate) => {
  //   console.log(input);
  console.log(input);
  return async (dispatch) => {
    dispatch(createRequest(input));

    try {
      const res = await AxiosApi.post(`/student/student/`, input);
      console.log(res);
      dispatch(createSuccess(res));
      navigate("/students");
    } catch (error) {
      // console.log(error);
      dispatch(createFail(error?.response?.data));
    }
  };
};

export const getDataApi = () => {
  //   console.log(input);
  // console.log();
  return async (dispatch) => {
    dispatch(getStudentdataRequest());

    try {
      const res = await AxiosApi.get(`/student/student/`);
      console.log(res);
      dispatch(getStudentdatasuccess(res));
      // navigate("/students");
    } catch (error) {
      // console.log(error);
      dispatch(getStudentdataFail(error?.response?.data));
    }
  };
};
