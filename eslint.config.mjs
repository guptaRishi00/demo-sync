import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),

    // Custom rules
    {
        rules: {
            "@typescript-eslint/no-explicit-any": "off", // allow 'any'
            "no-unused-vars": "off", // disable unused variables check
            "unused-imports/no-unused-imports": "off", // (if using eslint-plugin-unused-imports)
        },
    },
];

export default eslintConfig;
