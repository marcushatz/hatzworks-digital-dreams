import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD
import { componentTagger } from "lovable-tagger";
=======
>>>>>>> 50a0f1b (Adding my new updates)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
<<<<<<< HEAD
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
=======
  plugins: [react()].filter(Boolean),
>>>>>>> 50a0f1b (Adding my new updates)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
