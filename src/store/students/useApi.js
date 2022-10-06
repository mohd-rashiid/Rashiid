import {
  createFail,
  createRequest,
  CreateStudentCourseFail,
  CreateStudentCourseRequest,
  CreateStudentCourseSuccess,
  createSuccess,
  deleteStudentFail,
  deleteStudentRequest,
  deleteStudentSuccess,
  GetStudentCourseDataFail,
  GetStudentCourseDataRequest,
  getStudentdataFail,
  getStudentdataRequest,
  getStudentdatasuccess,
  GetStudnetCourseDataSuccess,
  singleViewfail,
  singleViewRequest,
  singleViewSuccess,
  studentCertificateFail,
  studentCertificateRequest,
  studentCertificateSuccess,
  studentsCertificateFail,
  StudentsCoursesDeleteFail,
  StudentsCoursesDeleteRequest,
  StudentsCoursesDeleteSccess,
  StudentsCoursesSingleViewFail,
  StudentsCoursesSingleViewRequest,
  StudentsCoursesSingleViewSuccess,
  updateStudentDataFail,
  updateStudentDataRequest,
  updateStudentDataSuccess,
} from "./action";
// import { AxiosApi } from "../../../AxiosMethod";
import { AxiosApi } from "../AxiosMethod";

// create student//

export const createApi = (input, navigate) => {
  //   console.log(input);
  // console.log(input);
  return async (dispatch) => {
    dispatch(createRequest(input));

    try {
      const res = await AxiosApi.post(`/student/student/`, input);
      console.log(res);
      dispatch(createSuccess(res));
      navigate("/students");
    } catch (error) {
      // console.log(error);
      dispatch(createFail(error?.response?.data));
    }
  };
};

// get studemts data //

export const getDataApi = (page) => {
  //   console.log(input);
  // console.log();
  console.log(page);
  return async (dispatch) => {
    dispatch(getStudentdataRequest());

    try {
      const res = await AxiosApi.get(`/student/student/?page=${page ?? 1}`);
      // console.log(res);
      dispatch(getStudentdatasuccess(res));
      // navigate("/students");
    } catch (error) {
      // console.log(error);
      dispatch(getStudentdataFail(error?.response?.data));
    }
  };
};

// single view //

export const singleViewApi = (id) => {
  //   console.log(input);
  // console.log();
  return async (dispatch) => {
    dispatch(singleViewRequest(id));

    try {
      const res = await AxiosApi.get(`/student/student/${id}`);
      // console.log(res);
      dispatch(singleViewSuccess(res.data));
      // navigate("/students");
    } catch (error) {
      // console.log(error);
      dispatch(singleViewfail(error?.response?.data));
    }
  };
};
// delete  student //

export const deleteApi = (id, navigate) => {
  //   console.log(input);
  // console.log();
  return async (dispatch) => {
    dispatch(deleteStudentRequest(id));

    try {
      const res = await AxiosApi.delete(`/student/student/${id}`);
      console.log(res);

      dispatch(deleteStudentSuccess(res.data));
      navigate("/Students");
    } catch (error) {
      // console.log(error);
      dispatch(deleteStudentFail(error?.response?.data));
    }
  };
};

// update students //

export const UpdateStudentApi = (catId, navigate, input) => {
  //   console.log(input);
  return async (dispatch) => {
    dispatch(updateStudentDataRequest(catId));

    try {
      const res = await AxiosApi.put(`/student/student/${catId}/`, input);
      console.log(res);

      dispatch(updateStudentDataSuccess(res.data));
      navigate(`/StudentView/${catId}`);
    } catch (error) {
      // console.log(error);
      dispatch(updateStudentDataFail(error?.response?.data));
    }
  };
};

// create student course //

export const CreateStudentCourseApi = (catId, navigate, stdCourseData) => {
  //   console.log(input);
  return async (dispatch) => {
    dispatch(CreateStudentCourseRequest(stdCourseData));

    try {
      const res = await AxiosApi.post(
        `/student/student_course/`,
        stdCourseData
      );
      console.log(res);

      dispatch(CreateStudentCourseSuccess(res.data));
      navigate(`/studentscourses/`);
    } catch (error) {
      // console.log(error);
      dispatch(CreateStudentCourseFail(error?.response?.data));
    }
  };
};

// get student course data //

export const getStudentCourseApi = (page) => {
  //   console.log(input);
  return async (dispatch) => {
    dispatch(GetStudentCourseDataRequest());

    try {
      const res = await AxiosApi.get(
        `/student/student_course/?page=${page ?? 1}`
      );
      // console.log(res);

      dispatch(GetStudnetCourseDataSuccess(res.data));
      // navigate(`/StudentView/${res.student}`);
    } catch (error) {
      // console.log(error);
      dispatch(GetStudentCourseDataFail(error?.response?.data));
    }
  };
};

// Students COurses single view //

// export const StudentsCoursesSingleViewApi = (id) => {
//   //   console.log(input);
//   return async (dispatch) => {
//     dispatch(StudentsCoursesSingleViewRequest());

//     try {
//       const res = await AxiosApi.get(`/student/student_course/${id}`);
//       console.log(res);

//       dispatch(StudentsCoursesSingleViewSuccess(res.data));
//       // navigate(`/StudentView/${res.student}`);
//     } catch (error) {
//       // console.log(error);
//       dispatch(StudentsCoursesSingleViewFail(error?.response?.data));
//     }
//   };
// };

//  delete Students Courses //

export const DeleteStudentsCourseApi = (id, navigate) => {
  //   console.log(input);
  return async (dispatch) => {
    dispatch(StudentsCoursesDeleteRequest());

    try {
      const res = await AxiosApi.delete(`/student/student_course/${id}`);
      console.log(res);
      if (res.status === 204) {
        dispatch(StudentsCoursesDeleteSccess(id));
      }

      // navigate(`/StudentView/${res.student}`);
    } catch (error) {
      // console.log(error);
      dispatch(StudentsCoursesDeleteFail(error?.response?.data));
    }
  };
};

// show student details in certificate //

export const mainCertificate = (id) => {
  //   console.log(input);
  return async (dispatch) => {
    dispatch(studentCertificateRequest());

    try {
      const res = await AxiosApi.get(`/student/student/${id}`);
      // console.log(res?.data?.results);

      dispatch(studentCertificateSuccess(res?.data));

      // navigate(`/StudentView/${res.student}`);
    } catch (error) {
      // console.log(error);
      dispatch(studentCertificateFail(error?.response?.data));
    }
  };
};
