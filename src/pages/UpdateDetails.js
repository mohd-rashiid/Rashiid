import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  Row,
} from "reactstrap";
import Footer from "../component/Footer";
import Layout from "../component/layout";
import { singleViewApi, UpdateStudentApi } from "../store/students/useApi";

function UpdateDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();

  const [Store, setStore] = useState({});

  const { updateStudent, loading, singleData } = useSelector((state) => ({
    updateStudent: state.createReducer.updateStudent,
    singleData: state.createReducer.singleData,

    loading: state.loading,
  }));

  useEffect(() => {
    dispatch(singleViewApi(CatId));
  }, [dispatch]);

  useEffect(() => {
    setStore(singleData);
  }, [singleData]);

  const CatId = params.id;

  const Handle = (e, catId) => {
    setStore({
      ...Store,
      [e.target.name]: e.target.value,
    });
  };
  const HandleStudentUpdate = () => {
    dispatch(UpdateStudentApi(CatId, navigate, Store));
  };

  console.log(Store);

  return (
    <div>
      <Layout>
        <Container fluid style={{ height: "1000px" }}>
          <Row>
            <Col xl="3"></Col>
            <Col xl="6" style={{ marginTop: "15px" }}>
              <Card>
                <CardBody>
                  <CardTitle>
                    <h1>Edit your data</h1>
                  </CardTitle>
                  <Form>
                    <Row>
                      <Col xl={12}>
                        <div className="form-group">
                          <label className="col-form-label">
                            <b>Full Name:</b>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            // required={"true"}
                            required
                            onChange={(e) => Handle(e)}
                            value={Store?.full_name}
                            name="full_name"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xl={6}>
                        <div className="form-group">
                          <label className="col-form-label">
                            <b>E-mail:</b>
                          </label>
                          <input
                            type="e-mail"
                            className="form-control"
                            required={"true"}
                            onChange={(e) => Handle(e)}
                            value={Store?.email}
                            name="email"
                          />
                        </div>
                      </Col>
                      <Col xl={6}>
                        <div className="form-group">
                          <label className="col-form-label">
                            <b>Phone:</b>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            required={"true"}
                            onChange={(e) => Handle(e)}
                            value={Store?.phone}
                            name={"phone"}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xl={12}>
                        <div className="form-group">
                          <label className="col-form-label">
                            <b>Address:</b>
                          </label>
                          <input
                            type="textarea"
                            className="form-control"
                            required={"true"}
                            value={Store?.address}
                            name="address"
                            onChange={(e) => Handle(e)}
                          />
                        </div>
                      </Col>
                      {/* </Row> */}
                      {/* <Row> */}
                      <Col xl={12}>
                        <div className="form-group">
                          <label className="col-form-label">
                            <b>Date of Birth:</b>
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            required={"true"}
                            onChange={(e) => Handle(e)}
                            value={Store?.dob}
                            name="dob"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xl={6}>
                        <div className="form-group">
                          <label className="col-form-label">
                            <b>start Date:</b>
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            required={"true"}
                            onChange={(e) => Handle(e)}
                            value={Store?.start_date}
                            name="start_date"
                          />
                        </div>
                      </Col>
                      <Col xl={6}>
                        <div className="form-group">
                          <label className="col-form-label">
                            <b>End Date:</b>
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            required={"true"}
                            onChange={(e) => Handle(e)}
                            value={Store?.end_date}
                            name="end_date"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <div className="form-group">
                        <label className="col-form-label">
                          <b>Designation:</b>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          required={"true"}
                          onChange={(e) => Handle(e)}
                          value={Store?.designation}
                          name="designation"
                        />
                      </div>
                    </Row>
                    <div className="mt-3 d-flex justify-content-end">
                      <Button
                        style={{
                          marginRight: "463px",
                          backgroundColor: "white",
                          color: "black",
                          padding: "3px 20px 3px 20px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          navigate(`/StudentView/${CatId}`);
                        }}
                      >
                        back
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "MediumSeaGreen",
                          padding: "3px 20px 3px 20px",
                          borderRadius: "5px",
                        }}
                        onClick={() => HandleStudentUpdate()}
                      >
                        {" "}
                        Update
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col xl="3"></Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default UpdateDetails;
