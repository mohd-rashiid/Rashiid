import React from "react";
import Layout from "../component/layout";
import Nav from "../component/Nav";
import SideBar from "../component/SideBar";

function Home() {
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
