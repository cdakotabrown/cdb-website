import { motion } from "motion/react";
import { Download } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./Resume.module.css";

const experience = [
  {
    title: "Software Engineer",
    company: "Tech Company",
    period: "2023 - Present",
    description:
      "Building and maintaining web applications. Working with React, TypeScript, and Node.js.",
  },
  {
    title: "Junior Developer",
    company: "Startup Inc",
    period: "2021 - 2023",
    description:
      "Full-stack development on various client projects. Learned agile methodologies and best practices.",
  },
];

const skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "Go", "SQL"],
  Frontend: ["React", "Next.js", "HTML/CSS", "Tailwind"],
  Backend: ["Node.js", "Express", "PostgreSQL", "Redis"],
  Tools: ["Git", "Docker", "AWS", "Linux"],
};

const education = [
  {
    degree: "B.S. Computer Science",
    school: "University",
    year: "2021",
  },
];

export default function Resume() {
  useDocumentTitle("Resume");

  return (
    <div className={`container ${styles.resume}`}>
      <motion.header className={styles.header}>
        <div>
          <h1>Resume</h1>
          <p className="text-muted">Software Engineer</p>
        </div>
        <a href="/resume.pdf" className={styles.downloadButton} download>
          <Download size={16} />
          Download PDF
        </a>
      </motion.header>

      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <h2>Experience</h2>
        <div className={styles.entries}>
          {experience.map((job, i) => (
            <div key={i} className={styles.entry}>
              <div className={styles.entryHeader}>
                <div>
                  <h3>{job.title}</h3>
                  <p className={styles.company}>{job.company}</p>
                </div>
                <span className={styles.period}>{job.period}</span>
              </div>
              <p className={styles.description}>{job.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <h2>Skills</h2>
        <div className={styles.skills}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={styles.skillGroup}>
              <h3>{category}</h3>
              <div className={styles.skillTags}>
                {items.map((skill) => (
                  <span key={skill} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <h2>Education</h2>
        <div className={styles.entries}>
          {education.map((edu, i) => (
            <div key={i} className={styles.entry}>
              <div className={styles.entryHeader}>
                <div>
                  <h3>{edu.degree}</h3>
                  <p className={styles.company}>{edu.school}</p>
                </div>
                <span className={styles.period}>{edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
