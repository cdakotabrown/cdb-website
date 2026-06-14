import { motion } from "motion/react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./Now.module.css";

export default function Now() {
  useDocumentTitle("Now");

  return (
    <div className={`container ${styles.now}`}>
      <motion.header>
        <h1>Now</h1>
        <p className={styles.updated}>
          Last updated: June 2026 from Bentonville, AR
        </p>
      </motion.header>

      <div className={styles.sections}>
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <h2>Working on</h2>
          <ul>
            <li>Decompiling a PS1 game</li>
          </ul>
        </motion.section>

        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h2>Reading</h2>
          <ul>
            <li>&quot;The Divine Comedy&quot; by Dante Alighieri</li>
          </ul>
        </motion.section>

        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <h2>Playing</h2>
          <ul>
            <li>Dota 2</li>
            <li>Street Fighter 6</li>
            <li>Guilty Gear XX Accent Core Plus R</li>
          </ul>
        </motion.section>

        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <h2>Life</h2>
          <ul>
            <li>Keeping a routine</li>
            <li>Lowering my golf handicap</li>
          </ul>
        </motion.section>
      </div>

      <motion.p
        className={styles.note}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        This is a{" "}
        <a
          href="https://nownownow.com/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          now page
        </a>
        . You should make one too.
      </motion.p>
    </div>
  );
}
