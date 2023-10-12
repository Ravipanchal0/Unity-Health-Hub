import React from "react";
import "../css/Navbar.css";
import "../css/Utilities.css";
import "../css/MediaQuery.css";
import companyLogo from "../img/logo.png";

function Navbar(props) {
  return (
    <>
      <header className="contactInfo ">
        <ul className="centerItem">
          <li className="contact" id="h-email">
            <i className="icon fa-regular fa-envelope"></i>Unityhealthhub@gmail.com
          </li>
          <li className="contact">
            <i className="icon fa-solid fa-user" id="phone"></i>+91 9876543210
          </li>
        </ul>
        <ul className="socialmedia centerItem">
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </li>
        </ul>
      </header>
      <nav className="navbar">
        <p className="logo centerItem">
          <img src={companyLogo} style={{ marginRight: "8px", width: "40px" }} /> Unity Health Hub
        </p>
        <div className="toggle" onClick={props.openNav}></div>
        <div className="right">
          <ul className="nav-menu">
            <li>
              <a href="MyHospital.html">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Department</a>
            </li>
            <li>
              <a href="#">Doctors</a>
            </li>
            <li>
              <a href="#">Patients</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <button className="btn-apoimt">Make an Appointment</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
