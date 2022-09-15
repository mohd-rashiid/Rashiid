import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  Input,
  Row,
} from "reactstrap";
import Layout from "../component/layout";
import { IconName, MdArrowBack } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function NewCourse() {
  const navigate = useNavigate();
  return (
    <div>
      <Layout>
        <Container fluid>
          <Row>
            <Col xl="3"></Col>
            <Col xl="6" style={{ paddingTop: "15px" }}>
              <Card>
                <CardBody>
                  <CardTitle>
                    <h1>Student Course</h1>
                  </CardTitle>
                  <Form>
                    <Row>
                      <Col xl={12}>
                        <div className="form-group">
                          <label className="col-form-label">
                            <b>Student</b>
                          </label>
                          <input
                            type="text"
                            name="student"
                            className="form-control"
                            required={true}
                          />
                        </div>
                        <div className="form-group">
                          <label className="col-form-label">
                            <b>Course</b>
                          </label>
                          <Input
                            type="text"
                            name="course"
                            className="form-control"
                            required={true}
                          />
                        </div>
                        <div className="form-group">
                          <label className="col-form-label">
                            <b>Progress</b>
                          </label>
                          <Input
                            type="text"
                            name="progress"
                            required={true}
                            className="form-control"
                            aria-errormessage="invalied text"
                          />
                        </div>
                        <div
                          style={{
                            paddingTop: "15px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Link to={`/StudentView/:id`}>
                            <Button>
                              <MdArrowBack />
                              back
                            </Button>
                          </Link>

                          <Button color="success">Create</Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                  `
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default NewCourse;
