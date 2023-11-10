import React from "react";
import "../css/Footer.css";
import "../css/Utilities.css";
import "../css/MediaQuery.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer centerItem" id="footer">
        <div className="copyright">
          <p>
            &copy; Copyright <strong>Unity Health Hub</strong>. All Right Reserved
          </p>
        </div>
        <div className="footer-icon">
          <ul className="centerItem">
            <li>
              <Link to="#">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
