import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "reactstrap";
import Layout from "../component/layout";
import love from "../images/prooo.png";
import {
  CreateStudentCourseApi,
  deleteApi,
  singleViewApi,
} from "../store/students/useApi";
import { GrAdd, IconName } from "react-icons/gr";

function StudentView() {
  const dispatch = useDispatch();
  const params = useParams();
  // const location = useLocation();

  // console.log(location);
  // console.log(params);
  const navigate = useNavigate();

  const { singleData, loading, studentCourse } = useSelector((state) => ({
    singleData: state.createReducer.singleData,
    studentCourse: state.createReducer.studentCourse,
    loading: state.loading,
  }));
  // console.log(singleData);

  // console.log(singleData.data);

  const deleteStudent = () => {
    dispatch(deleteApi(params.id, navigate));
  };

  useEffect(() => {
    dispatch(singleViewApi(params.id));
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(CreateStudentCourseApi());
  // }, []);

  // console.log(deleteApi());

  // dispatch(deleteApi());

  // const dataTable = singleData?.data?.results;

  return (
    <div>
      <Layout>
        <section>
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
                  FULL NAME:
                  <h10 style={{ color: "red" }}> {singleData?.full_name}</h10>
                  <br />
                  E-MAIL:
                  <h10 style={{ color: "red" }}>{singleData?.email}</h10>
                  <br />
                  PHONE:
                  <h10 style={{ color: "red" }}> {singleData?.phone}</h10>
                  <br />
                  ADDRESS:
                  <h10 style={{ color: "red" }}>{singleData?.address}</h10>
                  <br />
                  DATE OF BIRTH:
                  <h10 style={{ color: "red" }}>{singleData?.dob}</h10>
                  <br />
                  START DATE:
                  <h10 style={{ color: "red" }}>{singleData?.start_date}</h10>
                  <br />
                  END DATE:
                  <h10 style={{ color: "red" }}>{singleData?.end_date}</h10>
                  <br />
                  DESIGNATION:
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
            </div>
            {/* <button onClick={navigate("/students")}>back</button> */}
          </div>
        </section>
        <section>
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default StudentView;
