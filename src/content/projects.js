export const projects = [
  {
    slug: "toki-ps1",
    title: "Tokimeki Memorial: Forever With You",
    description: "PS1 decompilation of the classic 1996 Konami dating sim",
    fullDescription: `A decompilation project for Tokimeki Memorial: Forever With You, the 1996 PlayStation dating sim by Konami.

The goal is to reconstruct the original game's source code from the shipped binary, making it possible to preserve, study, and mod this classic Japanese title.`,
    thumbnail: "/images/projects/tokimeki.jpg",
    tags: ["PS1", "Decompilation", "C"],
    date: "2026-06-14",
    links: {
      github: "https://github.com/cdakotabrown/toki-ps1",
    },
  },
  {
    slug: "anime-themes",
    title: "AnimeThemes",
    description:
      "Exhaustive collaboration with friends to score anime openings",
    fullDescription: `An ongoing collaboration with friends to exhaustively score anime openings.

We work through openings together, ranking and reviewing them as a group. A labor of love for the medium and the music.`,
    tags: ["Anime", "Music", "Collaboration"],
    date: "2026-06-14",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
