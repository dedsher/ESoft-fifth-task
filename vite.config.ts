import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@assets": path.resolve("./src/assets"),
      "@components": path.resolve("./src/components"),
      "@state": path.resolve("./src/state"),
      "@pages": path.resolve("./src/pages"),
      "@hooks": path.resolve("./src/hooks"),
      '@api': path.resolve('./src/api'),
      '@muiTheme': path.resolve('./src/muiTheme'),
    },
  },
});
