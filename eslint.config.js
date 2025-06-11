// eslint.config.js
import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";

export default [
  { ignores: ["**/*.js", "**/*.mjs", "**/*.d.ts", "**/*.js.map"] },
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: parserTs,
      parserOptions: { ecmaVersion: "latest", sourceType: "module", project: "./tsconfig.json" },
    },
    plugins: { "@typescript-eslint": eslintPluginTs },
  },
];
