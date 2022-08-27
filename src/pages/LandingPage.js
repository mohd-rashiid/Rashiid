import React from "react";
import Login from "./Login";
import image from "../images/ooo.jpeg";
import "../landing.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Footer from "../component/Footer";
import LandingFooter from "./LandingFooter";

function LandingPage() {
  return (
    <>
      <nav
        class="navbar navbar-expand-sm"
        style={{
          display: "flex",
          justifyContent: "space-around",
          // position: "absolute",
        }}
      >
        <a class="navbar-brand" href="#">
          <b>
            <h3> EDISON VALLEY</h3>
          </b>
        </a>

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Home{" "}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Feachers{" "}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/About">
              About
            </a>
          </li>
          <Button>
            {/* <a href="/Login"></a> */}
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/Login"
            >
              {" "}
              Sign In
            </Link>
          </Button>
        </ul>
      </nav>
      <div
        style={{
          display: "flex",
          backgroundColor: "#0e6064",
          width: "100%",
          height: "100vh",
          padding: "6rem",
        }}
      >
        <div
          style={{
            width: "70%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ color: "white " }}>
            <h1>
              Make your Career
              <br /> with <b>"EDISON VALLEY"</b>
            </h1>
            <h5>
              We are a bunch of tech enthusiasts determined to <br />
              uplift the society utilising the latest technologies around us.
            </h5>
            <Link to="/Login">
              <Button
                style={{
                  background: "white",
                  color: "black",
                  padding: "10px 20px",
                }}
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div
            style={{
              height: "500px",
              width: "500px",
              margin: "auto",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                borderRadius: "5px",
              }}
              src={image}
            />
          </div>
        </div>
      </div>
      <LandingFooter />

      <Footer />
    </>

    // <div className="landingpage">

    //   <Login />
    //   <div>
    //     <img
    //       src={image}
    //       style={{
    //         borderRadius: "5px",
    //         padding: "20px",
    //         width: "590px",
    //         height: "490px  ",
    //         position: "absolute",
    //         top: "250px",
    //         right: "2px",
    //         bottom: "1px",
    //         left: "1000px",
    //       }}
    //     />
    //     <div
    //       style={{
    //         display: "flex",
    //         color: "white",
    //         position: "absolute",
    //         top: "370px",
    //         right: "0px",
    //         bottom: "150px",
    //         left: "150px",
    //       }}
    //     >
    //       <h1>
    //         Make your Carrior
    //         <br /> with "EDISON VALLEY"
    //       </h1>
    //     </div>
    //     <div
    //       style={{
    //         // display: "flex",
    //         color: "white",
    //         position: "absolute",
    //         top: "470px",
    //         right: "0px",
    //         bottom: "150px",
    //         left: "150px",
    //       }}
    //     >
    //       {" "}
    //       <h3>
    //         We are a bunch of tech enthusiasts determined to <br />
    //         uplift the society utilising the latest technologies around us.
    //       </h3>
    //       <Button>LOGIN</Button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default LandingPage;
