const { defineConfig } = require("eslint/config");

const { REACT_BASE_CONFIG } = require("./base-configs/eslint.react.base.config.cjs");

/**
 * @type {import("@eslint/config-helpers").ConfigWithExtends[]}
 */
const config = [
  {
    ignores: ["./dist", "./node_modules"],
  },
  {
    ...REACT_BASE_CONFIG,
    files: ["./**/*.{cjs,ts,tsx}"],
  },
];

module.exports = defineConfig(config);
