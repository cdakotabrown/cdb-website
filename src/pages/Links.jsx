import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./Links.module.css";

const linkCategories = [
  {
    name: "Tools I Use",
    links: [
      {
        title: "VS Code",
        url: "https://code.visualstudio.com/",
        description: "My editor of choice",
      },
      {
        title: "Vite",
        url: "https://vitejs.dev/",
        description: "Fast frontend tooling",
      },
      {
        title: "Figma",
        url: "https://figma.com/",
        description: "Design and prototyping",
      },
    ],
  },
  {
    name: "Blogs I Read",
    links: [
      {
        title: "Dan Abramov",
        url: "https://overreacted.io/",
        description: "Deep dives into React and JavaScript",
      },
      {
        title: "Josh W Comeau",
        url: "https://www.joshwcomeau.com/",
        description: "Interactive CSS and React tutorials",
      },
      {
        title: "Kent C. Dodds",
        url: "https://kentcdodds.com/blog",
        description: "Testing and React best practices",
      },
    ],
  },
  {
    name: "Inspiration",
    links: [
      {
        title: "Awwwards",
        url: "https://www.awwwards.com/",
        description: "Web design inspiration",
      },
      {
        title: "Dribbble",
        url: "https://dribbble.com/",
        description: "Design community",
      },
      {
        title: "CodePen",
        url: "https://codepen.io/",
        description: "Frontend experiments",
      },
    ],
  },
  {
    name: "Learning",
    links: [
      {
        title: "Frontend Masters",
        url: "https://frontendmasters.com/",
        description: "In-depth courses",
      },
      {
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org/",
        description: "The web documentation",
      },
      {
        title: "web.dev",
        url: "https://web.dev/",
        description: "Modern web guidance",
      },
    ],
  },
];

export default function Links() {
  useDocumentTitle("Links");

  return (
    <div className={`container ${styles.links}`}>
      <motion.header>
        <h1>Links</h1>
        <p className="text-muted">
          A collection of sites, tools, and people I find interesting
        </p>
      </motion.header>

      <div className={styles.categories}>
        {linkCategories.map((category, i) => (
          <motion.section
            key={category.name}
            className={styles.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
          >
            <h2>{category.name}</h2>
            <ul className={styles.linkList}>
              {category.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <span className={styles.linkTitle}>
                      {link.title}
                      <ExternalLink size={12} className={styles.linkIcon} />
                    </span>
                    <span className={styles.linkDescription}>
                      {link.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
