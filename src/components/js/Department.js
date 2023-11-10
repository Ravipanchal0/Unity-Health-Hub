import React from "react";
import Search from "./Search";

function Department() {
  return (
    <div className="main-box" style={{ minHeight: "100vh" }}>
      <h3 className="page-title">Departments</h3>
      <Search search="Enter Department number" />
      <table>
        <thead>
          <tr>
            <th>Department Number</th>
            <th>Department Name</th>
            <th>AC Rooms</th>
            <th>Non-AC Rooms</th>
            <th>General Rooms</th>
            <th>Floor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="departId">12345</td>
            <td>X-Ray</td>
            <td>50</td>
            <td>30</td>
            <td>20</td>
            <td>2nd</td>
          </tr>
          <tr>
            <td className="departId">56872</td>
            <td>X-Ray</td>
            <td>50</td>
            <td>30</td>
            <td>20</td>
            <td>2nd</td>
          </tr>
          <tr>
            <td className="departId">18945</td>
            <td>X-Ray</td>
            <td>50</td>
            <td>30</td>
            <td>20</td>
            <td>2nd</td>
          </tr>
          <tr>
            <td className="departId">14525</td>
            <td>X-Ray</td>
            <td>50</td>
            <td>30</td>
            <td>20</td>
            <td>2nd</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Department;
