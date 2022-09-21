import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../component/layout";
import ddd from "../images/prooo.png";
import { StudentsCoursesSingleViewApi } from "./students/useApi";

function StudentCourseSingleView() {
  const dispatch = useDispatch();
  const params = useParams();

  const CatId = params.id;

  const { studentCourseSingleVIew, loading } = useSelector((state) => ({
    studentCourseSingleVIew: state.createReducer.studentCourseSingleVIew,
    loading: state.loading,
  }));

  //   useEffect(() => {
  //     dispatch(StudentsCoursesSingleViewApi(CatId));
  //   }, [dispatch]);
  //   console.log(studentCourseSingleVIew);

  return (
    <div>
      <Layout>
        <h1>Students Courses View</h1>
        <div className="container">
          <div className="row justify-content-center">
            <img
              style={{
                height: "10%",
                width: "10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              src={ddd}
            />
            <div className="col-sm-6 shadow rounded g-5">
              <div className=" pt-3 text-secodary h4 justify-content-spacebetween">
                Student
                <br />
                Course
                <br />
                Progress
                <br />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default StudentCourseSingleView;
