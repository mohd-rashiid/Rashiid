import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
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

function Students() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllStudent());
  }, []);

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
              {/* <th>dob</th>
              <th>start_date</th>
              <th>end_date</th> */}
              <th>designation</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Button style={{ color: "black", backgroundColor: "white" }}>
                  View Details
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Button style={{ color: "black", backgroundColor: "white" }}>
                  View Details
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Button style={{ color: "black", backgroundColor: "white" }}>
                  View Details
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Button style={{ color: "black", backgroundColor: "white" }}>
                  View Details
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Button style={{ color: "black", backgroundColor: "white" }}>
                  View Details
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Button style={{ color: "black", backgroundColor: "white" }}>
                  View Details
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Layout>
    </div>
  );
}

export default Students;
