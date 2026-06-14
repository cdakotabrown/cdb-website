import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "coverage/**",
      "public/**",
      ".github/**",
    ],
  },
  js.configs.recommended,
  react.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // React 17+ new JSX transform — no need to import React
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      // Not using prop-types
      "react/prop-types": "off",
      // react-hooks rules (manually inlined; the plugin's recommended config
      // ships in legacy eslintrc format and isn't flat-config compatible)
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/static-components": "error",
      // HMR safety: only export components from .jsx files
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // Treat unused vars as warnings (errors are noisy during refactors)
      "no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // Allow empty {} destructuring in catch
      "no-empty": ["error", { allowEmptyCatch: true }],
    },
  },
  {
    files: ["**/*.test.{js,jsx}", "src/setupTests.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
        vi: "readonly",
        vitest: "readonly",
      },
    },
  },
  // Must be last — turns off ESLint rules that conflict with Prettier
  prettier,
];
