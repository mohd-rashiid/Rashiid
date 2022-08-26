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
              style={{ marginRight: "87px", borderRadius: "15px" }}
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
            <DropdownToggle caret>Admin</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>
                {" "}
                <Link style={{ textDecoration: "none", color: "black" }} to="#">
                  view profile
                </Link>
              </DropdownItem>
              <DropdownItem disabled>
                <Link style={{ textDecoration: "none", color: "black" }} to="#">
                  Settings
                </Link>
              </DropdownItem>
              <DropdownItem>
                {/* <Link style={{ textDecoration: "none" }} to="/Logout">
                  LogOut
                </Link> */}
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="/home"
                >
                  Logout
                </a>
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
