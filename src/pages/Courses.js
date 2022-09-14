import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import Layout from "../component/layout";
import { getCourseDataApi } from "../store/courseDetails/useApi";

function Courses() {
  const dispatch = useDispatch();

  const { getCourse, loading } = useSelector((state) => ({
    getCourse: state.createCourseReducer.getCourse,
    loading: state.loading,
  }));

  useEffect(() => {
    dispatch(getCourseDataApi());
  }, []);

  console.log(getCourse);

  return (
    <div>
      <Layout>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>course-name</th>
              <th>course-category</th>
            </tr>
          </thead>
          <tbody>
            {/* {map()} */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Layout>
    </div>
  );
}

export default Courses;
