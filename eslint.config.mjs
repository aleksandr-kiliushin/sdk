import { defineConfig } from "eslint/config";

import { REACT_BASE_CONFIG } from "./base-configs/eslint.react.base.config.mjs";

/**
 * @type {import("@eslint/config-helpers").ConfigWithExtends[]}
 */
const config = [
  {
    ignores: ["./dist", "./node_modules"],
  },
  {
    ...REACT_BASE_CONFIG,
    files: ["./**/*.{mjs,ts,tsx}"],
  },
];

// eslint-disable-next-line no-restricted-syntax
export default defineConfig(config);
