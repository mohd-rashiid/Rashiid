import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import Layout from "../component/layout";
import {
  CategorySingleViewApi,
  CourseCategoryUpdateApi,
} from "../store/courseCategory/useApii";
import CourseView from "./CourseView";

function UpdateCategory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const [Store, setStore] = useState({});

  // console.log(setStore);
  // console.log(Store);

  const catId = params.id;

  const { courseCategoryUpdate, loading, singleView } = useSelector(
    (state) => ({
      courseCategoryUpdate:
        state.createCourseCategoryReducer.courseCategoryUpdate,
      singleView: state.createCourseCategoryReducer.singleView,

      loading: state.loading,
    })
  );
  useEffect(() => {
    dispatch(CategorySingleViewApi(catId));
  }, [dispatch]);

  const Handle = (e, catId) => {
    setStore({
      ...Store,
      [e.target.name]: e.target.value,
    });
  };
  console.log(Store);

  const handleSubmitUpdateCourseCategory = () => {
    // e.preventDefault();

    if (Store) {
      dispatch(CourseCategoryUpdateApi(Store, navigate));
    }
  };
  // console.log(courseCategoryUpdate);

  return (
    <div>
      <Layout>
        <div style={{ height: "900px" }}>
          <div className="container my-5">
            <div className="row justify-content-center my-5">
              <div className="col-sm-6 shadow rounded g-7">
                <h1 className="text-center pt-3 text-secondery h2">
                  Edit your Details
                </h1>
                <form>
                  <div className="form-group">
                    <label className="col-form-label">
                      <b>Category Name:</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      requied
                      name="CategoryName"
                      onChange={() => Handle()}
                      // onChange={{ courseCategoryUpdatecourse_category_name }}
                      value={singleView.course_category_name}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">
                      <b>Designation:</b>
                    </label>
                    <input
                      name="Designation"
                      onChange={() => Handle()}
                      type="text"
                      className="form-control"
                      required
                      value={singleView.designation}
                    />
                  </div>

                  <input
                    style={{
                      backgroundColor: "MediumSeaGreen",
                      color: "white",
                      padding: "3px 20px 3px 20px",
                      borderRadius: "5px",
                    }}
                    type="submit"
                    className="btn  my-3"
                    value={"Update"}
                    // onChange={(handleSubmitUpdateCourseCategory) => {
                    //   navigate("/CourseView");
                    // }}

                    onChange={handleSubmitUpdateCourseCategory}
                  />
                  <Button
                    style={{
                      marginLeft: "462px",
                      backgroundColor: " white ",
                      color: "black",
                      padding: "3px 20px 3px 20px",
                      borderRadius: "5px",
                    }}
                    onClick={() => {
                      navigate("/CourseView/:${catId}");
                    }}
                  >
                    back
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default UpdateCategory;
