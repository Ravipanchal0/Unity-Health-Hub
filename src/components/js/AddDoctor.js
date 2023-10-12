import React from "react";
import "../css/MediaQuery.css";

function AddDoctor() {
  return (
    <>
      <main id="addDorctor">
        <div className="main-box">
          <h3 className="page-title">Add Doctor</h3>
          <div className="container">
            <form action="../html/submitPage.html">
              <div className="personalDetails">
                <label htmlFor="fname">First Name :</label>
                <input type="text" name="firstname" id="fname" required autoCapitalize="on" />
              </div>
              <div className="personalDetails">
                <label htmlFor="mname">Middle Name :</label>
                <input type="text" name="middlename" id="mname" />
              </div>
              <div className="personalDetails">
                <label htmlFor="lname">last Name :</label>
                <input type="text" name="lastname" id="lname" required autoCapitalize="on" />
              </div>
              <div className="personalDetails">
                <label htmlFor="regNo">Registration Number :</label>
                <input type="text" name="regnumber" id="regNo" />
              </div>
              <div className="personalDetails">
                <label htmlFor="ddob">Date Of Birth :</label>
                <input type="date" name="mydob" id="ddob" required />
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
                <label htmlFor="drEmail">Email :</label>
                <input type="email" name="myemail" id="drEmail" required />
              </div>
              <div className="personalDetails">
                <label htmlFor="specialization">Specialization :</label>
                <input type="email" name="myspecialization" id="specialization" required />
              </div>
              <div className="personalDetails">
                <label htmlFor="quali">Qualification :</label>
                <input type="text" name="qualification" id="quali" required />
              </div>
              <div className="personalDetails">
                <label htmlFor="contact">Contact Number :</label>
                <input type="tel" name="contactNumber" id="contact" required size="10" maxLength="10" pattern="[0-9]{10}" />
              </div>
              <div className="personalDetails">
                <label htmlFor="address">Address :</label>
                <input type="text" name="drAddress" id="address" autoComplete="additional-name" />
              </div>
              <div className="personalDetails" id="vtime">
                <label htmlFor="time">Visiting Time</label>
                <select name="vtime" id="time" required>
                  <option defaultValue="monrning">Morning</option>
                  <option defaultValue="afternoon">Afternoon</option>
                  <option defaultValue="evening">Evening</option>
                </select>
              </div>
              <div className="personalDetails" id="vday">
                <label htmlFor="day">Visiting Day</label>
                <select name="vday" id="day" multiple required>
                  <option className="options" defaultValue="mon">
                    Monday
                  </option>
                  <option className="options" defaultValue="tues">
                    Tuesday
                  </option>
                  <option className="options" defaultValue="wed">
                    Wednesday
                  </option>
                  <option className="options" defaultValue="thurs">
                    Thursday
                  </option>
                  <option className="options" defaultValue="fri">
                    Friday
                  </option>
                  <option className="options" defaultValue="sat">
                    Saturday
                  </option>
                  <option className="options" defaultValue="sun">
                    Sunday
                  </option>
                </select>
              </div>
              <div className="personalDetails">
                <label htmlFor="npatient">No of Patients per Day :</label>
                <input type="number" name="noOfPetientsPerDay" id="npatient" min="1" max="20" defaultValue="0" required />
              </div>
              <div className="personalDetails">
                <label htmlFor="department">Department No. :</label>
                <input type="number" name="departmentNumber" id="department" min="1" max="10" required />
              </div>
              <div className="buttons centerItem separate-border">
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

export default AddDoctor;
