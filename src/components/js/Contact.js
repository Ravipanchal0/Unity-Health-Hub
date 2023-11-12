import React, { useEffect } from "react";

const Contact = ({ setProgress }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 100);
  }, [setProgress]);
  return (
    <div className="main-box" style={{ minHeight: "100vh" }}>
      <h1 className="page-title">Contact Us</h1>
      <div className="container">
        <form action="../html/submitPage.html">
          <div className="personalDetails">
            <label id="name" htmlFor="name">
              Full Name :
            </label>
            <input type="text" name="contactname" id="name" />
          </div>
          <div className="personalDetails">
            <label id="email" htmlFor="email">
              Email :
            </label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="personalDetails">
            <label id="phone" htmlFor="phone">
              Phone :
            </label>
            <input type="phone" name="phone" id="phone" />
          </div>
          <div className="personalDetails">
            <label id="msg" htmlFor="msg">
              Message :
            </label>
            <textarea name="msg" id="msg" style={{ resize: "vertical" }}></textarea>
          </div>
          <div className="buttons centerItem">
            <button className="button" type="submit" id="submitbutton">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
