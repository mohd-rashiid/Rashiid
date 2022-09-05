import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import Layout from "../component/layout";
import Nav from "../component/Nav";
import SideBar from "../component/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../images/profilee.jpeg";
import students from "../images/students.jpeg";
import com from "../images/completed.jpeg";
import cors from "../images/course.jpeg";

// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FaArrowRight } from "react-icons/fa";
import { profileApi } from "../store/Login/useApi";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userDetails, loading } = useSelector((state) => ({
    userDetails: state.profileReducer.userDetails,
    loading: state.loading,
  }));
  // const [profile, setProfile] = useState()

  useEffect(() => {
    dispatch(profileApi());
  }, []);

  // console.log(userDetails);

  return (
    <>
      <Layout>
        <div
          style={{
            backgroundColor: "white",
            maxHeight: "100%",
            height: "100%",
            // backgroundColor: "#232626",
            display: "flex",
          }}
        >
          <div
            style={{ marginTop: "10px" }}
            // style={{
            //   backgroundColor: "rgb(206, 223, 238)",
            //   width: "100%",
            //   height: "500px",
            // }}
          >
            <div>
              <h5
                style={{
                  color: "black",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                DASHBOARD
              </h5>
            </div>

            <Row style={{ paddingLeft: "20px", paddingRight: "20px" }}>
              <Col sm={4}>
                <div
                  style={{
                    // backgroundImage: "url(profilee.jpeg)",
                    // height: "166px",
                    boxShadow: " 0 0 20px 0px rgba(0,0,0,0.1)",
                    borderRadius: "5px",
                    padding: "35px",
                    color: "rgb(98, 55, 199)",
                    // color: "white",
                    marginTop: "18px",
                  }}
                >
                  <h3>Welcome Back !</h3>
                  <div style={{ color: "green" }}>
                    <h4>{userDetails?.full_name}</h4>
                    <h6>{userDetails?.email}</h6>
                  </div>
                  <h3>It will seem like simplified</h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "white",
                    borderRadius: "5px",
                    height: "166px",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "5px",
                      padding: "35px",
                    }}
                  >
                    <div
                    // style={{
                    //   padding: "6px",
                    // }}
                    >
                      <img
                        style={{
                          // borderRadius: "50%",
                          height: "100%",
                          width: "100%",
                          // marginTop: "-124px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          // marginLeft: "-20px",
                        }}
                        src={img}
                        alt="profile"
                      />
                      <h5
                        style={{ marginTop: "-20px", marginLeft: "-10px" }}
                      ></h5>
                      <p style={{ marginLeft: "-10px" }}></p>
                    </div>
                  </div>
                  <div
                  // style={{
                  //   padding: "23px", marginRight:"-18px"
                  // }}
                  >
                    <h5 style={{ marginTop: "40px", marginLeft: "-10px" }}>
                      125
                    </h5>
                    <p style={{ marginLeft: "-10px" }}>Projects</p>

                    <Button
                      style={{
                        backgroundColor: "rgb(98, 55, 199)",
                        width: "135px",
                        marginLeft: "-30px",
                      }}
                    >
                      view profile
                      {/* <FontAwesomeIcon icon={FaArrowRight} /> */}
                    </Button>
                    <div></div>
                  </div>
                  <div
                  // style={{
                  //   padding: "23px",
                  // }}
                  >
                    <h5 style={{ marginTop: "40px", marginLeft: "10px" }}>
                      $1245
                    </h5>
                    <p style={{ marginLeft: "10px" }}>Revenue</p>
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div
                  style={{
                    backgroundColor: "white",
                    boxShadow: " 0 0 20px 0px rgba(0,0,0,0.1)",
                    borderRadius: "5px",
                    padding: "35px",
                    display: "flex",
                    marginTop: "18px",
                  }}
                >
                  <div>
                    <h5 className="text-muted">Available Courses</h5>
                    <h5>3</h5>
                  </div>
                  <div>
                    <img
                      src={cors}
                      style={{
                        height: "122px",
                        marginLeft: "150px",
                        marginTop: "-18px",
                        borderRadius: "5px",
                      }}
                      alt="archive"
                    />
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    boxShadow: " 0 0 20px 0px rgba(0,0,0,0.1)",
                    borderRadius: "5px",
                    padding: "35px",
                    marginTop: "22px",
                    height: "144px",
                  }}
                >
                  <div>
                    <h5 className="text-muted"> Total Students</h5>
                    <h5>5</h5>
                  </div>
                  <div>
                    <img
                      src={students}
                      style={{
                        height: "110px",
                        marginLeft: "240px",
                        marginTop: "-82px",
                        borderRadius: "5px",
                      }}
                      alt="copy"
                    />
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div
                  style={{
                    backgroundColor: "white",
                    boxShadow: " 0 0 20px 0px rgba(0,0,0,0.1)",
                    borderRadius: "5px",
                    padding: "35px",
                    display: "flex",
                    marginTop: "18px",
                  }}
                >
                  <div>
                    <h5 className="text-muted">Course Completed Students</h5>
                    <h5>2</h5>
                  </div>
                  <div>
                    <img
                      src={com}
                      style={{
                        height: "100px",
                        marginLeft: "146px",
                        // marginBottom: "150px",
                        // marginTop: "-80px",S
                        borderRadius: "5px",
                      }}
                      alt="archeive"
                    />
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    boxShadow: " 0 0 20px 0px rgba(0,0,0,0.1)",
                    borderRadius: "5px",
                    padding: " 35px",
                    marginTop: "22px",
                    height: "144px",
                  }}
                >
                  <div>
                    <h5 className="text-muted"> Grand Total Students</h5>
                    <h5>15</h5>
                  </div>
                  <div>
                    <img
                      src={students}
                      style={{
                        height: "120px",
                        marginLeft: "250px",
                        marginTop: "-82px",
                        borderRadius: "5px",
                      }}
                      alt="copy"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          {/* <div>WELCOME HOME</div> */}
          {/* <Nav /> */}
          {/* <SideBar /> */}
          {/* <h1
        className="hello"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        WELCOME HOME
      </h1> */}
        </div>
      </Layout>
    </>
  );
}

export default Home;
