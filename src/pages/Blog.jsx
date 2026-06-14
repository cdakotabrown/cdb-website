import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { posts } from "../content/posts";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./Blog.module.css";

export default function Blog() {
  useDocumentTitle("Blog");

  return (
    <div className="container">
      <motion.div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          <span className={styles.prompt}>~/blog $</span> ls -la
        </div>

        <div className={styles.fileList}>
          <div className={styles.fileHeader}>
            <span className={styles.permissions}>permissions</span>
            <span className={styles.fileName}>file</span>
            <span className={styles.fileDate}>date</span>
          </div>

          {posts
            .filter((post) => !post.hidden)
            .map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className={styles.fileRow}>
                  <span className={styles.permissions}>
                    {post.permissions || "-rw-r--r--"}
                  </span>
                  <span className={styles.fileName}>
                    {post.slug}
                    {post.fileExt || ".md"}
                  </span>
                  <span className={styles.fileDate}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </span>
                </Link>
              </motion.div>
            ))}
        </div>

        <motion.div
          className={styles.terminalFooter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className={styles.prompt}>~/blog $</span>
          <span className={styles.cursor}>_</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
