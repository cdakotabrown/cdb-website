import { Github, Linkedin, Mail } from "lucide-react";
import styles from "./Footer.module.css";

const socialLinks = [
  {
    href: "https://github.com/cdakotabrown",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/cdakotabrown",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:doc@cdakotabrown.com",
    icon: Mail,
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <div className={styles.social}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className={styles.socialLink}
              aria-label={link.label}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
        <p className={styles.copyright}>
          <span className="text-muted">
            &copy; {new Date().getFullYear()} Dakota Brown
          </span>
        </p>
      </div>
    </footer>
  );
}
