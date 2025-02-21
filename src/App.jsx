import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavbarComponent from "./Components/NavbarComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavbarComponent />
      <h1>Victor Hernandez: Developer</h1>
    </div>
  );
}

export default App;
