import { motion } from "motion/react";
import ProjectCard from "../components/Card/ProjectCard";
import { projects } from "../content/projects";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./Projects.module.css";

export default function Projects() {
  useDocumentTitle("Projects");

  return (
    <div className="container">
      <motion.header className={styles.header}>
        <h1>Projects</h1>
        <p className="text-muted">Things I&apos;ve built and worked on</p>
      </motion.header>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
