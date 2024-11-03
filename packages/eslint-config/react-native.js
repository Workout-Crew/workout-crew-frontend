const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "turbo",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: false,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
  rules: {
    "react/no-unstable-nested-components": "off",
    "react-native/no-inline-styles": "off",
  },
};
