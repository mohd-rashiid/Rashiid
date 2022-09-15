import React from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { BiCategoryAlt, BiStore } from "react-icons/bi";

function SideBar() {
  return (
    <div
      className="sidebar-container"
      style={{
        // objectFit:"hover",
        position: "revert-layer",
        background: "",
        width: "300px",
        height: "100%",
        padding: "20px ",
        backgroundColor: "#c7e0f4",
      }}
    >
      <h2 style={{ color: "black", fontSize: "25px" }}>
        <BsFillPersonFill style={{ color: "black" }} /> <b>Students</b>
      </h2>
      <ul style={{ fontSize: "10px" }}>
        <Link
          to="/Students"
          style={{ textDecoration: "none", fontSize: "20px", color: "black" }}
        >
          All Students
        </Link>
        <div>
          <Link
            to="/StudentCreate"
            style={{ textDecoration: "none", fontSize: "20px", color: "black" }}
          >
            Student Create
          </Link>
        </div>{" "}
        {/* <Link
          to="/updatedetails/:id"
          style={{ textDecoration: "none", fontSize: "20px", color: "black" }}
        >
          Update Students
        </Link> */}
      </ul>

      <h2 style={{ color: "black", fontSize: "25px" }}>
        <BiCategoryAlt style={{ color: "black" }} />
        <b>Course Category</b>
      </h2>
      <ul style={{ fontSize: "22px" }}>
        <Link
          to="/CategoryList"
          style={{ textDecoration: "none", fontSize: "20px", color: "black" }}
        >
          All CategoryList
        </Link>
        <br></br>

        <Link
          to="/CreateCategory"
          style={{ textDecoration: "none", fontSize: "20px", color: "black" }}
        >
          {" "}
          Create Category
        </Link>
        <br></br>

        {/* <Link
          to="/updatecategory/:id"
          style={{ textDecoration: "none", fontSize: "20px", color: "black" }}
        >
          {" "}
          Update Category
        </Link> */}
      </ul>
      <h2 style={{ color: "black", fontSize: "25px" }}>
        <BiStore style={{ color: "black" }} />
        <b>Courses</b>
      </h2>
      <ul style={{ fontSize: "22px" }}>
        <Link
          to="/Courses"
          style={{ textDecoration: "none", fontSize: "20px", color: "black" }}
        >
          {" "}
          All Courses
        </Link>
        <br></br>

        <Link
          to="/CreateCourse"
          style={{ textDecoration: "none", fontSize: "20px", color: "black" }}
        >
          {" "}
          Create Course
        </Link>
        <br></br>
        {/* <Link
          to="/updatecourse"
          style={{ textDecoration: "none", fontSize: "20px", color: "black" }}
        >
          {" "}
          Update Courses
        </Link> */}
      </ul>
    </div>
  );
}

export default SideBar;
