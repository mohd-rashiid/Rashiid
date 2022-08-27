import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import img from "../images/instalogo.jpeg";
import img1 from "../images/googlelogo.jpeg";
import img2 from "../images/facebooklogo.png";

function LandingFooter() {
  return (
    <>
      <Row>
        <Col md="6">
          <div
            style={{
              marginLeft: "150px",
              padding: "10px 0px 0px 5px",
              justifyContent: "space-between",
            }}
          >
            <h1>Edison Valley</h1>
            <h5>
              <h3 style={{ fontSize: "25px" }}>
                2022 © Edisonvalley. Design & Develop by Osperb.
                <br />
              </h3>
              <h1 style={{ fontSize: "15px " }}>
                {" "}
                We are a bunch of tech enthusiasts determined to
                <br /> uplift the society utilising the latest technologies
                around us.
              </h1>
            </h5>
          </div>
        </Col>
        <Col md="6">
          <Row>
            <Col md="4">
              <div>
                <h1 style={{ fontSize: "23px", padding: "24px 0px 15px 5px" }}>
                  Resources
                </h1>
                <div style={{ padding: "0px 0px 0px 15px" }}>
                  Privacy Policy
                  <br />
                  Terms & Condition
                </div>
              </div>
            </Col>
            <Col md="4">
              <div>
                <h1
                  style={{
                    fontSize: "23px",
                    padding: "24px 0px 15px 5px",
                  }}
                >
                  Company
                </h1>
                <div style={{ padding: "0px 0px 0px 15px" }}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/About"
                  >
                    About
                  </Link>
                  <br />
                  Feachers
                </div>
              </div>
            </Col>
            <Col md="4">
              <div>
                <h1 style={{ fontSize: "23px", padding: "24px 0px 15px 5px" }}>
                  Sociel Links
                </h1>
                <div>
                  <a href="https://www.instagram.com/osperb_innovations/">
                    <img
                      style={{
                        width: "20%",
                        height: "20%",
                        borderRadius: "15px",
                      }}
                      src={img}
                    />
                  </a>
                  <a href="https://osperb.com/">
                    <img
                      style={{
                        width: "20%",
                        height: "20%",
                        borderRadius: "15px",
                      }}
                      src={img1}
                    />
                  </a>
                  <a href="https://www.facebook.com/osperbinnovations">
                    <img
                      style={{
                        width: "25%",
                        height: "25%",
                        borderRadius: "15px",
                      }}
                      src={img2}
                    />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default LandingFooter;
