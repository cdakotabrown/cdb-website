import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./KonamiCode.module.css";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export default function KonamiCode() {
  const [keySequence, setKeySequence] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const handleKeyDown = useCallback(
    (event) => {
      const newSequence = [...keySequence, event.code].slice(
        -KONAMI_CODE.length
      );
      setKeySequence(newSequence);

      if (newSequence.join(",") === KONAMI_CODE.join(",")) {
        setShowMessage(true);
        setKeySequence([]);
      }
    },
    [keySequence]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => setShowMessage(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <AnimatePresence>
      {showMessage && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowMessage(false)}
        >
          <motion.div
            className={styles.message}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <p className={styles.title}>You found me!</p>
            <p className={styles.text}>
              Thanks for visiting. You&apos;re awesome.
            </p>
            <p className={styles.hint}>Click anywhere to close</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
