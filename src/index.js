import React from "react";
import ReactDom from "react-dom";
import Loader from "./components/loader";
import ToTopBtn from "./components/toTopBtn";
import NavbarBtn from "./components/navbarBtn";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import About from "./components/about";
import Experience from "./components/experience";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Modal from "./components/modal";

const App = () => {
  return (
    <main className='loading'>
      <Loader />
      <ToTopBtn />
      <NavbarBtn />
      <Navbar />
      <Intro />
      <Portfolio />
      <Skills />
      <About />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      <Modal />
    </main>
  );
};

ReactDom.render(<App />, document.getElementById("app"));
