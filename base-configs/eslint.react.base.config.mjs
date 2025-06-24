import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import parser from "@typescript-eslint/parser";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import reactDom from "eslint-plugin-react-dom";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactX from "eslint-plugin-react-x";
import globals from "globals";
import tseslint from "typescript-eslint";

/**
 * @type {any}
 */
const tsEslintRecommended = tseslint.configs.recommended;

/**
 * @type {import("@eslint/config-helpers").ConfigWithExtends}
 */
export const REACT_BASE_CONFIG = {
  extends: [
    [
      tsEslintRecommended,
      js.configs.recommended,
      perfectionist.configs["recommended-natural"],
      react.configs.flat.recommended,
      react.configs.flat["jsx-runtime"],
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.recommended,
      reactDom.configs.recommended,
      reactX.configs.recommended,
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
