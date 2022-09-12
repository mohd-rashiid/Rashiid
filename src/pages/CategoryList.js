import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "reactstrap";
import Layout from "../component/layout";
import { getCourseCategoryApi } from "../store/courseCategory/useApii";
import { map } from "lodash";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";

function CategoryList() {
  const dispatch = useDispatch();

  const { courseCategory, loading } = useSelector((state) => ({
    courseCategory: state.createCourseCategoryReducer.courseCategory,
    loading: state.loading,
  }));

  useEffect(() => {
    dispatch(getCourseCategoryApi());
  }, []);

  const courseTable = courseCategory?.data?.results;
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
        </Table>{" "}
      </Layout>
    </div>
  );
}

export default CategoryList;
