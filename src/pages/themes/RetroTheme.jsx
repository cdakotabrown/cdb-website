import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import styles from "./RetroTheme.module.css";

export default function RetroTheme() {
  return (
    <div className={styles.wrapper}>
      <Link to="/blog" className={styles.backLink}>
        <ArrowLeft size={12} />
        [back]
      </Link>

      <div className={styles.window}>
        <div className={styles.titleBar}>
          <span className={styles.titleText}>README.TXT - Notepad</span>
          <div className={styles.titleButtons}>
            <span className={styles.titleBtn}>_</span>
            <span className={styles.titleBtn}>☐</span>
            <span className={styles.titleBtn}>×</span>
          </div>
        </div>

        <div className={styles.menuBar}>
          <span className={styles.menuItem}>File</span>
          <span className={styles.menuItem}>Edit</span>
          <span className={styles.menuItem}>Search</span>
          <span className={styles.menuItem}>Help</span>
        </div>

        <div className={styles.windowBody}>
          <div className={styles.scanlines} />
          <div className={styles.bodyContent}>
            <h1 className={styles.pixelTitle}>DAKOTA BROWN v1.0</h1>

            <hr className={styles.divider} />

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>General Information</h2>
              <p className={styles.paragraph}>Name: Dakota Brown</p>
              <p className={styles.paragraph}>
                Title: Senior Software Engineer
              </p>
              <p className={styles.paragraph}>Company: Walmart</p>
              <p className={styles.paragraph}>
                Type: Full Stack Developer (AI-heavy)
              </p>
              <p className={styles.paragraph}>
                Status: Shipping code and lowering my golf handicap
              </p>
            </div>

            <hr className={styles.divider} />

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>System Requirements</h2>
              <ul className={styles.retroList}>
                <li>JavaScript / TypeScript</li>
                <li>React / Next.js</li>
                <li>Node.js / Express</li>
                <li>Python</li>
                <li>Go</li>
                <li>SQL / PostgreSQL / Redis</li>
                <li>Docker / AWS / Linux</li>
                <li>AI tooling and integration</li>
              </ul>
            </div>

            <hr className={styles.divider} />

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Known Features</h2>
              <ul className={styles.retroList}>
                <li>Loves fighting games (GG Strive, Tekken, SF6)</li>
                <li>Believes in long lunches</li>
                <li>Builds things for the web</li>
                <li>Heavily uses AI in development workflow</li>
                <li>
                  Believes the best code is the code you didn&apos;t write
                </li>
              </ul>
            </div>

            <hr className={styles.divider} />

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Contact Information</h2>
              <p className={styles.paragraph}>Email: doc@cdakotabrown.com</p>
              <p className={styles.paragraph}>
                LinkedIn: linkedin.com/in/cdakotabrown
              </p>
              <p className={styles.paragraph}>
                GitHub: github.com/cdakotabrown
              </p>
              <p className={styles.paragraph}>Web: cdakotabrown.com</p>
            </div>

            <hr className={styles.divider} />

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>License</h2>
              <p className={styles.paragraph}>
                This human is provided &quot;as is&quot; without warranty of any
                kind. Use at your own risk. Not responsible for hot takes
                delivered before morning coffee.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.statusBar}>
          <span className={styles.statusSection}>Ready</span>
          <span className={styles.statusSection}>Ln 1, Col 1</span>
        </div>
      </div>

      <div className={styles.visitorCounter}>
        You are visitor number
        <div className={styles.counterBox}>000,847</div>
      </div>

      <p className={styles.netscapeNotice}>
        Best viewed in Netscape Navigator 4.0 at 800x600
      </p>
    </div>
  );
}
