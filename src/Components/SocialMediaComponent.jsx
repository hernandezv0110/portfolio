import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./SocialMediaComponent.module.css";

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
          <FaInstagram className={styles.icon} />
        </a>
        <a
          href="https://github.com/hernandezv0110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/victorhernandez10/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={styles.icon} />
        </a>
      </div>
    </div>
  );
}

export default App;
