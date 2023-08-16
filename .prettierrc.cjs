/** @type {import("@types/prettier").Options} */
module.exports = {
    printWidth: 120,
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    useTabs: true,
 plugins: [
        require("prettier-plugin-astro"),
        require("prettier-plugin-tailwindcss") /* Должен быть последним в списке */,
    ],
    pluginSearchDirs: false,
    overrides: [
        {
            files: "**/*astro",
            options: {
                parser: "astro",
            },
        },
    ],
}
