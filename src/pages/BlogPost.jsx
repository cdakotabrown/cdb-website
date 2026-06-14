import { Suspense } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug } from "../content/posts";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import themes from "./themes";
import styles from "./BlogPost.module.css";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  useDocumentTitle(post?.title ?? "Post");

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  if (post.theme && themes[post.theme]) {
    const ThemedComponent = themes[post.theme];
    return (
      <Suspense
        fallback={
          <div className="container" style={{ padding: "4rem 0" }}>
            Loading...
          </div>
        }
      >
        <ThemedComponent />
      </Suspense>
    );
  }

  const renderContent = (content) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("**") && block.endsWith("**")) {
        return (
          <h3 key={i} className={styles.subheading}>
            {block.slice(2, -2)}
          </h3>
        );
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((line) => line.startsWith("- "));
        return (
          <ul key={i} className={styles.list}>
            {items.map((item, j) => (
              <li key={j}>{item.slice(2)}</li>
            ))}
          </ul>
        );
      }
      return <p key={i}>{block}</p>;
    });
  };

  return (
    <article className={`container ${styles.article}`}>
      <motion.div>
        <Link to="/blog" className={styles.backLink}>
          <ArrowLeft size={16} />
          Back to blog
        </Link>

        <header className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <time className={styles.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>

        <div className={styles.content}>{renderContent(post.content)}</div>
      </motion.div>
    </article>
  );
}
