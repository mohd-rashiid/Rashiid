import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Col, Row, Table } from "reactstrap";
import Layout from "../component/layout";
import { map, range } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import {
  DeleteStudentsCourseApi,
  getStudentCourseApi,
} from "../store/students/useApi";
import { FiTrash2, IconName } from "react-icons/fi";

function StudentsCourses() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const [pages, setPages] = useState(1);

  const { studentCourseData, count, loading, studentCourseDelete } =
    useSelector((state) => ({
      studentCourseData: state.createReducer.studentCourseData,
      count: state.createReducer.studentCourseDataCount,
      delete: state.createReducer.studentCourseDelete,
      loading: state.loading,
    }));

  const totalPage = Math.round(count / 10);

  const pageToArray = range(1, totalPage + 1);

  const catId = params.id;

  useEffect(() => {
    dispatch(getStudentCourseApi(pages));
  }, [dispatch, pages]);

  //   useEffect(() => {
  //     dispatch(DeleteStudentsCourseApi(catId, navigate));
  //   }, [dispatch]);
  console.log(catId);
  const deleteApi = (id) => {
    // console.log("sdfsdf");
    dispatch(DeleteStudentsCourseApi(id, navigate));
  };
  return (
    <div>
      <Layout>
        <div style={{ padding: "25px 35px 0px 35px" }} className="row">
          <div className="col-sm-12" shadow-rounded>
            <div className="card">
              <div className="card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <h2>Student Course</h2>
                  <div>
                    <Button
                      color="success"
                      onClick={() => navigate(`/NewCourse`)}
                    >
                      + Create New Course
                    </Button>
                  </div>
                </div>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Student </th>
                      <th>Course</th>
                      <th>Progress</th>
                      <th>Action</th>
                      <th>#</th>
                    </tr>
                  </thead>
                  <tbody>
                    {map(studentCourseData, (item, key) => (
                      <tr key={key}>
                        <td scope="row">{key + 1}</td>
                        <td>{item?.student_name}</td>
                        <td>{item?.course_name}</td>
                        <td>{item?.progress}</td>
                        <td style={{ fontSize: "20px" }}>
                          <IoEye />

                          {/* <Link
                            style={{
                              color: "black",
                              textDecoration: "none",
                            }}
                            to={`/studentcoursesingleview/${item.id}`}
                          >
                          </Link> */}
                        </td>
                        <td style={{ color: "red", fontSize: "20px" }}>
                          <FiTrash2 onClick={() => deleteApi(item?.id)} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "end",
                    width: "100%",
                  }}
                >
                  <Row>
                    <Col>
                      <MdArrowBack onClick={() => setPages(pages - 1)} />
                    </Col>
                    {map(pageToArray, (page) => (
                      <Col
                        style={{ cursor: "pointer" }}
                        className={pages === page && "active"}
                        onClick={() => setPages(page)}
                      >
                        {page}
                      </Col>
                    ))}

                    <Col>
                      <MdArrowForward onClick={() => setPages(pages + 1)} />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default StudentsCourses;
