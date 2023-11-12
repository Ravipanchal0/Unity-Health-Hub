import React, { useState } from "react";
import Navbar from "./components/js/Navbar";
import Home from "./components/js/Home";
import About from "./components/js/About";
import Department from "./components/js/Department";
import Doctors from "./components/js/Doctors";
import Patients from "./components/js/Patients";
import Contact from "./components/js/Contact";
import Footer from "./components/js/Footer";
import AddDoctor from "./components/js/AddDoctor";
import Addpatient from "./components/js/AddPatient";
import AddDepartmanet from "./components/js/AddDepartmanet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);
  function openNavbar() {
    let navbar = document.querySelector(".navbar"),
      rightbox = document.querySelector(".right");
    navbar.classList.toggle("active");
    rightbox.classList.toggle("open");
  }

  return (
    <>
      <Router>
        <LoadingBar color="#2998ff" progress={progress} onLoaderFinished={() => setProgress(0)} height={3} />
        <Navbar openNav={openNavbar} />
        <Routes>
          <Route path="/" element={<Home setProgress={setProgress} />} />
          <Route path="/about" element={<About setProgress={setProgress} />} />
          <Route path="/department" element={<Department setProgress={setProgress} />} />
          <Route path="/doctors" element={<Doctors setProgress={setProgress} />} />
          <Route path="/patients" element={<Patients setProgress={setProgress} />} />
          <Route path="/contact" element={<Contact setProgress={setProgress} />} />
          <Route path="/addDoctor" element={<AddDoctor setProgress={setProgress} />} />
          <Route path="/addDepartment" element={<Addpatient setProgress={setProgress} />} />
          <Route path="/addPatients" element={<AddDepartmanet setProgress={setProgress} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
