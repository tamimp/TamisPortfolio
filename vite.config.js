import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Output directory for the production build
  },
  base: "./", // Ensures relative paths are used, adjust if you're deploying at a sub-path
});
