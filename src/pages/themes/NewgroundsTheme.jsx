import { Link } from "react-router-dom";
import { ArrowLeft, Eye, Star, ThumbsUp } from "lucide-react";
import styles from "./NewgroundsTheme.module.css";

const FEATURED_ITEMS = [
  {
    title: "Guilty Gear Strive",
    emoji: "⚔️",
    creator: "Arc System Works",
    score: "9.2",
  },
  { title: "Tekken 8", emoji: "👊", creator: "Bandai Namco", score: "8.8" },
  { title: "Street Fighter 6", emoji: "🔥", creator: "Capcom", score: "9.0" },
  {
    title: "Under Night 2",
    emoji: "🌙",
    creator: "French Bread",
    score: "8.5",
  },
];

const SIDEBAR_PICKS = [
  { label: "Hades II", category: "Game" },
  { label: "Severance", category: "Show" },
  { label: "MF DOOM", category: "Music" },
  { label: "Chainsaw Man", category: "Manga" },
  { label: "Cowboy Bebop", category: "Anime" },
];

export default function NewgroundsTheme() {
  return (
    <div className={styles.wrapper}>
      <Link to="/blog" className={styles.backLink}>
        <ArrowLeft size={16} />
        Back to blog
      </Link>

      <header className={styles.header}>
        <div className={styles.headerTop}>
          <span className={styles.logo}>FAV</span>
          <span className={styles.tagline}>Everything I'm Into Right Now</span>
        </div>
        <nav className={styles.navRow}>
          <span className={styles.navPillActive}>Games</span>
          <span className={styles.navPill}>Shows</span>
          <span className={styles.navPill}>Music</span>
          <span className={styles.navPill}>Manga</span>
          <span className={styles.navPill}>Misc</span>
        </nav>
      </header>

      <div className={styles.layout}>
        <main>
          <div className={styles.pod}>
            <div className={styles.podHeader}>
              <span className={styles.podTitle}>Currently Playing</span>
              <span className={styles.podMore}>more &raquo;</span>
            </div>
            <div className={styles.podBody}>
              <div className={styles.authorBar}>
                <div className={styles.avatar} />
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>cdakotabrown</div>
                  <div className={styles.authorDate}>Updated Feb 2025</div>
                </div>
              </div>

              <p
                style={{ color: "#ccc", lineHeight: 1.6, marginBottom: "1rem" }}
              >
                Fighting games are my thing. There's nothing like the feeling of
                labbing a combo for hours and then landing it in a real match.
                The FGC is one of the last genuine communities in gaming —
                locals, majors, money matches, all of it.
              </p>
              <p
                style={{ color: "#ccc", lineHeight: 1.6, marginBottom: "1rem" }}
              >
                Right now I'm deep in the Guilty Gear Strive rotation, but I'll
                play anything with a health bar and a round timer. Tekken 8 and
                SF6 are both in heavy rotation too.
              </p>

              <div>
                <span className={styles.tagFeatured}>Fighting Games</span>
                <span className={styles.tag}>FGC</span>
                <span className={styles.tag}>Anime Fighters</span>
                <span className={styles.tag}>Lab Time</span>
              </div>

              <div className={styles.statsRow}>
                <span className={styles.statItem}>
                  <Eye size={14} />
                  <span className={styles.statValue}>∞</span> hours
                </span>
                <span className={styles.statItem}>
                  <ThumbsUp size={14} />
                  <span className={styles.statValue}>GGs</span>
                </span>
                <span className={styles.statItem}>
                  <Star size={14} />
                  <span className={styles.statValue}>10</span> / 10
                </span>
              </div>
            </div>
          </div>

          <div className={styles.pod}>
            <div className={styles.podHeader}>
              <span className={styles.podTitle}>Fighting Game Rotation</span>
              <span className={styles.podMore}>more &raquo;</span>
            </div>
            <div className={styles.podBody}>
              <div className={styles.cardGrid}>
                {FEATURED_ITEMS.map((item) => (
                  <div key={item.title} className={styles.card}>
                    <div className={styles.cardThumb}>{item.emoji}</div>
                    <div className={styles.cardBody}>
                      <div className={styles.cardTitle}>{item.title}</div>
                      <div className={styles.cardMeta}>
                        <span>{item.creator}</span>
                        <span>{item.score}/10</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <aside>
          <div className={styles.pod}>
            <div className={styles.podHeader}>
              <span className={styles.podTitle}>Other Favorites</span>
            </div>
            <div className={styles.podBody}>
              <ul className={styles.sidebarList}>
                {SIDEBAR_PICKS.map((pick) => (
                  <li key={pick.label}>
                    {pick.label}
                    <span className={styles.sidebarCount}>{pick.category}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.pod}>
            <div className={styles.podHeader}>
              <span className={styles.podTitle}>Why Fighting Games</span>
            </div>
            <div className={styles.podBody}>
              <ul className={styles.sidebarList}>
                <li>Pure 1v1 competition</li>
                <li>No RNG, no teammates</li>
                <li>Infinite skill ceiling</li>
                <li>Best community in gaming</li>
                <li>The read is everything</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
