import React from "react";
import { Link } from "react-router-dom";

import img from "../images/IMAGE.jpeg";
import gif from "../images/iiii.gif";

function NotFound() {
  return (
    <div className="Not-Found" style={{ height: "500px" }}>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ooops....!
      </h1>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Sorry
      </h1>
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        That page is cannot found
      </h2>
      <Link
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        to="/home"
      >
        {" "}
        Back to home
      </Link>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img className="rounded" src={gif} alt="" />
      </div>
    </div>
  );
}

export default NotFound;
