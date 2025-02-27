import styles from "./AboutMe.module.css";

function AboutMe({ aboutRef }) {
  return (
    <div className={styles.AboutMe}>
      <h1 ref={aboutRef}>About Me</h1>;
    </div>
  );
}

export default AboutMe;
