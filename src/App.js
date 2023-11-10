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

function App() {
  function openNavbar() {
    let navbar = document.querySelector(".navbar"),
      rightbox = document.querySelector(".right");
    navbar.classList.toggle("active");
    rightbox.classList.toggle("open");
  }

  return (
    <>
      <Router>
        <Navbar openNav={openNavbar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/department" element={<Department />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addDoctor" element={<AddDoctor />} />
          <Route path="/addDepartment" element={<Addpatient />} />
          <Route path="/addPatients" element={<AddDepartmanet />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
