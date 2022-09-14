import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import Footer from "../component/Footer";
import Layout from "../component/layout";
import { BsTrash } from "react-icons/bs";

function UpdateCourses() {
  const navigate = useNavigate();
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
                        style={{
                          color: "white",
                          backgroundColor: "MediumSeaGreen ",
                          padding: "3px 20px 3px 20px",
                          borderRadius: "5px",
                        }}
                        type="submit"
                      >
                        <BsTrash />
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
        </div>
      </Layout>
    </div>
  );
}

export default UpdateCourses;
