import React from "react";
import "../css/Home.css";
import "../css/Utilities.css";
import "../css/MediaQuery.css";

function Home() {
  return (
    <>
      <main>
        <div className="welcome-box">
          <div className="welcome">
            <h3 className="heading">Welcome to Unity Health Hub</h3>
            <p className="slogan">we are not God but we are trying to keep save and safe Gift of God.</p>
          </div>
        </div>
        <div className="box">
          <div className="why-choose">
            <h3>Why choose Unity Health Hub ?</h3>
            <p>
              At Unity Health Hub, your health and well-being are our top priorities. We understand that choosing the right healthcare provider is a
              significant decision, and we believe that our hospital stands out for several compelling reasons.
            </p>
          </div>
          <div className="boxes centerItem">
            <a href="addDoctor" className="c-box centerItem" id="addDoctor">
              <i className="c-icon fa-solid fa-user-doctor"></i>Add a Doctor
            </a>
            <a href="addDepartment" className="c-box centerItem" id="addDepartment">
              <i className="c-icon fa-solid fa-building"></i>Add a Department
            </a>
            <a href="addPatients" className="c-box centerItem" id="addPatient">
              <i className="c-icon fa-solid fa-bed"></i>Add a Patient
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
