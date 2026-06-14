export const posts = [
  {
    slug: "favorites",
    title: "Favorites",
    date: "2025-02-05",
    excerpt: "Everything I'm into right now",
    theme: "newgrounds",
    fileExt: ".swf",
    permissions: "-rwxr-xr-x",
    hidden: true,
  },
  {
    slug: "readme",
    title: "README.TXT",
    date: "2025-02-10",
    excerpt: "Dakota Brown v1.0",
    theme: "retro",
    fileExt: ".bat",
    permissions: "-rwxr-xr-x",
    hidden: true,
  },
  {
    slug: "fgc-roster",
    title: "FGC Roster",
    date: "2025-02-20",
    excerpt: "Every FGC character I play",
    theme: "characters",
    fileExt: ".png",
    permissions: "-r--r--r--",
  },
];

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}
