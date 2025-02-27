import styles from "./AboutMe.module.css";
import portrait from "../assets/images/portrait.png";

function AboutMe({ aboutRef }) {
  return (
    <div className={styles.AboutMe}>
      <h1 ref={aboutRef} className={styles["white-text"]}>
        Hey There!
      </h1>
      <div className={styles.layout}>
        <img src={portrait}></img>
        <p className={styles["white-text"]}>
          I am Victor Ivan Hernandez Barajas
        </p>
      </div>
      ;
    </div>
  );
}

export default AboutMe;
