import React from "react";
import "./home.css"

function Home() {
  return <>
  <div>
      <div>
        <div className="title_bar">
          <img className="logo" src="./images/logo.png" alt="" />

          <div className="nav_bar">
            <a href="#">
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </div>
        <div className="left_box">
          <div className="container">
            <h3>HELLO, I AM</h3>
            <h1>
              AWARD
              <br />
              WINNER
            </h1>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <span></span>
      </div>
    </div>
  </>;
}

export default Home;
