import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const initiailState = {
  loding: false,
  error: "",
  userDetails: [],
};

const LoginReducer = (state = initiailState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loding: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loding: false,
        userDetails: action.payload,
        error: "",
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loding: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
// import {
//   LOGIN_REQUEST,
//   LOGIN_USER_FAIL,
//   LOGIN_USER_SUCCESS,
// } from "./actionType";

// const initialState = {
//   error: "",
//   loading: false,
//   user: [],
// };

// const login = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case LOGIN_USER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         user: action.payload,
//       };
//     case LOGIN_USER_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default login;
