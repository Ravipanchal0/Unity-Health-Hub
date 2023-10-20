import React from "react";
import "../css/Footer.css";
import "../css/Utilities.css";
import "../css/MediaQuery.css";

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
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
