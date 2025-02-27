import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactTyped } from "react-typed";

import "./App.css";
import NavbarComponent from "./Components/NavbarComponent";
import SocialMediaComponent from "./Components/SocialMediaComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <h1 className="white-text">
        Hi, I'm{" "}
        <span className="tech-green">
          <ReactTyped
            strings={["Victor Hernandez Barajas."]}
            typeSpeed={100}
            loop
          />
        </span>
      </h1>
      <h3 className="animated-text white-text">
        I'm a <span className="tech-green">software developer</span> 👨🏻‍💻
      </h3>
      <SocialMediaComponent />
    </div>
  );
}

export default App;
