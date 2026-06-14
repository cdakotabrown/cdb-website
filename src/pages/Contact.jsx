import { motion } from "motion/react";
import { Mail, Github, Linkedin } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./Contact.module.css";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "doc@cdakotabrown.com",
    href: "mailto:doc@cdakotabrown.com",
    description: "Best way to reach me for professional inquiries",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "cdakotabrown",
    href: "https://github.com/cdakotabrown",
    description: "Check out my open source work",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "cdakotabrown",
    href: "https://linkedin.com/in/cdakotabrown",
    description: "Connect with me professionally",
  },
];

export default function Contact() {
  useDocumentTitle("Contact");

  return (
    <div className={`container ${styles.contact}`}>
      <motion.header>
        <h1>Contact</h1>
        <p className="text-muted">
          Want to get in touch? Here&apos;s how you can reach me.
        </p>
      </motion.header>

      <motion.div
        className={styles.terminal}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <div className={styles.terminalHeader}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>

        <div className={styles.terminalContent}>
          <p className={styles.command}>
            <span className={styles.prompt}>$</span> cat contact.txt
          </p>

          <div className={styles.methods}>
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  method.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className={styles.method}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className={styles.methodIcon}>
                  <method.icon size={20} />
                </div>
                <div className={styles.methodInfo}>
                  <span className={styles.methodLabel}>{method.label}</span>
                  <span className={styles.methodValue}>{method.value}</span>
                  <span className={styles.methodDescription}>
                    {method.description}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.p
            className={styles.command}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className={styles.prompt}>$</span>
            <span className={styles.cursor}>_</span>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
