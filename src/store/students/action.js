import { CREATE_REQUEST, CREATE_SUCCESS, CREATE_FAIL } from "./actiontype";

export const createRequest = (inputData) => ({
  type: CREATE_REQUEST,
  payload: inputData,
});
export const createSuccess = (userDetails) => ({
  type: CREATE_SUCCESS,
  payload: userDetails,
});
export const createFail = (error) => ({
  type: CREATE_FAIL,
  payload: error,
});
