import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

function UpdateCategory() {
  const navigate = useNavigate();
  return (
    <div>
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
                    borderRadius: "5px",
                  }}
                  type="Submit"
                  className="btn  my-3"
                  value="Update"
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
    </div>
  );
}

export default UpdateCategory;
