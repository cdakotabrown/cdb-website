import { Link } from "react-router-dom";
import { motion } from "motion/react";
import styles from "./ProjectCard.module.css";

function CardLink({ project, children }) {
  if (project.path) {
    return (
      <Link to={project.path} className={styles.link}>
        {children}
      </Link>
    );
  }
  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        {children}
      </a>
    );
  }
  return <div className={styles.link}>{children}</div>;
}

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className={styles.card}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <CardLink project={project}>
        <div className={styles.thumbnail}>
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className={styles.thumbnailImage}
              style={{ objectPosition: project.thumbnailPosition }}
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
          </div>
        </div>
      </CardLink>
    </motion.article>
  );
}
