import React from "react";
import Login from "./Login";
import image from "../images/iopl.jpeg";
import "../landing.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function LandingPage() {
  return (
    <div className="totel">
      {/* <img style={{ width: "77%", height: "100%",background:"l" }} src={image} alt="" /> */}
      <Login />
      <div>
        <img
          src={image}
          style={{
            borderRadius: "5px",
            padding: "20px",
            width: "590px",
            height: "490px  ",
            position: "absolute",
            top: "250px",
            right: "2px",
            bottom: "1px",
            left: "1000px",
          }}
        />
        <div
          style={{
            display: "flex",
            color: "white",
            position: "absolute",
            top: "370px",
            right: "0px",
            bottom: "150px",
            left: "150px",
          }}
        >
          <h1>
            Make your Carrior
            <br /> with "EDISON VALLEY"
          </h1>
        </div>
        <div
          style={{
            // display: "flex",
            color: "white",
            position: "absolute",
            top: "470px",
            right: "0px",
            bottom: "150px",
            left: "150px",
          }}
        >
          {" "}
          <h3>
            We are a bunch of tech enthusiasts determined to <br />
            uplift the society utilising the latest technologies around us.
          </h3>
          <Button>LOGIN</Button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
