import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";

function ProjectCard({ name, img, description, techStack, libraries }) {
  return (
    <motion.div
      className={styles.Card}
      initial={{ opacity: 0, y: 20 }} // Fade in from bottom
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>{name}</h1>
      <img src={img} alt={name} className={styles.Image} />
      <h5>{description}</h5>
    </motion.div>
  );
}

export default ProjectCard;
