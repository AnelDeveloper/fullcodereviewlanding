import { ref, watch } from "vue"

const STORAGE_KEY = "codereview-theme"
const theme = ref(getInitial())

function getInitial() {
    return "dark"
}

function apply(mode) {
    const root = document.documentElement
    root.classList.toggle("dark", mode === "dark")
    const meta = document.getElementById("theme-color-meta")
    if (meta) meta.setAttribute("content", mode === "dark" ? "#000000" : "#FAFAFF")
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
