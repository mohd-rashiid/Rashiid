import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

function CreateCourse() {
  const navigate = useNavigate();
  return (
    <div style={{ height: "1000px" }}>
      <div className="container my-5">
        <div className="row justify-content-center my-5">
          <div className="col-sm-6 shadow rounded g-5">
            <h1 className="text-center pt-3 text-secondery h2">
              <b>Create Course</b>
            </h1>
            <form>
              <div className="form-group">
                <label className=" col=-form-label">
                  <b>Course Name:</b>
                </label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label className=" col=-form-label">
                  <b>Duration:</b>
                </label>
                <input type="number" className="form-control" required />
              </div>
              <div className="form-group">
                <label className=" col=-form-label">
                  <b>Course Category:</b>
                </label>
                <input type="text" className="form-control" required />
              </div>
              <div>
                <input
                  type="submit"
                  className="btn btn-primary my-3"
                  value="Submit"
                />
                <Button
                  style={{
                    marginLeft: "470px",
                    color: "",
                    backgroundColor: "blue",
                  }}
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  {" "}
                  back
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
