<template>
    <header class="sticky top-0 z-40 backdrop-blur-md bg-white/70 dark:bg-ink-950/70 border-b border-ink-700/10 dark:border-ink-100/5">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
            <a href="#" class="flex items-center gap-0 text-ink-900 dark:text-ink-100 min-w-0" @click="closeMenu">
                <img
                    src="/logos/Shark Logo Itself white.svg"
                    alt="QodeShark"
                    class="h-auto object-contain flex-shrink-0 translate-y-2"
                    style="width:150px"
                    width="36"
                    height="36"
                />
                <span class="font-bold text-base sm:text-lg tracking-tight truncate -ml-10">QodeShark</span>
            </a>

            <!-- Desktop nav -->
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-ink-600 dark:text-ink-100/60">
                <a href="#features" class="hover:text-white dark:hover:text-white transition-colors">Features</a>
                <a href="#how" class="hover:text-white dark:hover:text-white transition-colors">How it works</a>
                <a href="#pricing" class="hover:text-white dark:hover:text-white transition-colors">Pricing</a>
                <a href="#faq" class="hover:text-white dark:hover:text-white transition-colors">FAQ</a>
            </nav>

            <!-- Right cluster -->
            <div class="flex items-center gap-2 sm:gap-3">
                <ThemeToggle />
                <a href="https://app.fullcodereview.com/login" class="hidden md:inline-flex text-sm font-medium text-ink-700 dark:text-ink-100/60 hover:text-white dark:hover:text-white transition-colors">
                    Sign in
                </a>
                <a href="https://app.fullcodereview.com/register" class="hidden sm:inline-flex btn-vibe text-sm py-2.5 px-5">Get started</a>

                <!-- Hamburger (mobile only) -->
                <button
                    @click="mobileMenuOpen = !mobileMenuOpen"
                    type="button"
                    class="md:hidden w-10 h-10 grid place-items-center rounded-lg border border-ink-700/10 dark:border-ink-100/10 text-ink-800 dark:text-ink-100 hover:bg-white/10 transition-colors"
                    :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
                    :aria-expanded="mobileMenuOpen"
                >
                    <svg v-if="!mobileMenuOpen" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                    <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile menu drawer -->
        <transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
        >
            <div
                v-if="mobileMenuOpen"
                class="md:hidden border-t border-ink-700/10 dark:border-ink-100/5 bg-white/95 dark:bg-ink-950/95 backdrop-blur-md"
            >
                <nav class="px-4 py-4 flex flex-col gap-1 max-w-6xl mx-auto">
                    <a v-for="link in links" :key="link.href" :href="link.href" @click="closeMenu" class="px-3 py-3 rounded-lg text-base font-medium text-ink-800 dark:text-ink-100 hover:bg-white/10 transition-colors">
                        {{ link.label }}
                    </a>
                    <div class="my-2 h-px bg-ink-700/10 dark:bg-ink-100/10"></div>
                    <a href="https://app.fullcodereview.com/login" class="px-3 py-3 rounded-lg text-base font-medium text-ink-800 dark:text-ink-100 hover:bg-white/10 transition-colors">
                        Sign in
                    </a>
                    <a href="https://app.fullcodereview.com/register" class="btn-vibe w-full justify-center mt-2">
                        Get started
                    </a>
                </nav>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue"
import ThemeToggle from "./ThemeToggle.vue"

const mobileMenuOpen = ref(false)
const closeMenu = () => (mobileMenuOpen.value = false)

const links = [
    { href: "#features", label: "Audit dimensions" },
    { href: "#how", label: "How it works" },
    { href: "#security", label: "Security" },
    { href: "#pricing", label: "Pricing" },
    { href: "#community", label: "Discord" },
    { href: "#faq", label: "FAQ" },
]

// Close on Escape, lock body scroll while open
const onKey = (e) => {
    if (e.key === "Escape") closeMenu()
}
watch(mobileMenuOpen, (open) => {
    document.body.style.overflow = open ? "hidden" : ""
})
onMounted(() => window.addEventListener("keydown", onKey))
onUnmounted(() => {
    window.removeEventListener("keydown", onKey)
    document.body.style.overflow = ""
})
</script>
