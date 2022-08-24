import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import Layout from "../component/layout";
import Nav from "../component/Nav";
import SideBar from "../component/SideBar";

function CourseCategory() {
  const navigate = useNavigate();
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
                <form>
                  <div className="form-group">
                    <label className="col-form-label">
                      <b>Category Name:</b>
                    </label>
                    <input type="text" className="form-control" requied />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">
                      <b>Designation:</b>
                    </label>
                    <input type="text" className="form-control" required />
                  </div>

                  <input
                    style={{
                      backgroundColor: "MediumSeaGreen",
                      color: "white",
                      padding: "3px 20px 3px 20px",
                    }}
                    type="Submit"
                    className="btn  my-3"
                    value="Create"
                  />
                  <Button
                    style={{
                      marginLeft: "463px",
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
