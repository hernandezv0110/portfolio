import styles from "./Resume.module.css";

function Projects({ resumeRef }) {
  return (
    <div className={styles.Resume}>
      <h1 ref={resumeRef} className={styles["white-text"]}>
        Resume
      </h1>
      ;
    </div>
  );
}

export default Projects;
