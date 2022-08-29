import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../component/layout";
import Nav from "../component/Nav";
import SideBar from "../component/SideBar";

function Home() {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  // useEffect(() => {
  //   if (token) {
  //     navigate("/");
  //   }
  // }, [token]);

  // window.isNav = true;
  return (
    <>
      <Layout>
        <div
          style={{
            backgroundColor: "white",
            maxHeight: "100%",
            height: "720px",
          }}
        >
          {/* <div>WELCOME HOME</div> */}
          {/* <Nav /> */}
          {/* <SideBar /> */}
          {/* <h1
        className="hello"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        WELCOME HOME
      </h1> */}
        </div>
      </Layout>
    </>
  );
}

export default Home;
