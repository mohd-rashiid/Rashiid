import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import Dropdown from "react-bootstrap/Dropdown";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Logout from "../pages/Logout";

import { logoutApi } from "../store/Login/useApi";

import { useDispatch } from "react-redux";

function Nav() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  // const location = useLocation()

  const handleLogout = () => {
    dispatch(logoutApi(navigate));
  };

  return (
    <>
      {/* {location.pathname!="/Login"?<Nav />:""} */}

      <nav
        // style={{ position: "fixed" }}
        className="navbar navbar-expand-lg navbar-secondary"
        style={{ backgroundColor: "#19232b" }}
      >
        {/* <button 
        style={{color:"white",backgroundColor:"black"}}
          onClick={() => {
            navigate("/home" );
          }}
        >
          Back
        </button> */}
        <div className="container-fluid">
          {/* <Link className="navbar-brand mx-5" to="/home"> */}
          {/* <div
              style={{
                display: "flex",
                padding: "0",
                marginTop: "30px",
                color: "white",
              }}
            >

              <h2
                style={{
                  marginLeft: "100px",
                  color: "white ",
                  // marginBottom: "60px",
                }}
              >
              
                Osperb
              </h2>
            </div> */}

          <FaBars
            style={{
              fontSize: "40px",
              padding: "0px 5px 0px 5px ",
              color: "white",
            }}
          />
          {/* </Link> */}
          {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
          <div
            style={{
              width: "30%",
              borderRadius: "10px",
              marginRight: "10px",
              // justifyContent: "space-between",
              // display: "flex",
              // justifyContent: "flex-end",
            }}
            className="input-group rounded"
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search here.."
              aria-label="Search "
              aria-describedby="search-addon"
              style={{
                marginLeft: "-400px",
                marginRight: "200px",
                borderRadius: "15px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            />
            {/* <span className="input-group-text border-0" id="search-addon"> */}
            {/* <button
              type="button"
              className="btn  btn-primary"
              style={{ borderRadius: "7px" }}
            >
              search
            </button> */}
            <div
              style={{
                // display: "flex",
                // justifyContent: "flex-end",
                // marginLeft: "240px",
                // marginRight: "150px",
                fontSize: "35px",
                color: "white",
              }}
            >
              {/* 
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </div>
          </div>
          {/* <FaUserCircle /> */}
          <UncontrolledDropdown>
            <DropdownToggle
              caret
              style={{ backgroundColor: "white", color: "black" }}
            >
              Admin
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>
                {" "}
                <Link style={{ textDecoration: "none", color: "black" }} to="#">
                  View profile
                </Link>
              </DropdownItem>
              <DropdownItem header>
                <Link style={{ textDecoration: "none", color: "black" }} to="#">
                  Settings
                </Link>
              </DropdownItem>
              <DropdownItem header>
                {/* <Link style={{ textDecoration: "none" }} to="/Logout">
                  LogOut
                </Link> */}
                <Link
                  onClick={() => handleLogout()}
                  to={"#!"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  logout
                </Link>
              </DropdownItem>
              {/* <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem> */}
            </DropdownMenu>
          </UncontrolledDropdown>
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
        {/* </div> */}
      </nav>
    </>
  );
}

export default Nav;
