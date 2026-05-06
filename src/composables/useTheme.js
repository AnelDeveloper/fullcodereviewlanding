import { ref, watch } from "vue"

const STORAGE_KEY = "codereview-theme"
const theme = ref(getInitial())

function getInitial() {
    if (typeof window === "undefined") return "dark"
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === "light" || stored === "dark") return stored
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function apply(mode) {
    const root = document.documentElement
    root.classList.toggle("dark", mode === "dark")
    const meta = document.getElementById("theme-color-meta")
    if (meta) meta.setAttribute("content", mode === "dark" ? "#0B0817" : "#FAFAFF")
}

watch(theme, (val) => {
    localStorage.setItem(STORAGE_KEY, val)
    apply(val)
}, { immediate: false })

export function initTheme() {
    apply(theme.value)
}

export function useTheme() {
    return {
        theme,
        toggle: () => { theme.value = theme.value === "dark" ? "light" : "dark" },
    }
}
