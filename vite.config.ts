import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const config = defineConfig({
  build: {
    lib: {
      cssFileName: "sdk.css",
      entry: "./src/index.ts",
      fileName: (format) => `sdk.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["classnames", "react", "react-dom", "react-router-dom", "react/jsx-runtime"],
    },
  },
  plugins: [
    react(),
    dts({
      exclude: ["./eslint.config.cjs", "./prettier.config.cjs", "./vite.config.ts", "./base-configs"],
      insertTypesEntry: true,
    }),
  ],
});

// eslint-disable-next-line no-restricted-syntax
export default config;
