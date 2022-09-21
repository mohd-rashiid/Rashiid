import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Row, Table } from "reactstrap";
import Layout from "../component/layout";
import { getCourseCategoryApi } from "../store/courseCategory/useApii";
import { map, range } from "lodash";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

function CategoryList() {
  const dispatch = useDispatch();

  const [Pages, setPages] = useState(1);

  const { courseCategory, loading, count } = useSelector((state) => ({
    courseCategory: state.createCourseCategoryReducer.courseCategory,
    count: state.createCourseCategoryReducer.courseCategoryCount,
    loading: state.loading,
  }));

  const totalPage = Math.round(count / 10);
  const pageToArray = range(1, totalPage + 1);

  useEffect(() => {
    dispatch(getCourseCategoryApi(Pages));
  }, [dispatch, Pages]);

  const courseTable = courseCategory?.results;
  // console.log(courseCategory?.data?.results);

  return (
    <div>
      <Layout>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Course Category Name</th>
              <th>Designation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {map(courseTable, (item, key) => (
              <tr key={key}>
                <td scope="row">{key + 1}</td>
                <td>{item.course_category_name}</td>
                <td>{item.designation}</td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/CourseView/${item.id}`}
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
            {map(pageToArray, (page) => (
              <Col
                style={{ cursor: "pointer" }}
                className={Pages === page && "active"}
                onClick={() => setPages(page)}
              >
                {page}
              </Col>
            ))}
            <Col>
              <MdArrowForward
                onClick={() => {
                  setPages(Pages + 1);
                }}
              />
            </Col>
          </Row>
        </div>
      </Layout>
    </div>
  );
}

export default CategoryList;
