import { motion } from "motion/react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./About.module.css";

export default function About() {
  useDocumentTitle("About");

  return (
    <div className={`container ${styles.about}`}>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <h1>About Me</h1>
      </motion.header>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <p>
          Building agent-based solutions for Walmart&apos;s Growth Tech team in
          Bentonville, where I&apos;ve been since 2017 — started in pharmacy,
          ended up in AI. Avid fighting game player and tournament organizer; I
          run Bears by the Maul Gaming Lounge, a weekly video game and card game
          tournament we host here in town. Outside of all that, I play Street
          Fighter 6 and Guilty Gear XX Accent Core Plus R, slowly decompile a
          PS1 game for fun, work on my golf handicap, and read Dante&apos;s
          Divine Comedy. None of it happens on a fixed schedule, but it all
          happens eventually.
        </p>
      </motion.div>

      <motion.div
        className={styles.decorative}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className={styles.asciiArt}>
          <pre>{`
    ╔══════════════════════╗
    ║  Thanks for reading  ║
    ║      (◕‿◕)          ║
    ╚══════════════════════╝
          `}</pre>
        </div>
      </motion.div>
    </div>
  );
}
