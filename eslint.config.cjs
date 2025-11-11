// Flat ESLint config (works with ESLint v9+)
// Uses @typescript-eslint/parser and eslint-plugin-react. Keeps rules minimal so Next's linter can run.
module.exports = [
  // ignore folders
  { ignores: ["node_modules/**", ".next/**"] },

  // apply to JS/TS files
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      react: require("eslint-plugin-react"),
    },
    rules: {
      // keep it permissive for now; enable recommended rules incrementally
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },
];
