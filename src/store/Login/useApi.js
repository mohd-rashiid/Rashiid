// import { AxiosApi } from "../AxiosMethod";
import { AxiosApi } from "../AxiosMethod";
import {
  loginFail,
  loginRequest,
  loginSuccess,
  logoutFail,
  logoutRequest,
  logoutsuccess,
} from "./action";

export const loginApi = (input, navigate) => {
  console.log(input);
  return async (dispatch) => {
    dispatch(loginRequest(input));

    try {
      const res = await AxiosApi.post(`/account/login/`, input);
      console.log(res);
      dispatch(loginSuccess(res));

      sessionStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (error) {
      // console.log(error?.response?.data);
      dispatch(loginFail(error?.response?.data));
    }

    // if (res.status === 200) {
    //   dispatch(loginSuccess(res));
    //   sessionStorage.setItem("token", res.data.token);
    //   navigate("/home");
    // } else {
    //   console.log(res);
    //   dispatch(loginFail(res.data.error_message));
    //   alert("password or username is incorrect");
    // }
  };
};

export const logoutApi = (navigate) => {
  // console.log(input);
  return async (dispatch) => {
    dispatch(logoutRequest());

    try {
      const token = sessionStorage.getItem("token");
      const res = await AxiosApi.post(`/account/logout/`, token);
      console.log(res);
      if (res) {
        dispatch(logoutsuccess(res));
        sessionStorage.clear();
        navigate("/");
      }
    } catch (error) {
      // console.log(error?.response?.data);
      dispatch(logoutFail(error?.response?.data));
    }
  };
};
// import axios from "axios";
// import {
//   loginRequest,
//   loginUser,
//   loginUserFail,
//   loginUserSuccess,
// } from "./action";

// export const loginUserApi = (input) => {
//   return async (dispatch) => {
//     dispatch(loginRequest(input));

//     const res = await axios.post(
//       ` http://192.168.1.209:3000/api/v1/account/login`,
//       input
//     );
//     console.log(res);

//     if (res.data.status === 200) {
//       dispatch(loginUserSuccess(res));
//     } else {
//       dispatch(loginUserFail(res.data.error));
//     }
//   };
// };
