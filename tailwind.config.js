/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: "'Roboto', 'sans-serif'",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    // ".bg-primary": {
                    //     "background-color": "white",
                    // },
                    // ".text-base-100": {
                    //     color: "black",
                    // },
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    // ".bg-primary": {
                    //     "background-color": "#111827",
                    // },
                    // ".text-base-100": {
                    //     color: "white",
                    // },
                },
            },
        ],
    },
}
