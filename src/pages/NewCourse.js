import React, { useEffect, useState } from "react";
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
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CreateStudentCourseApi, getDataApi } from "../store/students/useApi";
import { getCourseDataApi } from "../store/courseDetails/useApi";
import { map } from "lodash";

function NewCourse() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [stdCourseData, setStdCourseData] = useState({});

  const { student, loading, course } = useSelector((state) => ({
    student: state.createReducer.studentData.data,
    course: state.createCourseReducer.getCourse,
    loading: state.loading,
  }));

  const Handle = (e) => {
    setStdCourseData({
      ...stdCourseData,
      [e.target.name]: e.target.value,
    });
  };
  const catId = params.id;
  const handleSubmitStdCourseCreate = (e) => {
    e.preventDefault();
    if (stdCourseData)
      dispatch(CreateStudentCourseApi(catId, navigate, stdCourseData));
  };

  // useEffect(() => {
  //   dispatch(getCourseDataApi());
  // });
  useEffect(() => {
    dispatch(getDataApi());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCourseDataApi());
  }, [dispatch]);
  console.log(stdCourseData);
  // console.log(stdCourseData);
  // const Api = () => {
  //   dispatch(getCourseDataApi());
  // };
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
                  <Form onSubmit={handleSubmitStdCourseCreate}>
                    <Row>
                      <Col xl={12}>
                        <div className="form-group">
                          <label className="col-form-label">
                            <b>Student</b>
                          </label>
                          {/* <input
                            type="text"
                            name="student"
                            className="form-control"
                            required={true}
                            onChange={(e) => Handle(e)}
                          /> */}
                          <div className="form-group">
                            <select
                              style={{
                                width: "50%",
                                height: "35px",
                                borderRadius: "7px",
                                border: "1px solid #ced4da",
                                padding: "0 10px",
                              }}
                              className="col-form"
                              name="student"
                              id=""
                              onChange={(e) => Handle(e)}
                            >
                              {map(student?.results, (item, key) => (
                                <option value={item.id}>
                                  {item.full_name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-form-label">
                            <b>Course</b>
                          </label>
                          {/* <Input
                            type="text"
                            name="course"
                            className="form-control"
                            required={true}
                            onChange={(e) => Handle(e)}
                          /> */}
                          <div className="form-group">
                            <select
                              style={{
                                width: "50%",
                                height: "35px",
                                borderRadius: "7px",
                                border: "1px solid #ced4da",
                                padding: "0 10px",
                              }}
                              className="col-form"
                              name="course"
                              id=""
                              onChange={(e) => Handle(e)}
                            >
                              {map(course?.results, (item, key) => (
                                <option value={item.id}>
                                  {item.course_name}
                                </option>
                              ))}
                            </select>
                          </div>
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
                            onChange={(e) => Handle(e)}
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
                          <Button>
                            <MdArrowBack />
                            back
                          </Button>

                          <Button type="submit" color="success">
                            Create
                          </Button>
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
