import React, { useEffect } from "react";
import "../css/MediaQuery.css";

function AddDepartmanet({ setProgress }) {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 100);
  }, []);
  return (
    <>
      <main id="addDepartment">
        <div className="main-box">
          <h3 className="page-title">Add Department</h3>
          <div className="container">
            <form action="departmentDetails.php">
              <div className="personalDetails">
                <label id="dnspace" htmlFor="dname">
                  Department Name :
                </label>
                <input type="text" name="departmentname" id="dname" placeholder="Department name" required />
              </div>
              <div className="personalDetails" id="depart-desc">
                <label id="ddspace" htmlFor="ddesc">
                  Department Description :
                </label>
                <textarea name="departmentdesc" id="ddesc" placeholder="Department Description" required></textarea>
              </div>
              <div className="personalDetails">
                <label htmlFor="ndoctor">No of Doctors :</label>
                <input type="number" name="noOfDoctors" id="ndoctor" min="1" max="100" defaultValue="0" required />
              </div>
              <div className="personalDetails">
                <label htmlFor="generalrooms">No of General Room :</label>
                <input type="number" name="generalrooms" id="generalrooms" min="0" defaultValue="0" required />
              </div>
              <div className="personalDetails">
                <label htmlFor="acrooms">No of AC Rooms :</label>
                <input type="number" name="noOfacrooms" id="acrooms" min="0" defaultValue="0" required />
              </div>
              <div className="personalDetails">
                <label htmlFor="nonacrooms">No of non AC Rooms :</label>
                <input type="number" name="noOfnonacrooms" id="nonacrooms" min="0" defaultValue="0" required />
              </div>
              <div className="personalDetails">
                <label htmlFor="icu">No of ICU :</label>
                <input type="number" name="noOficu" id="icu" min="0" defaultValue="0" required />
              </div>
              <div className="personalDetails">
                <label htmlFor="grcost">Cost of General Room :</label>
                <input type="number" name="gerenalroomcost" id="grcost" min="0" defaultValue="0" step="100" required />
              </div>
              <div className="personalDetails">
                <label htmlFor="accost">Cost of AC Room :</label>
                <input type="number" name="ACroomcost" id="accost" min="0" step="100" defaultValue="0" required />
              </div>
              <div className="personalDetails">
                <label htmlFor="nonaccost">Cost of non AC Room :</label>
                <input type="number" name="nonACroomcost" id="nonaccost" min="0" step="100" defaultValue="0" required />
              </div>
              <div className="personalDetails">
                <label htmlFor="icucost">Cost of each ICU :</label>
                <input type="number" name="ICUcost" id="icucost" min="0" step="100" defaultValue="0" required />
              </div>
              <div className="btn-container centerItem">
                <button className="button" type="submit" id="submitbutton" href="submitPage.html">
                  Submit
                </button>
                <button className="button" type="reset" id="resetbutton">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default AddDepartmanet;
