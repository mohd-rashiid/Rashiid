import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardTitle, Col, Modal } from "reactstrap";
import solo from "../images/certi.jpeg";
import { FaAward, IconName } from "react-icons/fa";
import dash from "../images/background1.png";
import last from "../images/background2.png";
import CertificateModals from "./CertificateModals";

function Certificate() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(true);
  }, [setModal]);

  return (
    <>
      <CertificateModals show={modal} onCloseclick={() => setModal(false)} />
      <div className="good">
        <img
          style={{ marginLeft: "50%" }}
          src={dash}
          // className="d-flex justify-content-end"
        />

        {/* <div
          className="mx-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTop: "5px solid",
            borderBottom: "2px solid",
            marginTop: "5px",
            // marginLeft: "100px",
          }}
        >
          {" "}
        </div> */}
        {/* <img className="img" src={} /> */}
        <div style={{ position: "absolute", top: "70px", left: "0px" }}>
          <div
            style={{
              // height: "100vh",
              // padding: "px 0px 5px 0px",
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              fontStyle: "paratype",
              padding: "10px 0px 0px 0px",
              marginTop: "15px",
            }}
          >
            <h4
              className="hello"
              style={{
                fontSize: "50px",
                // marginRight: "50vh",
                color: "rgb(37, 55, 89)",
              }}
            >
              <div className="done">
                {" "}
                Certificate
                {/* <FaAward style={{ color: "red", fontSize: "90px" }} /> */}
              </div>
              <h5
                style={{
                  marginLeft: "260px",
                  marginBottom: "15px",
                  fontFamily: "quicksand,san-serif",
                  fontSize: "25px",
                }}
              >
                {" "}
                for his Achivment
              </h5>
              <br />
            </h4>
          </div>
          {/* <h3
            style={{
              marginRight: "85px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></h3> */}
          <div
            style={{
              minHeight: "100vh",
              marginLeft: "135px",
              marginBottom: "30px",
            }}
          >
            {" "}
            <b></b>
            <div style={{ marginLeft: "30px" }}>
              <b>
                <h1
                  className="font"
                  style={{ fontSize: "40px ", color: "rgb(37, 55, 89)" }}
                >
                  {" "}
                  Muhammed Rashid
                </h1>
              </b>

              {/* <h2 className="center">has completed the following skill</h2> */}
            </div>
            <div
              style={{ marginLeft: "15px", fontFamily: "quicksand,san-serif" }}
            >
              <h3>Completed the following achievement</h3>
            </div>
            <div>
              <h1
                className="font"
                style={{
                  color: "rgb(37, 55, 89)",
                  fontSize: "40px",
                  marginLeft: "-20px",
                }}
              >
                {" "}
                web application developer
              </h1>
            </div>
            <div
              style={{ marginLeft: "-65px", fontFamily: "quicksand,san-serif" }}
            >
              <h4>
                this certify that{" "}
                <b
                  className="font"
                  style={{
                    // color: "rgb(37, 55, 89)",
                    fontSize: "20px",
                  }}
                >
                  Mr.Muhammed Rashid
                </b>{" "}
                <span
                  style={{
                    marginLeft: "10px",
                    fontFamily: "quicksand,san-serif",
                  }}
                >
                  {" "}
                  has successfully completed
                </span>
                <b
                  className="font"
                  style={{
                    // color: "rgb(37, 55, 89)",
                    fontSize: "20px",
                  }}
                >
                  web application developer,
                </b>
                <span style={{ fontFamily: "quicksand,san-serif" }}>
                  {" "}
                  started on
                </span>
                <b
                  style={{
                    // color: "rgb(37, 55, 89)",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  10/02/2022
                </b>
                .
              </h4>
              <div className="">
                {" "}
                <h4>
                  His course activities include real-world projects and many
                  <span style={{ marginLeft: "240px" }}> challenges</span>
                </h4>
              </div>
              <div
                style={{
                  // marginBottom: "100px",
                  marginTop: "130px",
                  marginLeft: "400px",
                }}
              >
                <h3> CEO </h3>
              </div>
            </div>
            {/* <div className="center" style={{ marginTop: "50px" }}></div> */}
          </div>
        </div>
      </div>

      <div className="last-img">
        <img src={last} />
      </div>
    </>
  );
}

export default Certificate;
