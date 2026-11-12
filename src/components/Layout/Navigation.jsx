import { Link } from "react-router-dom";
import { motion } from "motion/react";
import styles from "./Navigation.module.css";

// In-page sections on the home page.
const navItems = [
  { hash: "about", label: "about" },
  { hash: "projects", label: "projects" },
];

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link to="/" className={styles.logo}>
          cdb
        </Link>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.hash}>
              <a href={`/#${item.hash}`} className={styles.navLink}>
                <motion.span
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className={styles.prompt}>&gt;</span> {item.label}
                </motion.span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
