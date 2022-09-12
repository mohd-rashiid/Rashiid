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
  const [storage, setStorage] = useState({});

  // const [Store, setStore] = useState(singleView);

  // console.log(setStore);
  // console.log(Store);

  const { courseCategoryUpdate, loading, singleView } = useSelector(
    (state) => ({
      courseCategoryUpdate:
        state.createCourseCategoryReducer.courseCategoryUpdate,
      singleView: state.createCourseCategoryReducer.singleView,

      loading: state.loading,
    })
  );

  // console.log("catId", catId);

  useEffect(() => {
    dispatch(CategorySingleViewApi(CatId));
  }, [dispatch]);

  useEffect(() => {
    setStorage(singleView);
  }, [singleView]);

  const CatId = params.id;

  const Handle = (e, catId) => {
    setStorage({
      ...storage,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(Store);

  const HandleSubmitUpdateCourseCategory = () => {
    dispatch(CourseCategoryUpdateApi(CatId, navigate, storage));
  };

  // console.log(storage);
  // e.preventDefault();
  // const Data = {
  //   course_category_name: values.course_category_name,
  //   designation: values.designation,
  // };

  // if (Data) {
  //   // dispatch(CourseCategoryUpdateApi(Data, singleView?.id, navigate));
  // }

  // useEffect(() => {
  //   setStore(singleView);
  // });

  // console.log(Store);
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
                      onChange={(e) => Handle(e)}
                      value={storage?.course_category_name || ""}
                      name="course_category_name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">
                      <b>Designation:</b>
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      onChange={(e) => Handle(e)}
                      value={storage?.designation}
                      name="designation"
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
                    value="Update"
                    // onChange={(handleSubmitUpdateCourseCategory) => {
                    //   navigate("/CourseView");
                    // }}

                    onClick={() => HandleSubmitUpdateCourseCategory()}
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
                      navigate(`/CourseView/${CatId}`);
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
