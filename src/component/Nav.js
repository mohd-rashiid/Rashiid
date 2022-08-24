import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import { IconName } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Nav() {
  let navigate = useNavigate();
  // const location = useLocation()
  return (
    <>
      {/* {location.pathname!="/Login"?<Nav />:""} */}

      <nav className="navbar navbar-expand-lg navbar-secondary     bg-secondary">
        {/* <button 
        style={{color:"white",backgroundColor:"black"}}
          onClick={() => {
            navigate("/home" );
          }}
        >
          Back
        </button> */}
        <div className="container-fluid">
          <Link className="navbar-brand mx-5" to="/home">
            <h2 style={{ marginLeft: "100px", color: "white " }}>Osperb</h2>
          </Link>
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
