import { act } from "react-dom/test-utils";
import {
  CREATE_FAIL,
  CREATE_REQUEST,
  CREATE_STUDENT_COURSE_FAIL,
  CREATE_STUDENT_COURSE_REQUEST,
  CREATE_STUDENT_COURSE_SUCCESS,
  CREATE_SUCCESS,
  DELETE_STUDENT_FAIL,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  GET_STUDENT_COURSE_FAIL,
  GET_STUDENT_COURSE_REQUEST,
  GET_STUDENT_COURSE_SUCCESS,
  GET_STUDENT_DATA_FAIL,
  GET_STUDENT_DATA_REQUEST,
  GET_STUDENT_DATA_SUCCESS,
  SINGLE_VIEW_FAIL,
  SINGLE_VIEW_REQUEST,
  SINGLE_VIEW_SUCCESS,
  UPDATE_STUDENT_DATA_FAIL,
  UPDATE_STUDENT_DATA_REQUEST,
  UPDATE_STUDENT_DATA_SUCCESS,
} from "./actiontype";

const initiailState = {
  loading: false,
  error: "",
  userDetails: [],
  studentData: {},
  singleData: {},
  deleteStudent: {},
  updateStudent: {},
  studentCourse: {},
  studentCourseData: [],
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

    //  single view  //

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

    // delete student //

    case DELETE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteData: action.payload,
        error: "",
      };
    case DELETE_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // update student data //

    case UPDATE_STUDENT_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_STUDENT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        updateStudent: action.payload,
        error: "",
      };

    case UPDATE_STUDENT_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //   student course //

    case CREATE_STUDENT_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_STUDENT_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        studentCourse: action.payload,
        error: "",
      };

    case CREATE_STUDENT_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //  GET STUDENT COURSE DATA //

    case GET_STUDENT_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_STUDENT_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        studentCourseData: action.payload.results,
        studentCourseDataCount: action.payload.count,
        error: "",
      };

    case GET_STUDENT_COURSE_FAIL:
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
