import axios from "axios";
import { loginFail, loginRequest, loginSuccess } from "./action";

export const loginApi = (input, navigate) => {
  console.log(input);
  return async (dispatch) => {
    dispatch(loginRequest(input));

    const res = await axios.post(
      `http://192.168.1.47:3000/api/v1/account/login`,
      input
    );

    console.log(res);

    if (res.status === 200) {
      dispatch(loginSuccess(res));
      sessionStorage.setItem("token", res.data.token);
      navigate("/home");
    } else {
      dispatch(loginFail(res.data.error_message));
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
