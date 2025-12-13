import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "module" },
    env: {
      node: true, // This will define `process` and other globals available in Node.js
      browser: true, // Optional: Include this if your code is also meant to run in a browser environment
    },
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
];
