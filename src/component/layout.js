import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import SideBar from "./SideBar";

function Layout({ children }) {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div style={{ display: location.pathname === "/" && "none" }}>
        <Nav />
      </div>
      <div style={{ display: "flex", height: "90vh" }}>
        <div style={{ display: location.pathname === "/" && "none" }}>
          <SideBar />
        </div>
        <div style={{ width: "100%" }}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
