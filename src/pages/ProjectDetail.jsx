import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProjectBySlug } from "../content/projects";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./ProjectDetail.module.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  useDocumentTitle(project?.title ?? "Project");

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <article className={styles.article}>
      <motion.div className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {project.title}
          </motion.h1>
        </div>
      </motion.div>

      <div className={`container ${styles.content}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <Link to="/projects" className={styles.backLink}>
            <ArrowLeft size={16} />
            Back to projects
          </Link>

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
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <div className={styles.description}>
            {project.fullDescription.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {project.links && (
            <div className={styles.links}>
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  <ExternalLink size={16} />
                  View Live
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  <Github size={16} />
                  Source Code
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </article>
  );
}
