import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./Home.module.css";

const navItems = [
  { path: "/projects", label: "projects" },
  { path: "/blog", label: "blog" },
  { path: "/now", label: "now" },
  { path: "/about", label: "about" },
];

export default function Home() {
  useDocumentTitle("Home");

  return (
    <div className={`container ${styles.home}`}>
      <motion.section className={styles.hero}>
        <h1 className={styles.name}>Dakota Brown</h1>
        <p className={styles.tagline}>
          Software engineer building things for the web
        </p>
      </motion.section>

      <motion.nav
        className={styles.terminalNav}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <Link to={item.path} className={styles.terminalLink}>
              <span className={styles.prompt}>&gt;</span> {item.label}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </div>
  );
}
