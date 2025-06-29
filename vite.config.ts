import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const config = defineConfig({
  build: {
    lib: {
      cssFileName: "sdk.css",
      entry: "./src/index.ts",
      fileName: (format) => `sdk.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: [/node_modules/],
    },
  },
  plugins: [
    react(),
    dts({
      exclude: ["./eslint.config.mjs", "./prettier.config.mjs", "./vite.config.ts", "./base-configs"],
      insertTypesEntry: true,
    }),
  ],
});

// eslint-disable-next-line no-restricted-syntax
export default config;
