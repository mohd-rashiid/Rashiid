import React from "react";
import { useNavigate } from "react-router-dom";
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

function UpdateDetails() {
  const navigate = useNavigate();
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
                            required
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
                            required
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
                            required
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
                            requied
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
                            required
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
                            required
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
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <div className="form-group">
                        <label className="col-form-label">
                          <b>Designation:</b>
                        </label>
                        <input type="text" className="form-control" required />
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
                          navigate("/home");
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
