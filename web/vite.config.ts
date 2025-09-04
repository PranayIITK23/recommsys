import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/feeds": "http://localhost:8787",
      "/health": "http://localhost:8787"
    }
  }
});
