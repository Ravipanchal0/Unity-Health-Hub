import React from "react";
import "../css/Navbar.css";
import "../css/Utilities.css";
import "../css/MediaQuery.css";
import companyLogo from "../img/logo.png";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa-brands fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa-brands fa-square-instagram"></i>
            </Link>
          </li>
        </ul>
      </header>
      <nav className="navbar">
        <p className="logo">
          <Link to="/" className="centerItem">
            <img src={companyLogo} style={{ marginRight: "8px", width: "40px" }} /> Unity Health Hub
          </Link>
        </p>
        <div className="toggle" onClick={props.openNav}></div>
        <div className="right">
          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Department">Departments</Link>
            </li>
            <li>
              <Link to="/Doctors">Doctors</Link>
            </li>
            <li>
              <Link to="/Patients">Patients</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <button className="btn-apoimt">Make an Appointment</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
