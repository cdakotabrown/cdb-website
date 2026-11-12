// `path` links to a subpage on this site; `href` links out; neither = no link.
// `hidden` keeps a project off the homepage (its route still works).
export const projects = [
  {
    slug: "fgc-roster",
    title: "FGC Roster",
    description:
      "Every fighting game character I play or have played seriously.",
    thumbnail: "/pictures/FGC/GGAC_Faust_Portrait.png",
    thumbnailPosition: "center 20%",
    tags: ["Fighting Games", "FGC"],
    path: "/fgc",
  },
  {
    slug: "lab-reference",
    title: "Laboratory Order Reference",
    description:
      "A spacecraft-inspired console for exploring laboratory tests and panels.",
    tags: ["Reference", "Interactive", "Laboratory"],
    path: "/lab-reference",
    hidden: true,
  },
];

export const visibleProjects = projects.filter((project) => !project.hidden);
