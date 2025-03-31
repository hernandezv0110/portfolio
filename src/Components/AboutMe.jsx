import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useState } from "react";

import styles from "./AboutMe.module.css";
import portrait from "../assets/images/portrait.png";
import grad from "../assets/images/grad.jpg";
import hike from "../assets/images/hike.jpg";
import palace from "../assets/images/palace.jpg";
import SkillsComponent from "./SkillsComponent";

function AboutMe({ aboutRef }) {
  const images = [portrait, grad];

  const [showName, setShowName] = useState(false);
  const [showPronouns, setShowPronouns] = useState(false);
  const [showCollege, setShowCollege] = useState(false);
  const [showMajor, setShowMajor] = useState(false);
  const [showFunFact, setShowFunFact] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const startTyping = () => {
    setTimeout(() => setShowName(true), 500);
    setTimeout(() => setShowPronouns(true), 500);
    setTimeout(() => setShowCollege(true), 500);
    setTimeout(() => setShowMajor(true), 500);
    setTimeout(() => setShowFunFact(true), 500);
    setTimeout(() => setShowBio(true), 500);
    setTimeout(() => setShowSkills(true), 700);
  };

  return (
    <div className={styles.AboutMe}>
      <h1 ref={aboutRef} className={styles["white-text"]}>
        About Me
      </h1>
      <div className={styles.layout}>
        {images.map((image, index) => (
          <motion.img
            key={index}
            className={styles.pic}
            src={image}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.4 }}
            viewport={{ once: true }}
            onViewportEnter={startTyping}
          />
        ))}
      </div>
      <div className={styles["text-container"]}>
        <div className={styles["left-text"]}>
          <h2>
            Name:{" "}
            {showName && (
              <ReactTyped
                strings={["Victor Hernandez Barajas"]}
                typeSpeed={35}
                showCursor={false}
                className={styles["green-text"]}
              />
            )}
          </h2>

          <h2>
            Pronouns:{" "}
            {showPronouns && (
              <ReactTyped
                strings={["He/Him/His"]}
                typeSpeed={35}
                showCursor={false}
                className={styles["green-text"]}
              />
            )}
          </h2>

          <h2>
            College:{" "}
            {showCollege && (
              <ReactTyped
                strings={["University of California, Irvine"]}
                typeSpeed={35}
                showCursor={false}
                className={styles["green-text"]}
              />
            )}
          </h2>

          <h2>
            Major:{" "}
            {showMajor && (
              <ReactTyped
                strings={["Computer Science B.S."]}
                typeSpeed={35}
                showCursor={false}
                className={styles["green-text"]}
              />
            )}
          </h2>

          <h2>
            Fun Fact:{" "}
            {showFunFact && (
              <ReactTyped
                strings={["I love hiking"]}
                typeSpeed={35}
                showCursor={false}
                className={styles["green-text"]}
              />
            )}
          </h2>
        </div>
        {showBio && (
          <motion.h5
            className={styles["left-text"]}
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              duration: 10,
            }}
          >
            Hi, I am a UCI recent grad located in the San Francisco Bay Area. I
            am looking to expand my knowledge in software engineering and become
            an expert in front-end development. I was first exposed to coding
            back in the day when I was obsessed with the mobile game Flappy
            Bird. I would try to build games on Scratch which eventually led me
            to take a CS course in high school and end up majoring in Computer
            Science. I love the problem-solving aspect involved with coding and
            enjoy the fact that I learn something new every time I code.
          </motion.h5>
        )}
      </div>
      {showSkills && <SkillsComponent />}
    </div>
  );
}

export default AboutMe;
