import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Card, Col, Row, Table } from "reactstrap";
import Layout from "../component/layout";
import { map, range } from "lodash";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

import love from "../images/prooo.png";
import {
  CreateStudentCourseApi,
  deleteApi,
  getStudentCourseApi,
  singleViewApi,
} from "../store/students/useApi";
import { GrAdd, IconName } from "react-icons/gr";
import { IoEye } from "react-icons/io5";

function StudentView() {
  const dispatch = useDispatch();
  const params = useParams();
  // const location = useLocation();

  // console.log(location);
  // console.log(params);
  const navigate = useNavigate();

  const { singleData, loading, studentCourse, studentCourseData, count } =
    useSelector((state) => ({
      singleData: state.createReducer.singleData,
      studentCourse: state.createReducer.studentCourse,
      studentCourseData: state.createReducer.studentCourseData,

      count: state.createReducer.studentCourseDataCount,

      loading: state.loading,
    }));

  const deleteStudent = () => {
    dispatch(deleteApi(params.id, navigate));
  };

  useEffect(() => {
    dispatch(singleViewApi(params.id));
  }, [dispatch]);

  // console.log(studentCourseData?.data?.[2]);
  // useEffect(() => {
  //   dispatch(CreateStudentCourseApi());
  // }, []);

  // console.log(deleteApi());

  // dispatch(deleteApi());

  // const dataTable = singleData?.data?.results;

  const Array = singleData?.student_courses;

  return (
    <div>
      <section>
        <Layout>
          <h1
            style={{
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
              textDecoration: "underline",
            }}
          >
            {" "}
            STUDENT VIEW
          </h1>
          <div className="container" style={{ padding: "5px" }}>
            <div className="row justify-content-center">
              <img
                className="mt-5"
                style={{
                  height: "18%",
                  width: "18%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                src={love}
                alt="profile view"
              />
              <div className="col-sm-6 shadow rounded g-5">
                <div
                  className=" pt-3 text-secondary h2 justify-content-spacebetween"
                  style={{ padding: "15px" }}
                >
                  FULL NAME:-
                  <h10 style={{ color: "red" }}> {singleData?.full_name}</h10>
                  <br />
                  E-MAIL:-
                  <h10 style={{ color: "red" }}>{singleData?.email}</h10>
                  <br />
                  PHONE:-
                  <h10 style={{ color: "red" }}> {singleData?.phone}</h10>
                  <br />
                  ADDRESS:-
                  <h10 style={{ color: "red" }}>{singleData?.address}</h10>
                  <br />
                  DATE OF BIRTH:-
                  <h10 style={{ color: "red" }}>{singleData?.dob}</h10>
                  <br />
                  START DATE:-
                  <h10 style={{ color: "red" }}>{singleData?.start_date}</h10>
                  <br />
                  END DATE:-
                  <h10 style={{ color: "red" }}>{singleData?.end_date}</h10>
                  <br />
                  DESIGNATION:-
                  <h10 style={{ color: "red" }}>{singleData?.designation}</h10>
                  <br />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "10px",
                  }}
                >
                  <Button
                    type="button"
                    color="danger"
                    onClick={deleteStudent}
                    style={{
                      padding: "3px 20px 3px 20px",
                    }}
                    // style={{ padding: "0px" }}
                  >
                    Delete
                  </Button>
                  <Button
                    style={{ marginLeft: "15px", padding: "3px 20px 3px 20px" }}
                    type="button"
                    color="success"
                    onClick={() => navigate(`/UpdateDetails/${params.id}`)}
                  >
                    update
                  </Button>
                </div>
              </div>

              {/* <section>
          <div style={{ padding: "25px 35px 0px 35px" }} className="row">
            <div className="col-sm-12" shadow-rounded>
              <div className="card">
                <div className="card-body">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <h2>Student Course</h2>
                    <Button onClick={() => navigate(`/NewCourse/${params.id}`)}>
                      + Create
                    </Button>
                  </div>
                  <h4>yufyfyufuf</h4>
                  <h4>yufyfyufuf</h4>
                  <h4>yufyfyufuf</h4>
                  <h4>yufyfyufuf</h4>
                  <h4>yufyfyufuf</h4>
                  <h4>yufyfyufuf</h4>
                  <h4>yufyfyufuf</h4>
                  <h4>yufyfyufuf</h4>
                  <h4>yufyfyufuf</h4>
                  <h4>yufyfyufuf</h4>
                  <h4>yufyfyufuf</h4>
                  <h4>yufyfyufuf</h4>
                </div>
              </div>
            </div>
          </div>
        </section> */}
            </div>
          </div>
          {console.log(singleData?.student_courses)}
          <h1 style={{ textDecoration: "underline" }}></h1>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-6 shadow rounded g-5">
                <div className="pt-3 text-dark h2 justifyy-content-spacebetween">
                  {map(Array, (item) => (
                    <>
                      <h3>Course Name:-</h3>
                      <h2 style={{ color: "red" }}>
                        {item.course.course_name}
                      </h2>
                      <h3>Duration:- </h3>
                      <h2 style={{ color: "red" }}>{item.course.duration}</h2>
                      <h3>Progess:-</h3>
                      <h2 style={{ color: "red" }}>{item.progress}</h2>
                      <h3>Course Category Name:-</h3>
                      <h2 style={{ color: "red" }}>
                        {item.course.course_category.course_category_name}
                      </h2>
                      <h3>Designation</h3>
                      <h2 style={{ color: "red" }}>
                        {item.course.course_category.designation}
                      </h2>
                      {/* {console.log(
                        item.course.course_category.course_category_name
                      )} */}
                    </>
                  ))}
                  <div
                    className="d-flex"
                    style={{
                      justifyContent: "space-around",
                      padding: "5px 0px 10px 0px",
                    }}
                  >
                    <Button
                      style={{ padding: "3px 20px 3px 20px" }}
                      color="success"
                    >
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/NewCourse"
                      >
                        + Create Students Course
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </section>
    </div>
  );
}

export default StudentView;
