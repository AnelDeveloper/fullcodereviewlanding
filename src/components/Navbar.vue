<template>
    <header class="sticky top-0 z-40 backdrop-blur-md bg-white/70 dark:bg-ink-950/70 border-b border-ink-700/10 dark:border-ink-100/5">
        <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#" class="flex items-center gap-3 text-ink-900 dark:text-ink-100">
                <span class="brand-mark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                    </svg>
                </span>
                <span class="font-bold text-lg tracking-tight">Code Review</span>
            </a>

            <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-ink-600 dark:text-ink-200/80">
                <a href="#features" class="hover:text-violet-600 dark:hover:text-violet-300 transition-colors">Features</a>
                <a href="#how" class="hover:text-violet-600 dark:hover:text-violet-300 transition-colors">How it works</a>
                <a href="#pricing" class="hover:text-violet-600 dark:hover:text-violet-300 transition-colors">Pricing</a>
                <a href="#faq" class="hover:text-violet-600 dark:hover:text-violet-300 transition-colors">FAQ</a>
            </nav>

            <div class="flex items-center gap-3">
                <ThemeToggle />
                <a href="https://app.fullcodereview.com/login" class="hidden sm:inline-flex text-sm font-medium text-ink-700 dark:text-ink-200 hover:text-violet-600 dark:hover:text-violet-300 transition-colors">
                    Sign in
                </a>
                <a href="https://app.fullcodereview.com/register" class="btn-vibe text-sm py-2.5 px-5">Get started</a>
            </div>
        </div>
    </header>
</template>

<script setup>
import ThemeToggle from "./ThemeToggle.vue"
</script>
