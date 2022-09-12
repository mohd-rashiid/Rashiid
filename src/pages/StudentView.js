import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "reactstrap";
import Layout from "../component/layout";
import love from "../images/prooo.png";
import { deleteApi, singleViewApi } from "../store/students/useApi";

function StudentView() {
  const dispatch = useDispatch();
  const params = useParams();
  // const location = useLocation();

  // console.log(location);
  // console.log(params);
  const navigate = useNavigate();

  const { singleData, loading } = useSelector((state) => ({
    singleData: state.createReducer.singleData,
    loading: state.loading,
  }));
  console.log(singleData);

  // console.log(singleData.data);

  const deleteStudent = () => {
    dispatch(deleteApi(params.id, navigate));
  };

  useEffect(() => {
    dispatch(singleViewApi(params.id));
  }, [dispatch]);

  // console.log(deleteApi());

  // dispatch(deleteApi());

  // const dataTable = singleData?.data?.results;

  return (
    <div>
      <Layout>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          {" "}
          STUDENT VIEW
        </h1>
        <div className="container" style={{ padding: "5px" }}>
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
                style={{}}
              >
                FULL NAME:
                <h10 style={{ color: "red" }}> {singleData?.full_name}</h10>
                <br />
                E-MAIL:
                <h10 style={{ color: "red" }}>{singleData?.email}</h10>
                <br />
                PHONE:
                <h10 style={{ color: "red" }}> {singleData?.phone}</h10>
                <br />
                ADDRESS:
                <h10 style={{ color: "red" }}>{singleData?.address}</h10>
                <br />
                DATE OF BIRTH:
                <h10 style={{ color: "red" }}>{singleData?.dob}</h10>
                <br />
                START DATE:
                <h10 style={{ color: "red" }}>{singleData?.start_date}</h10>
                <br />
                END DATE:
                <h10 style={{ color: "red" }}>{singleData?.end_date}</h10>
                <br />
                DESIGNATION:
                <h10 style={{ color: "red" }}>{singleData?.designation}</h10>
                <br />
              </div>
              <Button
                type="button"
                color="danger"
                onClick={deleteStudent}
                style={{
                  padding: "3px 20px 3px 20px",
                }}
                // style={{ padding: "0px" }}
              >
                Delete
              </Button>
              <Button
                style={{ marginLeft: "15px", padding: "3px 20px 3px 20px" }}
                type="button"
                color="success"
                onClick={() => navigate("/UpdateDetails")}
              >
                update
              </Button>
            </div>
          </div>
          {/* <button onClick={navigate("/students")}>back</button> */}
        </div>
      </Layout>
    </div>
  );
}

export default StudentView;
