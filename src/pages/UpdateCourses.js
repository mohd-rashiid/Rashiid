import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import Footer from "../component/Footer";
import Layout from "../component/layout";
import { BsTrash } from "react-icons/bs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CourseSingleViewApi,
  UpdateCourseApi,
} from "../store/courseDetails/useApi";
import { useParams } from "react-router-dom";
import { useState } from "react";

function UpdateCourses() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [Stoke, setStoke] = useState({
    course_category: "",
    course_name: "",
    duration: "",
    id: "",
  });

  const { updateCourse, loading, courseSingleView } = useSelector((state) => ({
    updateCourse: state.createCourseReducer.updateCourse,
    courseSingleView: state.createCourseReducer.courseSingleView,

    loading: state.loading,
  }));

  useEffect(() => {
    dispatch(CourseSingleViewApi(catId));
  }, [dispatch]);

  console.log(courseSingleView);
  useEffect(() => {
    setStoke(courseSingleView);
  }, [courseSingleView]);

  const catId = params.id;

  const Handle = (e, catId) => {
    setStoke({
      ...Stoke,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmitUpdateCourse = (e) => {
    e.preventDefault();
    dispatch(UpdateCourseApi(catId, navigate, Stoke));
  };

  return (
    <div>
      {" "}
      <Layout>
        <div style={{ height: "1000px" }}>
          <div className="container my-5">
            <div className="row justify-content-center my-5">
              <div className="col-sm-6 shadow rounded g-5">
                <h1 className="text-center pt-3 text-secondery h2">
                  <b>Edit your data</b>
                </h1>
                <form onSubmit={HandleSubmitUpdateCourse}>
                  <div className="form-group">
                    <label className=" col=-form-label">
                      <b>Course Name:</b>
                    </label>
                    <input
                      required
                      className="form-control"
                      type="text"
                      value={Stoke?.course_name}
                      onChange={(e) => Handle(e)}
                      name="course_name"
                    />
                  </div>
                  <div className="form-group">
                    <label className=" col=-form-label">
                      <b>Duration:</b>
                    </label>
                    <input
                      required
                      type="number"
                      className="form-control"
                      onChange={(e) => Handle(e)}
                      value={Stoke?.duration}
                      name="duration"
                    />
                  </div>
                  <div className="form-group">
                    <label className=" col=-form-label">
                      <b>Course Category:</b>
                    </label>

                    <input
                      required
                      type="text"
                      className="form-control"
                      onChange={(e) => Handle(e)}
                      value={Stoke?.course_category}
                      name="course_category"
                    />
                  </div>
                  <div>
                    {/* <input
                      style={{
                        color: "white",
                        backgroundColor: "MediumSeaGreen ",
                        padding: "3px 20px 3px 20px",
                        borderRadius: "5px",
                      }}
                      type="submit"
                      className="btn  my-3 "
                      value="Update"
                    /> */}
                    <div
                      style={{
                        padding: "15px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        type="submit"
                        style={{
                          color: "white",
                          backgroundColor: "MediumSeaGreen ",
                          padding: "3px 20px 3px 20px",
                          borderRadius: "5px",
                        }}
                      >
                        Update
                      </Button>

                      <Button
                        style={{
                          color: "black",
                          backgroundColor: "white",
                          padding: "3px 20px 3px 20px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          navigate(`/View/${catId}`);
                        }}
                      >
                        {" "}
                        back
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default UpdateCourses;
