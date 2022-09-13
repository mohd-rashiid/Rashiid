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
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAIL,
  UPDATE_STUDENT_DATA_REQUEST,
  UPDATE_STUDENT_DATA_SUCCESS,
  UPDATE_STUDENT_DATA_FAIL,
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
export const singleViewSuccess = (singleData) => ({
  type: SINGLE_VIEW_SUCCESS,
  payload: singleData,
});
export const singleViewfail = () => ({
  type: SINGLE_VIEW_FAIL,
  payload: "",
});

//delete  student

export const deleteStudentRequest = () => ({
  type: DELETE_STUDENT_REQUEST,
  payload: "",
});
export const deleteStudentSuccess = (deleteStudent) => ({
  type: DELETE_STUDENT_SUCCESS,
  payload: deleteStudent,
});
export const deleteStudentFail = () => ({
  type: DELETE_STUDENT_FAIL,
  payload: "",
});

//update student data

export const updateStudentDataRequest = () => ({
  type: UPDATE_STUDENT_DATA_REQUEST,
  payload: "",
});
export const updateStudentDataSuccess = (updateStudent, catId) => ({
  type: UPDATE_STUDENT_DATA_SUCCESS,
  payload: updateStudent,
  catId,
});

export const updateStudentDataFail = () => ({
  type: UPDATE_STUDENT_DATA_FAIL,
  payload: "",
});
