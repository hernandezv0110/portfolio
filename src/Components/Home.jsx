import { ReactTyped } from "react-typed";
import { Fragment } from "react";
import SocialMediaComponent from "./SocialMediaComponent";
import styles from "./Home.module.css";

function Home() {
  return (
    <div id="home" className={styles.Home}>
      <h1 className="white-text">
        Hi, I'm{" "}
        <span className="tech-green">
          <ReactTyped
            strings={["Victor Hernandez Barajas."]}
            typeSpeed={100}
            loop
          />
        </span>
      </h1>
      <h3 className="animated-text white-text">
        I'm a <span className="tech-green">software developer</span> 👨🏻‍💻
      </h3>
      <SocialMediaComponent />
      <h4 className="white-text">Connect with me!</h4>
    </div>
  );
}

export default Home;
