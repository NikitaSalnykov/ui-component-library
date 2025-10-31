import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: "dist",
      entryRoot: "src/components",
      insertTypesEntry: true,
      copyDtsFiles: true
    })
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },

  build: {
    lib: {
      entry: "src/components/index.ts",     
      name: "ui-library",
      fileName: (format) => (format === "cjs" ? "index.cjs" : "index.js"),
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "clsx"],
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  css: { postcss: "./postcss.config.js" },
});