import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

// Client-side routes that should load directly on GitHub Pages.
const STATIC_ROUTES = ["lab-reference", "fgc"];

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    {
      name: "spa-static-entries",
      apply: "build",
      async closeBundle() {
        const index = resolve("dist/index.html");
        // Real entry files so subpages return 200 when opened directly.
        for (const route of STATIC_ROUTES) {
          const directory = resolve("dist", route);
          await mkdir(directory, { recursive: true });
          await copyFile(index, resolve(directory, "index.html"));
        }
        // Fallback for any other URL (old links redirect client-side).
        await copyFile(index, resolve("dist/404.html"));
      },
    },
  ],
});
