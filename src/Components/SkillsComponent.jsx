import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaGithub,
  FaAngular,
} from "react-icons/fa";

import styles from "./SkillsComponent.module.css";
import { motion } from "framer-motion";

function SkillsComponent() {
  const techStack = [
    { icon: <FaPython size={50} color="#3776AB" />, delay: 0 },
    { icon: <FaJava size={50} color="#007396" />, delay: 0.2 },
    { icon: <FaReact size={50} color="#61DAFB" />, delay: 0.4 },
    { icon: <FaHtml5 size={50} color="#E34F26" />, delay: 0.6 },
    { icon: <FaCss3Alt size={50} color="#1572B6" />, delay: 0.8 },
    { icon: <FaJs size={50} color="#F7DF1E" />, delay: 1.0 },
    { icon: <FaGithub size={50} color="#ffffff" />, delay: 1.2 },
    { icon: <FaAngular size={50} color="#DD0031" />, delay: 1.4 },
  ];

  return (
    <div className={styles.skills}>
      <h4>Technical Skills</h4>
      <div className={styles.icons}>
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: tech.delay }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SkillsComponent;
