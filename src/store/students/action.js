import { type } from "@testing-library/user-event/dist/type";
import {
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_FAIL,
  GET_STUDENT_DATA_REQUEST,
  GET_STUDENT_DATA_SUCCESS,
  GET_STUDENT_DATA_FAIL,
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

export const getStudentdataRequest = () => ({
  type: GET_STUDENT_DATA_REQUEST,
  payload: "",
});
export const getStudentdatasuccess = () => ({
  type: GET_STUDENT_DATA_SUCCESS,
  payload: "",
});
export const getStudentdataFail = () => ({
  type: GET_STUDENT_DATA_FAIL,
  payload: "",
});
