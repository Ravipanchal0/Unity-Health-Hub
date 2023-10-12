import React from "react";
import "../css/MediaQuery.css";

function Addpatient() {
  return (
    <>
      <main id="addPatients">
        <div className="main-box">
          <h3 className="page-title">Add Pateint</h3>
          <div className="container">
            <form action="../html/submitPage.html">
              <div className="personalDetails">
                <label id="pfname" htmlFor="fname">
                  First Name :
                </label>
                <input type="text" name="patientname" id="fname" />
              </div>
              <div className="personalDetails">
                <label id="plname" htmlFor="lname">
                  Last Name :
                </label>
                <input type="text" name="patientname" id="lname" />
              </div>
              <div className="personalDetails">
                <label id="pdob" htmlFor="DOB">
                  Date Of Birth :
                </label>
                <input type="date" name="DOB" id="DOB" />
              </div>
              <div className="personalDetails g-center">
                <p>Gender :</p>
                <div>
                  <input className="cursor" type="radio" name="gender" id="male" />
                  <label className="sub-gender cursor" htmlFor="male">
                    Male
                  </label>
                  <input className="cursor" type="radio" name="gender" id="female" />
                  <label className="sub-gender cursor" htmlFor="female">
                    Female
                  </label>
                  <input className="cursor" type="radio" name="gender" id="other" />
                  <label className="sub-gender cursor" htmlFor="other">
                    Other
                  </label>
                </div>
              </div>
              <div className="personalDetails">
                <label id="pspouse-name" htmlFor="spouse">
                  Father/Spouse Name :
                </label>
                <input type="text" name="patientname" id="spouse" />
              </div>
              <div className="personalDetails">
                <label id="pblood-group" htmlFor="blood">
                  Blood Group
                </label>
                <select name="bloodGroup" id="blood">
                  <option className="design" defaultValue="O+">
                    O+
                  </option>
                  <option className="design" defaultValue="O-">
                    O-
                  </option>
                  <option className="design" defaultValue="AB+">
                    AB+
                  </option>
                  <option className="design" defaultValue="AB-">
                    AB-
                  </option>
                  <option defaultValue="A+">A+</option>
                  <option defaultValue="A-">A-</option>
                  <option defaultValue="B+">B+</option>
                  <option defaultValue="B-">B-</option>
                </select>
              </div>
              <div className="personalDetails">
                <label id="pcontactNumber" htmlFor="contact">
                  Contact Number :
                </label>
                <input type="text" name="contactNumber" id="contact" />
              </div>
              <div className="personalDetails">
                <input type="checkbox" name="visited" id="earlier" />
                <label id="pv-earlier" htmlFor="earlier">
                  Visited Earlier
                </label>
              </div>
              <div className="buttons centerItem">
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

export default Addpatient;
