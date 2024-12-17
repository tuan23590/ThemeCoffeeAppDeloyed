import { defineConfig } from "vite";
import zaloMiniApp from "zmp-vite-plugin";
import react from "@vitejs/plugin-react";
import zmp from 'zmp-vite-plugin';

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: "./src",
    base: "",
    plugins: [zaloMiniApp(), react(), zmp()],
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    build: {
      outDir: 'www',
      emptyOutDir: true,
    },
    server: {
      host: true,
    },
    theme: {
      extend: {
        colors: {
          primary: "var(--zmp-primary-color)",
          gray: "#767A7F",
          divider: "#E9EBED",
          green: "#288F4E",
          background: "#ffffff",
          skeleton: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
    plugins: [],
  });
};
