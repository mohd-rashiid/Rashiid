import React from "react";
import { Link } from "react-router-dom";

import img from "../images/IMAGE.jpeg";

function NotFound() {
  return (
    <div className="Not-Found" style={{ height: "700px" }}>
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img className="rounded" src={img} alt="" />
      </div>

      <Link
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        to="/home"
      >
        {" "}
        Back to home page......
      </Link>
    </div>
  );
}

export default NotFound;
