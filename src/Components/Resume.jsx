import styles from "./Resume.module.css";

function Resume({ resumeRef }) {
  return (
    <div className={styles.Resume}>
      <h1 ref={resumeRef} className={styles["white-text"]}>
        Resume
      </h1>
      ;
    </div>
  );
}

export default Resume;
