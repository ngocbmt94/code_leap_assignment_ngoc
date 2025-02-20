/// <reference types="vitest" />
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    globals: true, // Allows the use of Jest-like globals like describe, it, and expect
    environment: "jsdom", // Sets the test environment to jsdom
    setupFiles: "./src/setupTests.ts", // Make sure the path is correct
  },
});
