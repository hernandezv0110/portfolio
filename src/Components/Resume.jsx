import styles from "./Resume.module.css";
import resume from "../assets/images/resume.pdf";

function Resume({ resumeRef }) {
  return (
    <div className={styles.Resume}>
      <h1 ref={resumeRef} className={styles["white-text"]}>
        Resume
      </h1>
      <div className={styles.ResumeViewer}>
        <iframe
          src={resume}
          title="My Resume"
          className={styles.Iframe}
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
