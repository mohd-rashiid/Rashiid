import React from "react";
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
import { Link, useNavigate } from "react-router-dom";
import Nav from "../component/Nav";
import SideBar from "../component/SideBar";
import Footer from "../component/Footer";
import Layout from "../component/layout";

function StudentDetails(Change) {
  const navigate = useNavigate();

  return (
    <>
      <Layout>
        <Container fluid style={{ height: "1000px" }}>
          <Row>
            <Col xl="3"></Col>
            <Col xl="6" style={{ marginTop: "15px" }}>
              <Card>
                <CardBody>
                  <CardTitle>
                    <h1>Student-Details</h1>
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
                          marginRight: "469px",
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
                        Create
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
      {/* <div className='container'>
    <div className='row justifyContent-center my-5'>
        <div className='col-sm-4 shadow rounded g-5'>
            <h1 className='text-center pt-3 text-secondery h2'>
                <b>StudentDetails</b>
                <form>
                    <div className='form-group'>
                        <label className='col-form-label'>
                            <b>User Name:</b>
                        </label>
                        <input type="text" className='form-control' requied/>
                    </div>
                    <div className='form-group'>
                        <label className='col-form-label'>
                            <b>Full Name:</b>
                        </label>
                        <input type="text" className='form-control' requied/>
                    </div>
                    <div className='form-group'>
                        <label className='col-form-label'>
                            <b>E-mail:</b>
                        </label>
                        <input type="e-mail" className='form-control' requied/>
                    </div>
                    <div className='form-group'>
                        <label className='col-form-label'>
                            <b>Phone:</b>
                        </label>
                        <input type="number" className='form-control' requied/>
                    </div>
                    <div className='form-group'>
                        <label className='col-form-label'>
                            <b>Addres:</b>
                        </label>
                        <input type="text" className='form-control' requied/>
                    </div>
                    <div className='form-group'>
                        <label className='col-form-label'>
                            <b>Date of Birth:</b>
                        </label>
                        <input type="date" className='form-control' requied/>
                    </div>
                    <div className='form-group'>
                        <label className='col-form-label'>
                            <b>Start Date:</b>
                        </label>
                        <input type="number" className='form-control' requied/>
                    </div>
                    <div className='form-group'>
                        <label className='col-form-label'>
                            <b>End Date:</b>
                        </label>
                        <input type="number" className='form-control' requied/>
                    </div>
                    <div className='form-group'>
                        <label className='col-form-label'>
                            <b>Designation:</b>
                        </label>
                        <input type="text" className='form-control' requied/>
                    </div>
                    

                </form>
            </h1>
        </div>

    </div>
   </div> */}
    </>
  );
}

export default StudentDetails;
