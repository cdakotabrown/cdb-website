import { Link } from "react-router-dom";
import { motion } from "motion/react";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className={styles.card}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link to={`/projects/${project.slug}`} className={styles.link}>
        <div className={styles.thumbnail}>
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className={styles.thumbnailImage}
            />
          ) : (
            <div className={styles.thumbnailPlaceholder}>
              {project.title.charAt(0)}
            </div>
          )}
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.meta}>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <time className={styles.date}>
              {new Date(project.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              })}
            </time>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
