import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

export const loginRequest = (input) =>
  // console.log(input),
  ({
    type: LOGIN_REQUEST,
    payload: input,
  });

export const loginSuccess = (userDetails) => ({
  type: LOGIN_SUCCESS,
  payload: userDetails,
});

export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

// import {
//   LOGIN_REQUEST,
//   LOGIN_USER,
//   LOGIN_USER_FAIL,
//   LOGIN_USER_SUCCESS,
// } from "./actionType";

// export const loginRequest = (input) => ({
//   type: LOGIN_REQUEST,
//   payload: input,
// });

// export const loginUserSuccess = (user) => ({
//   type: LOGIN_REQUEST,
//   payload: user,
// });

// export const loginUserFail = (error) => ({
//   type: LOGIN_REQUEST,
//   payload: error,
// });
