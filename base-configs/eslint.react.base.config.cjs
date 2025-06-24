const js = require("@eslint/js");
const stylistic = require("@stylistic/eslint-plugin");
const parser = require("@typescript-eslint/parser");
const perfectionist = require("eslint-plugin-perfectionist");
const prettier = require("eslint-plugin-prettier/recommended");
const react = require("eslint-plugin-react");
const reactDom = require("eslint-plugin-react-dom");
const reactHooks = require("eslint-plugin-react-hooks");
const reactRefresh = require("eslint-plugin-react-refresh");
const reactX = require("eslint-plugin-react-x");
const globals = require("globals");
const tseslint = require("typescript-eslint");

/**
 * @type {import("@eslint/config-helpers").ConfigWithExtends}
 */
const REACT_BASE_CONFIG = {
  extends: [
    [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      perfectionist.configs["recommended-natural"],
      react.configs.flat.recommended,
      react.configs.flat["jsx-runtime"],
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.recommended,
      // @ts-expect-error Пробема с импортом, TS предлагает доп. вложенность: `reactDom.default.configs.recommended`.
      reactDom.configs.recommended,
      // @ts-expect-error Пробема с импортом, TS предлагает доп. вложенность: `reactX.default.configs.recommended`.
      reactX.configs.recommended,
      // @ts-expect-error Пробема с импортом, TS предлагает доп. вложенность: `stylistic.default.configs.recommended`.
      stylistic.configs.recommended,
      prettier,
    ],
  ],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.jest,
      ...globals.node,
    },
    parser,
  },
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        format: null,
        prefix: ["T"],
        selector: "typeAlias",
      },
      {
        format: null,
        prefix: ["E"],
        selector: "enum",
      },
    ],
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "none",
        ignoreRestSiblings: true,
        vars: "local",
      },
    ],
    "func-style": [
      "error",
      "expression",
      {
        allowArrowFunctions: true,
      },
    ],
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-duplicate-imports": "error",
    "no-restricted-syntax": [
      "error",
      {
        message: "Используйте именованные экспорты.",
        selector: "ExportDefaultDeclaration",
      },
      {
        message: "Используйте только `const enum`. Обычные enum запрещены.",
        selector: "TSEnumDeclaration:not([const=true])",
      },
      {
        message: "Используйте стрелочные функции в методах.",
        selector: "MethodDefinition[kind='method']",
      },
      {
        message: "Используйте стрелочные функции.",
        selector: "Property[value.type='FunctionExpression']",
      },
      {
        message: "Замените на `event` или `error`.",
        selector: "Identifier[name='e']",
      },
    ],
    "perfectionist/sort-imports": [
      "error",
      {
        groups: [["builtin", "external"], ["internal"], ["sibling", "parent", "index"], ["unknown"]],
        internalPattern: ["^@/.+"],
        newlinesBetween: "always",
        order: "asc",
        type: "natural",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
      },
    ],
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

module.exports = { REACT_BASE_CONFIG };
