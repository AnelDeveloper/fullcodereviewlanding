/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{vue,js,ts}"],
    theme: {
        extend: {
            colors: {
                violet: {
                    500: "#8B5CF6",
                    600: "#7C3AED",
                    700: "#6D28D9",
                },
                pink: {
                    500: "#EC4899",
                    600: "#DB2777",
                },
                cyan: {
                    400: "#22D3EE",
                    500: "#06B6D4",
                },
                ink: {
                    950: "#0B0817",
                    900: "#110A24",
                    800: "#15102B",
                    700: "#211837",
                    600: "#2A1F44",
                    500: "#3B2E5A",
                    400: "#56487B",
                    300: "#9C8AC2",
                    200: "#C4B5FD",
                    100: "#EDE7F8",
                },
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
                mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
            },
            backgroundImage: {
                "vibe-gradient": "linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #06B6D4 100%)",
                "vibe-button": "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
            },
            animation: {
                "float-slow": "float 18s ease-in-out infinite",
                "float-slower": "float 24s ease-in-out infinite",
                "fade-in-up": "fadeInUp 0.7s ease-out both",
            },
            keyframes: {
                float: {
                    "0%,100%": { transform: "translate(0,0) scale(1)" },
                    "33%": { transform: "translate(40px,-30px) scale(1.05)" },
                    "66%": { transform: "translate(-30px,40px) scale(0.95)" },
                },
                fadeInUp: {
                    from: { opacity: 0, transform: "translateY(20px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
}
