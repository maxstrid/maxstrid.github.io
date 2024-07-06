/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.html", "./src/**/*.js"],
    theme: {
        extend: {
            colors: {
                accent: '#B8BB26',
            },
            fontFamily: {
                'work-sans': ['Work Sans'],
            },
            keyframes: {
                blink: {
                    "0%": { opacity: "0.0" },
                },
            },
            animation: {
                blink: 'blink 1s infinite steps(2)'
            }
        },
    },
    plugins: [],
}

