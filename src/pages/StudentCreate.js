import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
// import { createApi } from "../Store/useApi";
import { createApi } from "../store/students/useApi";
import Students from "./Students";

function StudentDetails() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({});

  const Handle = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmitCreate = (e) => {
    e.preventDefault();
    // console.log(input.hits);

    if (input) {
      dispatch(createApi(input, navigate));
    }
  };

  // function Handle(e) {
  //   const Data = { ...status };
  //   Data[e.target.id] = e.target.value;
  //   setStatus(Data);

  //   // console.log(Data);
  // }

  return (
    <>
      <Layout>
        <Container fluid style={{ height: "1000px" }}>
          <Row>
            <Col xl="3"></Col>
            <Col xl="6" style={{ paddingTop: "15px" }}>
              <Card>
                <CardBody>
                  <CardTitle>
                    <h1>Student-Create</h1>
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
                            name="full_name"
                            className="form-control"
                            required={true}
                            onChange={(e) => Handle(e)}
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
                            name="email"
                            className="form-control"
                            required={true}
                            onChange={(e) => Handle(e)}
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
                            name="phone"
                            className="form-control"
                            required={true}
                            onChange={(e) => Handle(e)}
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
                            name="address"
                            className="form-control"
                            required={true}
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
                            name="dob"
                            className="form-control"
                            required={true}
                            onChange={(e) => Handle(e)}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xl={6}>
                        <div className="form-group">
                          <label className="col-form-label">
                            <b>Start Date:</b>
                          </label>
                          <input
                            type="date"
                            name="start_date"
                            className="form-control"
                            required={true}
                            onChange={(e) => Handle(e)}
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
                            name="end_date"
                            className="form-control"
                            required={true}
                            onChange={(e) => Handle(e)}
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
                          name="designation"
                          className="form-control"
                          required={true}
                          onChange={(e) => Handle(e)}
                        />
                      </div>
                    </Row>
                    <div className="mt-3 d-flex justify-content-end">
                      <div
                        style={{
                          padding: "15px",
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <Button
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            padding: "3px 20px 3px 20px",
                            borderRadius: "5px",
                            marginLeft: "1rem",
                          }}
                          onClick={() => {
                            navigate("/home");
                          }}
                        >
                          back
                        </Button>
                        <Button
                          // style={{
                          //   backgroundColor: "MediumSeaGreen",
                          //   padding: "3px 20px 3px 20px",
                          //   borderRadius: "5px",
                          // }}
                          type="button"
                          color="success"
                          onClick={handleSubmitCreate}
                          requied
                        >
                          {" "}
                          Create
                        </Button>
                      </div>
                    </div>
                  </Form>
                  {/* {input.map((Students) => (
                      <Students />
                    ))} */}
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
