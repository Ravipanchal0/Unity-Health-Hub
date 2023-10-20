import Navbar from "./components/js/Navbar";
import Home from "./components/js/Home";
import Footer from "./components/js/Footer";
import AddDoctor from "./components/js/AddDoctor";
import Addpatient from "./components/js/AddPatient";
import AddDepartmanet from "./components/js/AddDepartmanet";

function App() {
  function openNavbar() {
    let navbar = document.querySelector(".navbar"),
      rightbox = document.querySelector(".right");
    navbar.classList.toggle("active");
    rightbox.classList.toggle("open");
  }
  return (
    <>
      <Navbar openNav={openNavbar} />
      <Home />
      <AddDoctor />
      <Addpatient />
      <AddDepartmanet />
      <Footer />
    </>
  );
}

export default App;
