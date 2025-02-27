import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactTyped } from "react-typed";

import "./App.css";
import NavbarComponent from "./Components/NavbarComponent";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    const navbarHeight = 80;
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <NavbarComponent
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        resumeRef={resumeRef}
        contactRef={contactRef}
        scrollToSection={scrollToSection}
      />
      <Home />
      <AboutMe aboutRef={aboutRef} />
    </div>
  );
}

export default App;
