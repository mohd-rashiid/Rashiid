import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import Layout from "../component/layout";
import Nav from "../component/Nav";
import SideBar from "../component/SideBar";
import { useState } from "react";
import { createCourseCategoryApi } from "../store/courseCategory/useApii";

function CourseCategory() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [data, setData] = useState({});

  const Handle = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const hanSubBtnCreateCourseCategory = (e) => {
    e.preventDefault();

    if (data) {
      dispatch(createCourseCategoryApi(data, navigate));
    }
  };
  return (
    <div>
      <Layout>
        <div style={{ height: "900px" }}>
          <div className="container my-5">
            <div className="row justify-content-center my-5">
              <div className="col-sm-6 shadow rounded g-7">
                <h1 className="text-center pt-3 text-secondery h2">
                  Create Category List
                </h1>
                <form
                  onSubmit={hanSubBtnCreateCourseCategory}
                  style={{ padding: "10px" }}
                >
                  <div className="form-group">
                    <label className="col-form-label">
                      <b>Category Name:</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="course_category_name"
                      onChange={(e) => Handle(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">
                      <b>Designation:</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      name="designation"
                      onChange={(e) => Handle(e)}
                    />
                  </div>

                  {/* <input
                    style={{
                      backgroundColor: "MediumSeaGreen",
                      color: "white",
                      padding: "3px 20px 3px 20px",
                    }}
                    // onClick={hanSubBtnCreateCourseCategory}
                    type="Submit"
                    className="btn  my-3"
                    value="Create"
                    readOnly
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
                        borderRadius: "5px",
                      }}
                    >
                      Create
                    </Button>
                    <Button
                      style={{
                        backgroundColor: " white ",
                        color: "black",
                        padding: "3px 20px 3px 20px",
                      }}
                      onClick={() => {
                        navigate("/home");
                      }}
                    >
                      back
                    </Button>
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

export default CourseCategory;
