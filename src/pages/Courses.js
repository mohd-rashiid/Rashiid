import React from "react";
import { Table } from "reactstrap";
import Layout from "../component/layout";

function Courses() {
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
        </Table>
      </Layout>
    </div>
  );
}

export default Courses;
