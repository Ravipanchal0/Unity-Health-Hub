import React from "react";
import Search from "./Search";

function Patients() {
  return (
    <div className="main-box" style={{ minHeight: "100vh" }}>
      <h3 className="page-title">Patients</h3>
      <Search search="Enter Patients id/name" />
      <table>
        <thead>
          <tr>
            <th>Patient Id</th>
            <th>Patient Name</th>
            <th>Department Name</th>
            <th>Room</th>
            <th>Disease</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7809</td>
            <td>Alfreds Futterkiste</td>
            <td>Thyroid Department</td>
            <td>AC-17</td>
            <td>Thyroid</td>
          </tr>

          <tr>
            <td>7809</td>
            <td>Alfreds Futterkiste</td>
            <td>Thyroid Department</td>
            <td>AC-17</td>
            <td>Thyroid</td>
          </tr>

          <tr>
            <td>7809</td>
            <td>Alfreds Futterkiste</td>
            <td>Thyroid Department</td>
            <td>AC-17</td>
            <td>Thyroid</td>
          </tr>

          <tr>
            <td>7809</td>
            <td>Alfreds Futterkiste</td>
            <td>Thyroid Department</td>
            <td>AC-17</td>
            <td>Thyroid</td>
          </tr>

          <tr>
            <td>7809</td>
            <td>Alfreds Futterkiste</td>
            <td>Thyroid Department</td>
            <td>AC-17</td>
            <td>Thyroid</td>
          </tr>

          <tr>
            <td>7809</td>
            <td>Alfreds Futterkiste</td>
            <td>Thyroid Department</td>
            <td>AC-17</td>
            <td>Thyroid</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Patients;
