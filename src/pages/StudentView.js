import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "reactstrap";
import Layout from "../component/layout";
import love from "../images/prooo.png";
import { singleViewApi } from "../store/students/useApi";

function StudentView() {
  const dispatch = useDispatch();

  const { singleData, loading } = useSelector((state) => ({
    singleData: state.createReducer.singleData,
    loading: state.loading,
  }));

  dispatch(singleViewApi());

  return (
    <div>
      <Layout>
        <div className="container">
          <div className="row justify-content-center">
            <img
              className="mt-5"
              style={{
                height: "18%",
                width: "18%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              src={love}
              alt="profile view"
            />
            <div className="col-sm-6 shadow rounded g-5">
              <div
                className=" pt-3 text-secondary h4 justify-content-spacebetween"
                style={{ letterSpacing: "5px" }}
              >
                FULL NAME:
                <br />
                E-MAIL:
                <br />
                PHONE:
                <br />
                ADDRESS:
                <br />
                DATE OF BIRTH
                <br />
                START DATE:
                <br />
                END DATE:
                <br />
                DESIGNATION:
                <br />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default StudentView;
