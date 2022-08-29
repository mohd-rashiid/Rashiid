import { clear } from "@testing-library/user-event/dist/clear";
import { Action } from "history";
import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL } from "./actionType";

const initiailState = {
  loding: false,
  error: "",
  userDetails: [clear],
};

const LogoutReducer = (state = initiailState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: "false",
        userDetails: clear,
        error: "false",
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default LogoutReducer;
