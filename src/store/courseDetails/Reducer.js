import {
  CREATE_COURSE_FAIL,
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
} from "./actionType";

const initiailState = {
  loading: false,
  error: "",
  userDetails: [],
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
    default:
      return state;
  }
};
export default createCourseReducer;
