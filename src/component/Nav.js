import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Nav() {
  let navigate = useNavigate();

  // const location = useLocation()
  return (
    <>
      {/* {location.pathname!="/Login"?<Nav />:""} */}

      <nav className="navbar navbar-expand-lg navbar-secondary      bg-secondary">
        {/* <button 
        style={{color:"white",backgroundColor:"black"}}
          onClick={() => {
            navigate("/home" );
          }}
        >
          Back
        </button> */}
        <div className="container-fluid">
          <Link className="navbar-brand mx-5" to="/">
            <div
              style={{
                display: "flex",
                padding: "0",
                marginTop: "30px",
                color: "white",
              }}
            >
              <FaBars />

              <h2
                style={{
                  marginLeft: "100px",
                  color: "white ",
                  // marginBottom: "60px",
                }}
              >
                Osperb
              </h2>
            </div>
          </Link>

          <div
            style={{ width: "30%", marginRight: "30rem" }}
            className="input-group rounded"
          >
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search here.."
              aria-label="Search "
              aria-describedby="search-addon"
            />
            {/* <span className="input-group-text border-0" id="search-addon"> */}
            <button type="button" className="btn  btn-success">
              search
            </button>
            <div
              style={{
                display: "flex",
                marginLeft: "200px",
                marginRight: "5px",
                fontSize: "35px",
                color: "white",
              }}
            >
              profile
              <FaUserCircle />
            </div>
            {/* </span> */}
          </div>

          {/* <div style={{ width: "20%" }} className="input-group rounded">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search here.."
              aria-label="Search"
              aria-describedby="search-addon"
              style={{ minWidth: "30%" }}
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
              
            </span>
          </div> */}

          {/* <ul className="navbar-nav mx-5">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About us
              </Link>
            </li>
          </ul> */}
        </div>
      </nav>
    </>
  );
}

export default Nav;
