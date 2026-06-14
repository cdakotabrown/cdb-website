import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import styles from "./YtmndTheme.module.css";

export default function YtmndTheme() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tiledBg} />

      <Link to="/blog" className={styles.backLink}>
        <ArrowLeft size={16} />
        Back
      </Link>

      <div className={styles.hero}>
        <h1 className={styles.title}>HOT TAKES</h1>
        <p className={styles.subtitle}>You have been warned</p>
      </div>

      <div className={styles.marqueeTrack}>
        <span className={styles.marqueeText}>
          ★ STRONGLY HELD ★ LOOSELY DEFENDED ★ STRONGLY HELD ★ LOOSELY DEFENDED
          ★ STRONGLY HELD ★ LOOSELY DEFENDED ★
        </span>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>The Code</h2>
          <ul className={styles.neonList}>
            <li>Tailwind is inline styles with extra steps</li>
            <li>Most microservices should be a monolith</li>
            <li>
              If your PR is over 500 lines nobody is actually reviewing it
            </li>
            <li>TypeScript is just documentation that compiles</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>The Tools</h2>
          <ul className={styles.neonList}>
            <li>Vim keybindings are a personality trait not a tool</li>
            <li>Docker on Mac is a tax on your battery</li>
            <li>
              The best CI/CD pipeline is the one nobody has to think about
            </li>
            <li>Most Jira boards are just guilt with a GUI</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>The Industry</h2>
          <ul className={styles.neonList}>
            <li>
              AI will not replace developers but developers using AI will
              replace developers not using AI
            </li>
            <li>Senior engineer means you know what not to build</li>
            <li>The best code is the code you didn&apos;t write</li>
            <li>
              Meetings that could have been an email could have also been
              nothing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
