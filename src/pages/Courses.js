import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Table } from "reactstrap";
import Layout from "../component/layout";
import { getCourseDataApi } from "../store/courseDetails/useApi";
import { map, range } from "lodash";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

function Courses() {
  const dispatch = useDispatch();

  const [Pages, setPages] = useState(1);

  const { getCourse, loading, count } = useSelector((state) => ({
    getCourse: state.createCourseReducer.getCourse,
    count: state.createCourseReducer.getCourseCount,
    loading: state.loading,
  }));

  const totalPage = Math.round(count / 10);
  const pageToArray = range(1, totalPage + 1);

  useEffect(() => {
    dispatch(getCourseDataApi(Pages));
  }, [dispatch, Pages]);
  // console.log(getCourse?.results?.[0]);
  const CourseStore = getCourse?.results;
  // console.log(getCourse?.data?.results);

  return (
    <div>
      <Layout>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>course-name</th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {map(CourseStore, (item, key) => (
              <tr key={key}>
                <td scope="row">{key + 1}</td>
                <td>{item?.course_name}</td>
                <td>{item?.duration}</td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/View/${item.id}`}
                  >
                    <IoEye style={{ fontSize: "25px" }} />
                  </Link>
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
              <MdArrowBack onClick={() => setPages(Pages - 1)} />
            </Col>
            {map(pageToArray, (Page) => (
              <Col
                style={{ cursor: "pointer" }}
                className={Pages === Page && "active"}
                onClick={() => setPages(Page)}
              >
                {Page}{" "}
              </Col>
            ))}
            <Col>
              <MdArrowForward onClick={() => setPages(Pages + 1)} />
            </Col>
          </Row>
        </div>
      </Layout>
    </div>
  );
}

export default Courses;
