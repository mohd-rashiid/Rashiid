import { createFail, createRequest, createSuccess } from "./students/action";
import { AxiosApi } from "../AxiosMethod";

export const createApi = (inputData, navigate) => {
  //   console.log(input);
  console.log(inputData);
  return async (dispatch) => {
    dispatch(createRequest(inputData));

    try {
      const res = await AxiosApi.post(`/student/student/`, inputData);
      console.log(res);
      dispatch(createSuccess(res));
      navigate("/students");
    } catch (error) {
      console.log(error);
      dispatch(createFail(error?.response?.data));
    }
  };
};
