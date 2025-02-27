import styles from "./Contact.module.css";

function Projects({ contactRef }) {
  return (
    <div className={styles.Contact}>
      <h1 ref={contactRef} className={styles["white-text"]}>
        Contact Me
      </h1>
      ;
    </div>
  );
}

export default Projects;
