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
                    950: "#000000",
                    900: "#080808",
                    800: "#111111",
                    700: "#1a1a1a",
                    600: "#222222",
                    500: "#333333",
                    400: "#555555",
                    300: "#888888",
                    200: "#bbbbbb",
                    100: "#f0f0f0",
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
                "marquee": "marquee 30s linear infinite",
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
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-50%)" },
                },
            },
        },
    },
    plugins: [],
}
