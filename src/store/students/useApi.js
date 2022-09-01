import { createFail, createRequest, createSuccess } from "./action";
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
