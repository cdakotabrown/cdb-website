import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import styles from "./Navigation.module.css";

// TODO: /links temporarily hidden from nav, restore when ready
const navItems = [
  { path: "/projects", label: "projects" },
  { path: "/blog", label: "blog" },
  { path: "/now", label: "now" },
  { path: "/about", label: "about" },
  // { path: "/links", label: "links" },
  { path: "/contact", label: "contact" },
];

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <NavLink to="/" className={styles.logo}>
          ~/dakota
        </NavLink>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
              >
                <motion.span
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className={styles.prompt}>&gt;</span> {item.label}
                </motion.span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
