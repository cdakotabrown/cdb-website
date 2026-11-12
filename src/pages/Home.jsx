import { motion } from "motion/react";
import ProjectCard from "../components/Card/ProjectCard";
import { visibleProjects } from "../content/projects";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./Home.module.css";

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.4 },
};

export default function Home() {
  useDocumentTitle("Home");

  return (
    <div className={`container ${styles.home}`}>
      <section className={styles.hero}>
        <h1 className={styles.name}>Dakota Brown</h1>
        <p className={styles.tagline}>
          Software engineer building things for the web
        </p>
      </section>

      <motion.section id="about" className={styles.section} {...reveal}>
        <h2 className={styles.heading}>
          <span className={styles.prompt}>&gt;</span> about
        </h2>
        <p className={styles.bio}>
          Software engineer building agent-based AI tools. Fighting game player
          and tournament organizer, mostly Street Fighter and Guilty Gear. When
          I&apos;m not at a setup, I&apos;m working on my golf handicap.
        </p>
      </motion.section>

      <motion.section id="projects" className={styles.section} {...reveal}>
        <h2 className={styles.heading}>
          <span className={styles.prompt}>&gt;</span> projects
        </h2>
        <div className={styles.grid}>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </motion.section>
    </div>
  );
}
