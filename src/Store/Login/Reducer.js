import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";
// import {LOGOUT_FAIL,LOGOUT_REQUEST,LOGOUT_SUCCESS} from "./actionType"

const initiailState = {
  loading: false,
  error: "",
  userDetails: [],
};

const LoginReducer = (state = initiailState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
        error: "",
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
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
