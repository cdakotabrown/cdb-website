import { lazy } from "react";

const themes = {
  ytmnd: lazy(() => import("./YtmndTheme")),
  newgrounds: lazy(() => import("./NewgroundsTheme")),
  retro: lazy(() => import("./RetroTheme")),
  characters: lazy(() => import("./CharacterTheme")),
};

export default themes;
