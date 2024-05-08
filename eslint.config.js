import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: [ "mochawesome-report/**/*", "node_modules/**/*", ".git/", "coverage/**/*"],
  }
];