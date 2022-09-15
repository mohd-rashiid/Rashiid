import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import Layout from "../component/layout";
import don from "../images/prooo.png";
import {
  CourseSingleViewApi,
  DeleteCourseApi,
} from "../store/courseDetails/useApi";
import { BsTrash } from "react-icons/bs";

function View() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const CatId = params.id;
  const { courseSingleView, loading } = useSelector((state) => ({
    courseSingleView: state.createCourseReducer.courseSingleView,
    loading: state.loading,
  }));

  console.log(courseSingleView);

  useEffect(() => {
    dispatch(CourseSingleViewApi(CatId));
  }, [dispatch]);

  const deleteCourse = () => {
    dispatch(DeleteCourseApi(CatId, navigate));
  };

  return (
    <div>
      <Layout>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          Course View
        </h1>
        <div className="container">
          <div className="row justify-content-center">
            <img
              className="mt-5"
              style={{
                height: "10%",
                width: "10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              src={don}
              alt="profile"
            />
            <div className="col-sm-6 shadow rounded g-5">
              <div className="pt-3 text-secondary h4 justify-content-spacebetween">
                Course Name:
                <h2 style={{ color: "red" }}>
                  {courseSingleView?.course_name}
                </h2>
                <br />
                Duration:
                <h2 style={{ color: "red" }}>{courseSingleView?.duration}</h2>
                <br />
                Course Category:
                <h2 style={{ color: "red" }}>
                  {courseSingleView?.course_category}
                </h2>
                <br />
                <Button
                  type="button"
                  color="success"
                  onClick={() => navigate(`/updatecourse/${CatId}`)}
                  style={{ padding: "3px 20px 3px 20px" }}
                >
                  update
                </Button>
                <Button
                  color="danger"
                  onClick={deleteCourse}
                  style={{ marginLeft: "15px", padding: "3px 20px 3px 20px" }}
                >
                  Trash
                  <BsTrash style={{ fontSize: "20px" }} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default View;
