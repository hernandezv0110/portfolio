import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div
      style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "4vw",
          fontSize: "3rem",
        }}
      >
        <a
          href="https://www.instagram.com/victor.hrnandez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram style={{ color: "white" }} />
        </a>
        <a
          href="https://github.com/hernandezv0110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={{ color: "white" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/victorhernandez10/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ color: "#ffffff" }} />
        </a>
      </div>
    </div>
  );
}

export default App;
