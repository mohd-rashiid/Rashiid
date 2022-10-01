import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

import {
  Button,
  Col,
  Collapse,
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
import { IconName, IoEye, IoEyeOutline } from "react-icons/io5";

// import StudentView from "..pages/StudentView";

import { map, range } from "lodash";
import { Link, useParams } from "react-router-dom";

function Students() {
  const dispatch = useDispatch();
  // const params = useParams();
  const [pages, setPages] = useState(1);

  const { studentData, loading, count } = useSelector((state) => ({
    studentData: state.createReducer.studentData,
    count: state.createReducer.studentDataCount,
    loading: state.loading,
  }));
  const totalPage = Math.round(count / 10);

  const pageToArray = range(1, totalPage + 1);
  // console.log(studentData?.data?.results);

  // const AllData = () => {
  //   studentData?.data?.results.map((item, key) => console.log(item.email));
  // };

  useEffect(() => {
    dispatch(getDataApi(pages));
  }, [dispatch, pages]);

  // const Data = map(studentData?.data?.results, (item, key) => ({
  //   ...item,
  //   key: key,

  // }));

  const tableData = studentData?.data?.results;

  console.log(pages);

  return (
    <div>
      <Layout>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>E-mail</th>
              {/* <th>phone</th> */}
              <th>Full Name</th>
              <th>Phone</th>
              <th>Start Date</th>
              <th>End Date</th>

              {/* <th>dob</th>
              <th>end_date</th> */}
              {/* <th>designation</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {map(tableData, (item, key) => (
              <tr key={key}>
                <th scope="row">{key + 1}</th>
                <td>{item?.email}</td>
                <td>{item?.full_name}</td>
                <td>{item?.phone}</td>
                <td>{item?.start_date}</td>
                <td>{item?.end_date}</td>
                <td>
                  <Link
                    style={{
                      color: "black",
                      // backgroundColor: "black",
                      textDecoration: "none",

                      // borderRadius: "5px",
                    }}
                    to={`/StudentView/${item?.id}`}
                  >
                    <IoEye style={{ fontSize: "25px" }} />

                    {/* View Details */}
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
              <MdArrowForward
                onClick={() => {
                  setPages(pages + 1);
                }}
              />
            </Col>
          </Row>
        </div>
      </Layout>
    </div>
  );
}

export default Students;
