import { CREATE_REQUEST, CREATE_SUCCESS, CREATE_FAIL } from "./actiontype";

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
