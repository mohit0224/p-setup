// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config({
    languageOptions: {
        parserOptions: {
            project: true,
            tsconfigRootDir: import.meta.dirname,
        },
    },
    files: ["**/*.ts"],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked, eslintConfigPrettier],
    rules: {
        "no-console": "error",
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        // "@typescript-eslint/no-explicit-any": "off", // turn off to Allow explicit any syntax
        "@typescript-eslint/no-unsafe-assignment": "off", // turn off to Allow explicit any syntax
        "@typescript-eslint/no-unused-vars": "off", // turn off to Allow unused variables
    },
});

