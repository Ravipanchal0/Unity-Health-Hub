import React from "react";
import "../css/Navbar.css";
import "../css/Utilities.css";
import "../css/MediaQuery.css";
import companyLogo from "../img/logo.png";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/">
              <i className="fa-brands fa-twitter"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <i className="fa-brands fa-facebook"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <i className="fa-brands fa-square-instagram"></i>
            </NavLink>
          </li>
        </ul>
      </header>
      <nav className="navbar">
        <p className="logo">
          <NavLink to="/" className="centerItem">
            <img src={companyLogo} alt="UnityHealthHub" style={{ marginRight: "8px", width: "40px" }} /> Unity Health Hub
          </NavLink>
        </p>
        <div className="toggle" onClick={props.openNav}></div>
        <div className="right">
          <ul className="nav-menu">
            <li>
              <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/Department">
                Departments
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/Doctors">
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/Patients">
                Patients
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <button className="btn-apoimt">Make an Appointment</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
