import { type } from "@testing-library/user-event/dist/type";
import {
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_FAIL,
  GET_STUDENT_DATA_REQUEST,
  GET_STUDENT_DATA_SUCCESS,
  GET_STUDENT_DATA_FAIL,
  SINGLE_VIEW_REQUEST,
  SINGLE_VIEW_SUCCESS,
  SINGLE_VIEW_FAIL,
} from "./actiontype";

export const createRequest = (input) => ({
  type: CREATE_REQUEST,
  payload: input,
});
export const createSuccess = (userDetails) => ({
  type: CREATE_SUCCESS,
  payload: userDetails,
});
export const createFail = (error) => ({
  type: CREATE_FAIL,
  payload: error,
});

//student_datas

export const getStudentdataRequest = () => ({
  type: GET_STUDENT_DATA_REQUEST,
  payload: "",
});
export const getStudentdatasuccess = (studentData) => ({
  type: GET_STUDENT_DATA_SUCCESS,
  payload: studentData,
});
export const getStudentdataFail = () => ({
  type: GET_STUDENT_DATA_FAIL,
  payload: "",
});

// single view datas

export const singleViewRequest = () => ({
  type: SINGLE_VIEW_REQUEST,
  payload: "",
});
export const singleViewSuccess = () => ({
  type: SINGLE_VIEW_SUCCESS,
  payload: "",
});
export const singleViewfail = () => ({
  type: SINGLE_VIEW_FAIL,
  payload: "",
});
