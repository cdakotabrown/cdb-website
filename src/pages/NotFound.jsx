import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./NotFound.module.css";

export default function NotFound() {
  useDocumentTitle("Not found");

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <Link to="/" aria-label="Go home">
          <img
            src="/favicons/android-chrome-512x512.png"
            alt=""
            className={styles.hat}
          />
        </Link>
        <h1 className={styles.title}>404: missed the reaction check.</h1>
        <p className={styles.hint}>
          Nothing here. Click the hat to tech back home.
        </p>
      </div>
    </main>
  );
}
