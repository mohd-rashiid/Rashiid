import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { loginApi, logoutApi } from "../Store/Login/useApi";
import { loginFail } from "../Store/Login/action";
// import image from "../images/ok. EPS10 for free";
// import "../Login.css"

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [reply, setReply] = useState();
  const [status, setStatus] = useState({ username: "", password: "" });

  const { loginError, loading } = useSelector((state) => ({
    loginError: state.error,
    loading: state.loading,
  }));

  // const postApi = () => {
  //   Axios.post("http://192.168.1.133:3000/api/v1/account/login").then(
  //     (Response) => {
  //       console.log(Response.status);

  //       // setStatus(status)
  //       setReply(Response.data.response + "" + Response.data.error_message);
  //     }
  //   )
  // };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    // Axios.post("http://192.168.1.133:3000/api/v1/account/login", {
    //   username: status.username,
    //   password: status.password,=
    // }).then((Response) => {
    //   console.log(Response);
    //   {
    //     Response.data.response === "Successfully authenticated." &&
    //       navigate("/home");
    //   }
    // if(Response.status === 200 ){
    //   navigate("/home")
    // } else {
    //   Response.data
    // }
    // });
    const input = {
      username: status.username,
      password: status.password,
    };
    // console.log(input);
    dispatch(loginApi(input, navigate));
  };
  function Handle(e) {
    const Data = { ...status };
    Data[e.target.id] = e.target.value;
    setStatus(Data);
  }
  //   // console.log("hellooooo");
  //   // console.log(status);
  // if (status === 200) {
  //   console.log(status);
  //   navigate("/home");
  // } else {
  //     postApi()
  // }

  return (
    <div className="" style={{ height: "800px" }}>
      <div className="container">
        <div
          className="row justify-content-center"
          // style={{ position: "absolute", top: "172px", right: "101px" }}
        >
          <div
            className="col-sm-4 shadow rounded g-5"
            style={{
              backgroundColor: "white ",
              // position: "absolute",
            }}
          >
            <h1 className="text-center pt-3 text-secondery h2">
              <b>Login</b>
            </h1>

            <form onSubmit={(e) => handleSubmitBtn(e)}>
              <div className="form-group">
                <label className="col-form-label">
                  {" "}
                  <b>User Name:</b>
                </label>
                <input
                  id="username"
                  onChange={(e) => Handle(e)}
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label className="col-form-label">
                  <b>Password:</b>
                </label>
                <input
                  id="password"
                  type="password"
                  onChange={(e) => Handle(e)}
                  className="form-control"
                  required
                />
              </div>
              {/* console.log("password"); */}

              {/* <div className="text-end">
                <Link to="#" style={{ textDecoration: "none" }}>
                  {" "}
                  forgot password?
                </Link>
              </div> */}
              <p style={{ color: "red", marginTop: "5px" }}>
                {loginError?.error_message}
              </p>
              <input
                style={{
                  color: "white",
                  backgroundColor: "MediumSeaGreen",
                  borderRadius: "5px",
                }}
                type="submit"
                className="btn  my-3"
                value="Login"
              />
              {loading && <p>loading....</p>}
            </form>
            <div>
              {/* <img src={image} style={{ width: "450px", height: "50%" }} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
