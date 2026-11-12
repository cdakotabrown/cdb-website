import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import KonamiCode from "../EasterEgg/KonamiCode";
import styles from "./Layout.module.css";

export default function Layout() {
  const location = useLocation();

  return (
    <div className={styles.layout}>
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className={styles.main}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <KonamiCode />
    </div>
  );
}
