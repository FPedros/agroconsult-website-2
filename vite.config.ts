import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    target: "es2020",
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor": ["react", "react-dom", "react-router-dom"],
          "icons": ["lucide-react"]
        },
        entryFileNames: "js/[name]-[hash].js",
        chunkFileNames: "js/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]"
      }
    },
    reportCompressedSize: false,
    cssCodeSplit: true,
    sourcemap: false
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "lucide-react"]
  }
});
