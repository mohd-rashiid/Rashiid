import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

function CourseCategory() {
  const navigate = useNavigate();
  return (
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
                type="Submit"
                className="btn btn-primary my-3"
                value="Submit"
              />
              <Button
                style={{ marginLeft: "497px", backgroundColor: "blue" }}
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
  );
}

export default CourseCategory;
