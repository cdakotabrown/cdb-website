import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import styles from "./CharacterTheme.module.css";

const characters = [
  {
    game: "BBTAG",
    name: "Yang",
    image: "/pictures/FGC/BBTag_Yang_Xiao_Long_Portrait.png",
    alt: "Yang",
  },
  {
    game: "BBTAG",
    name: "Akatsuki",
    image: "/pictures/FGC/BBTag_Teddie_Portrait.png",
    alt: "Teddie",
  },
  {
    game: "BlazBlue",
    name: "Jin",
    image: "/pictures/FGC/BBCF_Jin_Portrait.png",
    alt: "Jin",
  },
  {
    game: "BlazBlue",
    name: "Kagura",
    image: "/pictures/FGC/BBCF_Kagura_Portrait.png",
    alt: "Kagura",
  },
  {
    game: "DNF Duel",
    name: "Troubleshooter",
    image: "/pictures/FGC/DNFD_Troubleshooter_Portrait.png",
    alt: "Troubleshooter",
  },
  {
    game: "Dead or Alive",
    name: "Tina",
    image: "/pictures/FGC/tina.png",
    alt: "Tina",
  },
  {
    game: "GG +R",
    name: "Faust",
    image: "/pictures/FGC/GGAC_Faust_Portrait.png",
    alt: "Faust +R",
  },
  {
    game: "GG Xrd",
    name: "Faust",
    image: "/pictures/FGC/GGXRD-R_Faust_Portrait.png",
    alt: "Faust Xrd",
  },
  {
    game: "GG Strive",
    name: "Leo",
    image: "/pictures/FGC/GGST_Leo_Whitefang_Portrait.png",
    alt: "Leo",
  },
  {
    game: "GG Strive",
    name: "Faust",
    image: "/pictures/FGC/GGST_Faust_Portrait.png",
    alt: "Faust Strive",
  },
  {
    game: "Granblue",
    name: "Percival",
    image: "/pictures/FGC/GBVS_Percival_Portrait.png",
    alt: "Percival",
  },
  {
    game: "Killer Instinct",
    name: "Omen",
    image: "/pictures/FGC/omen.png",
    alt: "Omen",
  },
  {
    game: "KOF 15",
    name: "Meitenkun",
    image: "/pictures/FGC/KOFXV_Meitenkun_Profile.png",
    alt: "Meitenkun",
  },
  {
    game: "KOF 15",
    name: "Gato",
    image: "/pictures/FGC/KOFXV_Gato_Profile.png",
    alt: "Gato",
  },
  {
    game: "KOF 15",
    name: "Ash",
    image: "/pictures/FGC/KOFXV_Ash_Profile.png",
    alt: "Ash",
  },
  {
    game: "MVC2",
    name: "Cable",
    image: "/pictures/FGC/MVC2_cable_art.png",
    alt: "Cable",
  },
  {
    game: "MVC2",
    name: "Sentinel",
    image: "/pictures/FGC/MVC2_sentinel_art.png",
    alt: "Sentinel",
  },
  {
    game: "MVC2",
    name: "Captain Commando",
    image: "/pictures/FGC/MVC2_captaincommando_art.png",
    alt: "Captain Commando",
  },
  {
    game: "MVC3",
    name: "Deadpool",
    image: "/pictures/FGC/UMVC3_Deadpool_Portrait.png",
    alt: "Deadpool",
  },
  {
    game: "MVC3",
    name: "Dante",
    image: "/pictures/FGC/UMVC3_Dante_Portrait.png",
    alt: "Dante",
  },
  {
    game: "MVC3",
    name: "Vergil",
    image: "/pictures/FGC/UMVC3_Vergil_Portrait.png",
    alt: "Vergil",
  },
  {
    game: "Melty Blood MBAACC",
    name: "H. Kouhaku",
    image: "/pictures/FGC/Kohaku_Color01.png",
    alt: "Kohaku",
  },
  {
    game: "Melty Blood TL",
    name: "Vlov",
    image: "/pictures/FGC/MBTL_Vlov_Art.png",
    alt: "Vlov",
  },
  {
    game: "Melty Blood TL",
    name: "Mash",
    image: "/pictures/FGC/MBTL_Mash_Art.png",
    alt: "Mash",
  },
  {
    game: "Mortal Kombat",
    name: "Baraka",
    image: "/pictures/FGC/Mk1_baraka_portrait.png",
    alt: "Baraka",
  },
  {
    game: "Mortal Kombat",
    name: "Scorpion",
    image: "/pictures/FGC/MK1_Scorpion_portrait.png",
    alt: "Scorpion",
  },
  {
    game: "P4A",
    name: "Teddy",
    image: "/pictures/FGC/P4U_Teddie_Portrait.png",
    alt: "Teddy",
  },
  {
    game: "Samurai Shodown",
    name: "Hibiki",
    image: "/pictures/FGC/SS_Hibiki_Profile.png",
    alt: "Hibiki",
  },
  {
    game: "Samurai Shodown",
    name: "Tam Tam",
    image: "/pictures/FGC/SamSho_TamTam_Profile.png",
    alt: "Tam Tam",
  },
  {
    game: "Skullgirls",
    name: "Cerebella",
    image: "/pictures/FGC/SG_cer.png",
    alt: "Cerebella",
  },
  {
    game: "Skullgirls",
    name: "Filia",
    image: "/pictures/FGC/SG_fil.png",
    alt: "Filia",
  },
  {
    game: "Smash Melee",
    name: "C. Falcon",
    image: "/pictures/FGC/Captain_Falcon_SSBM.png",
    alt: "Captain Falcon",
  },
  {
    game: "Smash Ultimate",
    name: "Chrom",
    image: "/pictures/FGC/Chrom_SSBU.png",
    alt: "Chrom",
  },
  {
    game: "Soulcalibur",
    name: "Siegfried",
    image: "/pictures/FGC/SCVI_Siegfried.png",
    alt: "Siegfried",
  },
  {
    game: "SF3",
    name: "Ibuki",
    image: "/pictures/FGC/3S_Ibuki_Art.png",
    alt: "Ibuki",
  },
  {
    game: "SF4",
    name: "Poison",
    image: "/pictures/FGC/SSFIV-Poison_Face.png",
    alt: "Poison",
  },
  {
    game: "SF4",
    name: "Zangief",
    image: "/pictures/FGC/SSFIV-Zangief_Face.png",
    alt: "Zangief",
  },
  {
    game: "SF5",
    name: "Poison",
    image: "/pictures/FGC/SFV-Poison_Portrait.png",
    alt: "Poison",
  },
  {
    game: "SF5",
    name: "Birdie",
    image: "/pictures/FGC/SFV-Birdie_Portrait.png",
    alt: "Birdie",
  },
  {
    game: "SF6",
    name: "Guile",
    image: "/pictures/FGC/SF6_Guile_Portrait.png",
    alt: "Guile",
  },
  {
    game: "SF6",
    name: "E. Honda",
    image: "/pictures/FGC/SF6_Ehonda_Portrait.png",
    alt: "E. Honda",
  },
  {
    game: "SF6",
    name: "Lily",
    image: "/pictures/FGC/SF6_Lily_Portrait.png",
    alt: "Lily",
  },
  {
    game: "Tekken 7",
    name: "Miguel",
    image: "/pictures/FGC/Miguel_Rojo-Render.png",
    alt: "Miguel T7",
  },
  {
    game: "Tekken 7",
    name: "Paul",
    image: "/pictures/FGC/Paul_Phoenixt7.png",
    alt: "Paul T7",
  },
  {
    game: "Tekken 8",
    name: "Paul",
    image: "/pictures/FGC/Paul_Phoenix_T8.png",
    alt: "Paul T8",
  },
  {
    game: "Tough Love Arena",
    name: "Noodle",
    image: "/pictures/FGC/TLA_Noodle_color1.png",
    alt: "Noodle",
  },
  {
    game: "Touhou 12.3",
    name: "Iku",
    image: "/pictures/FGC/Swr-portrait-iku.png",
    alt: "Iku",
  },
  {
    game: "Touhou 12.3",
    name: "Komachi",
    image: "/pictures/FGC/Swr-portrait-komachi.png",
    alt: "Komachi",
  },
  {
    game: "Touhou 12.3",
    name: "Utsuho",
    image: "/pictures/FGC/Soku-portrait-utsuho.png",
    alt: "Utsuho",
  },
  {
    game: "Under Night",
    name: "Gordeau",
    image: "/pictures/FGC/Uni2_profile_Gordeau.png",
    alt: "Gordeau",
  },
  {
    game: "Under Night",
    name: "Uzuki",
    image: "/pictures/FGC/Uni2_profile_Uzuki.png",
    alt: "Uzuki",
  },
  {
    game: "Vampire Savior",
    name: "Hsien-Ko",
    image: "/pictures/FGC/VSAV_Lei-Lei_Art.png",
    alt: "Hsien-ko",
  },
];

// Vibrant palette. Each game gets a deterministic color from this.
const palette = [
  "#ff4d6d", // coral pink
  "#ff8c42", // tangerine
  "#ffba08", // gold
  "#06d6a0", // mint
  "#118ab2", // teal
  "#4361ee", // blue
  "#7209b7", // purple
  "#c9184a", // berry
  "#3a0ca3", // indigo
  "#f72585", // hot pink
  "#f3722c", // orange-red
  "#2ec4b6", // cyan
];

const colorIndex = (game) => {
  let hash = 0;
  for (let i = 0; i < game.length; i++) {
    hash = game.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % palette.length;
};

const gameColor = (game) => palette[colorIndex(game)];

// Compute team size per game.
const teamSize = characters.reduce((acc, c) => {
  acc[c.game] = (acc[c.game] || 0) + 1;
  return acc;
}, {});

const wikiLinks = [
  "https://www.dustloop.com/w/BBTag/Yang_Xiao_Long",
  "https://www.dustloop.com/w/BBCF/Jin_Kisaragi",
  "https://www.dustloop.com/w/DNFD/Troubleshooter",
  "https://www.dustloop.com/w/GGACR/Faust",
  "https://www.dustloop.com/w/GGST/Leo_Whitefang",
  "https://www.dustloop.com/w/GBVS/Percival",
  "https://www.dreamcancel.com/wiki/The_King_of_Fighters_XV/Meitenkun",
  "https://www.dreamcancel.com/wiki/The_King_of_Fighters_XV/Ash_Crimson",
  "https://wiki.supercombo.gg/w/Marvel_vs_Capcom_2/Sentinel",
  "https://wiki.supercombo.gg/w/UMVC3/Deadpool",
  "https://wiki.supercombo.gg/w/UMVC3/Vergil",
  "https://wiki.gbl.gg/w/Melty_Blood/MBTL/Vlov_Arkhangel",
  "https://wiki.supercombo.gg/w/Mortal_Kombat_1/Baraka",
  "https://www.dustloop.com/w/P4U2R/Teddie",
  "https://wiki.gbl.gg/w/Samurai_Shodown/Tam_Tam",
  "https://wiki.gbl.gg/w/Skullgirls/Filia",
  "https://www.ssbwiki.com/Chrom_(SSBU)",
  "https://wiki.supercombo.gg/w/Street_Fighter_3:_3rd_Strike/Ibuki",
  "https://wiki.supercombo.gg/w/Ultra_Street_Fighter_IV/Zangief",
  "https://wiki.supercombo.gg/w/Street_Fighter_V/Birdie",
  "https://wiki.supercombo.gg/w/Street_Fighter_6/E.Honda",
  "https://wavu.wiki/t/Miguel",
  "https://wavu.wiki/t/Paul",
  "https://hisouten.koumakan.jp/wiki/Iku_Nagae",
  "https://hisouten.koumakan.jp/wiki/Utsuho_Reiuji",
  "https://wiki.gbl.gg/w/Under_Night_In-Birth/UNI2/Uzuki",
  "https://www.dustloop.com/w/BBTag/Teddie",
  "https://www.dustloop.com/w/BBCF/Kagura_Mutsuki",
  "https://deadoralive.fandom.com/wiki/Tina",
  "https://www.dustloop.com/w/GGXRD-R2/Faust",
  "https://www.dustloop.com/w/GGST/Faust",
  "https://ki.infil.net/omen.html",
  "https://www.dreamcancel.com/wiki/The_King_of_Fighters_XV/Gato",
  "https://wiki.supercombo.gg/w/Marvel_vs_Capcom_2/Cable",
  "https://wiki.supercombo.gg/w/Marvel_vs_Capcom_2/Captain_Commando",
  "https://wiki.supercombo.gg/w/UMVC3/Dante",
  "https://wiki.gbl.gg/w/Melty_Blood/MBAACC/Kohaku/Half_Moon",
  "https://wiki.gbl.gg/w/Melty_Blood/MBTL/Mash_Kyrielight",
  "https://wiki.supercombo.gg/w/Mortal_Kombat_1/Scorpion",
  "https://wiki.gbl.gg/w/Samurai_Shodown/Hibiki_Takane",
  "https://wiki.gbl.gg/w/Skullgirls/Cerebella",
  "https://www.ssbwiki.com/Captain_Falcon_(SSBM)",
  "https://wiki.supercombo.gg/w/Soulcalibur_VI/Siegfried",
  "https://wiki.supercombo.gg/w/Ultra_Street_Fighter_IV/Poison",
  "https://wiki.supercombo.gg/w/Street_Fighter_V/Poison",
  "https://wiki.supercombo.gg/w/Street_Fighter_6/Guile",
  "https://wiki.supercombo.gg/w/Street_Fighter_6/Lily",
  "https://wavu.wiki/t/Paul_(Tekken_7)",
  "https://wiki.gbl.gg/w/Tough_Love_Arena/Noodle",
  "https://hisouten.koumakan.jp/wiki/Komachi_Onozuka",
  "https://wiki.gbl.gg/w/Under_Night_In-Birth/UNI2/Gordeau",
  "https://wiki.gbl.gg/w/Vampire_Savior/Lei-Lei",
];

export default function CharacterTheme() {
  return (
    <div className={styles.wrapper}>
      <Link to="/blog" className={styles.backLink}>
        <ArrowLeft size={16} />
        Back to blog
      </Link>

      <header className={styles.header}>
        <h1 className={styles.title}>FGC Roster</h1>
        <p className={styles.subtitle}>
          Every fighting game character I play or have played seriously.
        </p>
      </header>

      <div className={styles.grid}>
        {characters.map((char) => {
          const color = gameColor(char.game);
          const size = teamSize[char.game];
          return (
            <div
              key={char.game + "::" + char.name}
              className={styles.card}
              style={{ "--team-color": color }}
            >
              <div
                className={styles.cardHeader}
                style={{ backgroundColor: color }}
              >
                <span className={styles.gameName}>{char.game}</span>
                {size > 1 && (
                  <span
                    className={styles.teamSize}
                    title={`${size} characters from ${char.game}`}
                  >
                    ×{size}
                  </span>
                )}
              </div>
              <div className={styles.imageWrap}>
                <img
                  src={char.image}
                  alt={char.alt}
                  className={styles.portrait}
                  loading="lazy"
                />
              </div>
              <div className={styles.label}>{char.name}</div>
            </div>
          );
        })}
      </div>

      <section className={styles.wikiSection}>
        <h2 className={styles.wikiTitle}>Resources &amp; Wikis</h2>
        <ul className={styles.wikiList}>
          {wikiLinks.map((url) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.wikiLink}
              >
                {url}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
