import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import Footer from "../component/Footer";
import Layout from "../component/layout";
import Nav from "../component/Nav";
import SideBar from "../component/SideBar";
import { getCourseCategoryApi } from "../store/courseCategory/useApii";
import { createCourseApi } from "../store/courseDetails/useApi";
import { map } from "lodash";

function CreateCourse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({});

  const Control = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const hanSubBtnCreateCourse = (e) => {
    e.preventDefault();
    if (values) {
      dispatch(createCourseApi(values, navigate));
    }
  };

  const { courseCategory, loading } = useSelector((state) => ({
    courseCategory: state.createCourseCategoryReducer.courseCategory,
    loading: state.loading,
  }));

  useEffect(() => {
    dispatch(getCourseCategoryApi());
  }, []);

  console.log(courseCategory?.results);
  // console.log(values.course_name);

  return (
    <div style={{ height: "1000px" }}>
      <Layout>
        <div className="container my-5">
          <div className="row justify-content-center my-5">
            <div className="col-sm-6 shadow rounded g-5">
              <h1 className="text-center pt-3 text-secondery h2">
                <b>Create Course</b>
              </h1>
              <form
                style={{ padding: "10px" }}
                onSubmit={hanSubBtnCreateCourse}
              >
                <div className="form-group">
                  <label className=" col=-form-label">
                    <b>Course Name:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="course_name"
                    // required
                    onChange={(e) => Control(e)}
                  />
                </div>
                <div className="form-group">
                  <label className=" col=-form-label">
                    <b>Duration:</b>
                  </label>
                  <input
                    type="number"
                    name="duration"
                    className="form-control"
                    // required
                    onChange={(e) => Control(e)}
                  />
                </div>
                <div className="form-group">
                  <label className=" col=-form-label">
                    <b>Course Category:</b>
                  </label>

                  {/* <input
                    type="text"
                    required
                    name="course_category"
                    list="browsers"
                    className="form-control"
                    placeholder="select  a course-category"
                    onChange={(e) => Control(e)}
                    // name="browser"
                  /> */}

                  <select
                    name="course_category"
                    id=""
                    onChange={(e) => Control(e)}
                  >
                    {map(courseCategory?.results, (item, key) => (
                      <option value={item.id}>
                        {item.course_category_name}
                      </option>
                    ))}
                  </select>
                  {/* <datalist id="browsers">
                    <option value=" data" />
                    <option value="students" />
                    <option value="ome" />
                    <option value="nlz" />
                    <option value="ok" />
                  </datalist> */}
                  {/* <input type="submit" /> */}
                  {/* <input
                    type="text"
                    name="course_category"
                    placeholder="example,Front-end,back-end ext......"
                    className="form-control"
                    required
                    onChange={(e) => Control(e)}
                  /> */}
                </div>
                <div>
                  {/* <Button
                    style={{
                      marginLeft: "439px",
                      color: "black",
                      backgroundColor: "white",
                      padding: "3px 20px 3px 20px",
                      borderRadius: "5px",
                    }}
                    type="submit"
                    onClick={hanSubBtnCreateCourse}
                  >
                    {" "}
                    Create
                  </Button> */}
                  {/* <input
                    style={{
                      backgroundColor: "MediumSeaGreen",
                      color: "white",
                      padding: "3px 20px 3px 20px",
                    }}
                    onClick={hanSubBtnCreateCourse}
                    type="submit"
                    className="btn  my-3"
                    value="Create"
                    required
                  /> */}
                  <div
                    style={{
                      paddingTop: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: "MediumSeaGreen",
                        color: "white",
                        padding: "3px 20px 3px 20px",
                      }}
                    >
                      {" "}
                      create
                    </Button>
                    <Button
                      style={{
                        color: "black",
                        backgroundColor: "white",
                        padding: "3px 20px 3px 20px",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        navigate("/home");
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
        {/* <Footer /> */}
      </Layout>
    </div>
  );
}

export default CreateCourse;
