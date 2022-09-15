import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import Layout from "../component/layout";
import { getCourseDataApi } from "../store/courseDetails/useApi";
import { map } from "lodash";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

function Courses() {
  const dispatch = useDispatch();

  const { getCourse, loading } = useSelector((state) => ({
    getCourse: state.createCourseReducer.getCourse,
    loading: state.loading,
  }));

  useEffect(() => {
    dispatch(getCourseDataApi());
  }, []);
  console.log(getCourse?.results?.[0]);
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
              <th>course-category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {map(CourseStore, (item, key) => (
              <tr key={key}>
                <td scope="row">{key + 1}</td>
                <td>{item?.course_name}</td>
                <td>{item?.course_category}</td>
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
      </Layout>
    </div>
  );
}

export default Courses;
