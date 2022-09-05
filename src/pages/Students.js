import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Col,
  Container,
  Input,
  List,
  ListGroup,
  ListGroupItemHeading,
  Row,
  Table,
} from "reactstrap";
import Layout from "../component/layout";
import { AxiosApi } from "../store/AxiosMethod";
import { getDataApi } from "../store/students/useApi";
// import StudentView from "..pages/StudentView";

import { map } from "lodash";
import { Link } from "react-router-dom";

function Students() {
  const dispatch = useDispatch();

  const { studentData, loading } = useSelector((state) => ({
    studentData: state.createReducer.studentData,
    loading: state.loading,
  }));

  console.log(studentData?.data?.results);

  // const AllData = () => {
  //   studentData?.data?.results.map((item, key) => console.log(item.email));
  // };

  useEffect(() => {
    dispatch(getDataApi());
  }, []);

  // const Data = map(studentData?.data?.results, (item, key) => ({
  //   ...item,
  //   key: key,

  // }));

  const tableData = studentData?.data?.results;

  return (
    <div>
      <Layout>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>email</th>
              {/* <th>phone</th> */}
              <th>full_name</th>
              <th>address</th>
              <th>start_date</th>
              <th>End_date</th>
              {/* <th>dob</th>
              <th>end_date</th> */}
              {/* <th>designation</th> */}
              {/* <th>actions</th> */}
            </tr>
          </thead>
          <tbody>
            {map(tableData, (item, key) => (
              <tr key={key}>
                <th scope="row">{key + 1}</th>
                <td>{item?.email}</td>
                <td>{item?.full_name}</td>
                <td>{item?.address}</td>
                <td>{item?.start_date}</td>
                <td>{item?.end_date}</td>
                <td>
                  {" "}
                  <Link to={"/StudentView/${item?.id} "}>
                    <Button
                      style={{ color: "black", backgroundColor: "white" }}
                    >
                      View Details
                    </Button>
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

export default Students;
