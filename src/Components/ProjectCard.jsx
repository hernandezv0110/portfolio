import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";

function ProjectCard({
  name,
  img,
  description,
  techStack = [],
  libraries = [],
  link,
}) {
  const isVideo = img === "none";
  console.log(link);
  return (
    <motion.div
      className={styles.Card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.MediaWrapper}>
        {isVideo ? (
          <div className={styles.VideoWrapper}>
            <iframe
              id="connect-four-vid"
              src="https://drive.google.com/file/d/1mWEX92w4AYvHFSwT7sInm4mTitIQag3G/preview"
              allow="autoplay"
              className={styles.Video}
              title="Connect Four Demo"
            ></iframe>
          </div>
        ) : (
          <img src={img} alt={name} className={styles.Image} />
        )}
      </div>
      <div className={styles.Content}>
        <h2 className={styles.green}>{name}</h2>
        <p>{description}</p>
        {(techStack.length > 0 || libraries.length > 0) && (
          <div className={styles.Tech}>
            {techStack.length > 0 && (
              <p>
                <strong>Tech Stack:</strong> {techStack.join(", ")}
              </p>
            )}
            {libraries.length > 0 && (
              <p>
                <strong>Libraries:</strong> {libraries.join(", ")}
              </p>
            )}
          </div>
        )}
        {link && (
          <a
            href={link}
            className={styles.Link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
