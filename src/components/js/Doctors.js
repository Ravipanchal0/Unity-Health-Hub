import React, { useEffect } from "react";
import Search from "./Search";

function Doctors({ setProgress }) {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 100);
  }, []);
  return (
    <div className="main-box" style={{ minHeight: "100vh" }}>
      <h3 className="page-title">Doctors</h3>
      <Search search="Enter Doctor id/name" />
      <table>
        <thead>
          <tr>
            <th>Doctor Id</th>
            <th>Doctor Name</th>
            <th>Specialization</th>
            <th>Visiting Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10203</td>
            <td>Maria Anders</td>
            <td>Bone Specialist</td>
            <td>Morning</td>
          </tr>

          <tr>
            <td>10203</td>
            <td>Maria Anders</td>
            <td>Bone Specialist</td>
            <td>Morning</td>
          </tr>

          <tr>
            <td>10203</td>
            <td>Maria Anders</td>
            <td>Bone Specialist</td>
            <td>Morning</td>
          </tr>

          <tr>
            <td>10203</td>
            <td>Maria Anders</td>
            <td>Bone Specialist</td>
            <td>Morning</td>
          </tr>

          <tr>
            <td>10203</td>
            <td>Maria Anders</td>
            <td>Bone Specialist</td>
            <td>Morning</td>
          </tr>

          <tr>
            <td>10203</td>
            <td>Maria Anders</td>
            <td>Bone Specialist</td>
            <td>Morning</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Doctors;
