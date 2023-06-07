/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    "50": "#fff1f2",
                    "100": "#ffe4e6",
                    "200": "#fecdd3",
                    "300": "#fda4af",
                    "400": "#fb7185",
                    "500": "#f43f5e",
                    "600": "#e11d48",
                    "700": "#be123c",
                    "800": "#9f1239",
                    "900": "#881337"
                }
            }
        },
    },
    variants: {
        backgroundColor: [
            "dark",
            "dark-hover",
            "dark-group-hover",
            "dark-even",
            "dark-odd"
        ],
        borderColor: ["dark", "dark-focus", "dark-focus-within"],
        textColor: ["dark", "dark-hover", "dark-active"]
    },
    plugins: [
        require('flowbite'),
        require("flowbite/plugin"),
        require('flowbite-typography')
    ],
    content: [
        // other files...
        "./node_modules/flowbite.{js,ts}",

    ],
};
