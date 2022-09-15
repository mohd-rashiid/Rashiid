import {
  COURSE_SINGLE_VIEW_FAIL,
  COURSE_SINGLE_VIEW_REQUEST,
  COURSE_SINGLE_VIEW_SUCCESS,
  CREATE_COURSE_FAIL,
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  DELETE_COURSE_FAIL,
  DELETE_COURSE_REQUEST,
  DELETE_COURSE_SUCCESS,
  GET_COURSE_DATA_FAIL,
  GET_COURSE_DATA_REQUEST,
  GET_COURSE_DATA_SUCCESS,
  UPDATE_COURSE_FAIL,
  UPDATE_COURSE_REQUEST,
  UPDATE_COURSE_SUCCESS,
} from "./actionType";

const initiailState = {
  loading: false,
  error: "",
  userDetails: [],
  getCourse: {},
  courseSingleView: {},
  deleteCourse: {},
  updateCourse: {},
};

const createCourseReducer = (state = initiailState, action) => {
  switch (action.type) {
    case CREATE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
        error: "",
      };
    case CREATE_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //  GET COURSE DATA //

    case GET_COURSE_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_COURSE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        getCourse: action.payload,
        error: "",
      };
    case GET_COURSE_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // single view //

    case COURSE_SINGLE_VIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COURSE_SINGLE_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        courseSingleView: action.payload,
        error: "",
      };
    case COURSE_SINGLE_VIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // DELETE COURSE //

    case DELETE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteCourse: action.payload,
        error: "",
      };

    case DELETE_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // UPDATE COURSE //
    case UPDATE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        updateCourse: action.payload,
        error: "",
      };
    case UPDATE_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default createCourseReducer;
