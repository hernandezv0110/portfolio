import styles from "./Projects.module.css";

function Projects({ projectsRef }) {
  return (
    <div className={styles.Projects}>
      <h1 ref={projectsRef} className={styles["white-text"]}>
        Projects
      </h1>
      ;
    </div>
  );
}

export default Projects;
