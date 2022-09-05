import { act } from "react-dom/test-utils";
import {
  CREATE_FAIL,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  GET_STUDENT_DATA_FAIL,
  GET_STUDENT_DATA_REQUEST,
  GET_STUDENT_DATA_SUCCESS,
  SINGLE_VIEW_FAIL,
  SINGLE_VIEW_REQUEST,
  SINGLE_VIEW_SUCCESS,
} from "./actiontype";

const initiailState = {
  loading: false,
  error: "",
  userDetails: [],
  studentData: {},
  singleData: {},
};

const createReducer = (state = initiailState, action) => {
  switch (action.type) {
    case CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
        error: "",
      };
    case CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //STUDENTS_DATASSS//

    case GET_STUDENT_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_STUDENT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        studentData: action.payload,
        error: "",
      };
    case GET_STUDENT_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //single view

    case SINGLE_VIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        singleData: action.payload,
        error: "",
      };
    case SINGLE_VIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default createReducer;
