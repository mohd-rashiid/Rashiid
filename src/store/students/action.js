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
  CREATE_STUDENT_COURSE_REQUEST,
  CREATE_STUDENT_COURSE_SUCCESS,
  CREATE_STUDENT_COURSE_FAIL,
  GET_STUDENT_COURSE_REQUEST,
  GET_STUDENT_COURSE_SUCCESS,
  GET_STUDENT_COURSE_FAIL,
  STUDENTS_COURSES_SINGLE_VIEW_REQUEST,
  STUDENTS_COURSES_SINGLE_VIEW_SUCCESS,
  STUDENTS_COURSES_SINGLE_VIEW_FAIL,
  STUDENTS_COURSES_DELETE_REQUEST,
  STUDENTS_COURSES_DELETE_SUCCESS,
  STUDENTS_COURSES_DELETE_FAIL,
  STUDENT_CERTIFICATE_REQUEST,
  STUDENT_CERTIFICATE_SUCCESS,
  STUDENT_CERTIFICATE_FAIL,
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

//delete  student //

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

// create student course //

export const CreateStudentCourseRequest = (stdCourseData) => ({
  type: CREATE_STUDENT_COURSE_REQUEST,
  payload: stdCourseData,
});
export const CreateStudentCourseSuccess = (studentCourse) => ({
  type: CREATE_STUDENT_COURSE_SUCCESS,
  payload: studentCourse,
});

export const CreateStudentCourseFail = (error) => ({
  type: CREATE_STUDENT_COURSE_FAIL,
  payload: error,
});

//  get student course //

export const GetStudentCourseDataRequest = () => ({
  type: GET_STUDENT_COURSE_REQUEST,
  payload: "",
});
export const GetStudnetCourseDataSuccess = (studentCourseData) => ({
  type: GET_STUDENT_COURSE_SUCCESS,
  payload: studentCourseData,
});
export const GetStudentCourseDataFail = (error) => ({
  type: GET_STUDENT_COURSE_FAIL,
  payload: error,
});
//  STUDENTS COURSES SINGLE VIEW //

export const StudentsCoursesSingleViewRequest = () => ({
  type: STUDENTS_COURSES_SINGLE_VIEW_REQUEST,
  payload: "",
});

export const StudentsCoursesSingleViewSuccess = (studentCourseSingleVIew) => ({
  type: STUDENTS_COURSES_SINGLE_VIEW_SUCCESS,
  payload: studentCourseSingleVIew,
});

export const StudentsCoursesSingleViewFail = (error) => ({
  type: STUDENTS_COURSES_SINGLE_VIEW_FAIL,
  payload: error,
});

// DELETE STUDENTS COURSE //

export const StudentsCoursesDeleteRequest = () => ({
  type: STUDENTS_COURSES_DELETE_REQUEST,
  payload: "",
});

export const StudentsCoursesDeleteSccess = (id) => ({
  type: STUDENTS_COURSES_DELETE_SUCCESS,
  payload: id,
});

export const StudentsCoursesDeleteFail = (error) => ({
  type: STUDENTS_COURSES_DELETE_FAIL,
  payload: error,
});

// show student details in certificate //

export const studentCertificateRequest = () => ({
  type: STUDENT_CERTIFICATE_REQUEST,
  payload: "",
});
export const studentCertificateSuccess = (studentCertificate) => ({
  type: STUDENT_CERTIFICATE_SUCCESS,
  payload: studentCertificate,
});
export const studentCertificateFail = (error) => ({
  type: STUDENT_CERTIFICATE_FAIL,
  payload: error,
});
