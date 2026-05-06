<template>
    <footer class="border-t border-ink-700/10 dark:border-ink-100/5 py-12 px-6">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div class="flex items-center gap-3">
                <span class="brand-mark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                    </svg>
                </span>
                <div>
                    <div class="font-bold text-ink-900 dark:text-ink-100">Full Code Review</div>
                    <div class="text-xs text-ink-500 dark:text-ink-300/70">Helping vibe coders ship secure, proven apps.</div>
                </div>
            </div>

            <nav class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-600 dark:text-ink-200/80">
                <a href="#features" class="hover:text-violet-600 dark:hover:text-violet-300">Features</a>
                <a href="#pricing" class="hover:text-violet-600 dark:hover:text-violet-300">Pricing</a>
                <a href="#faq" class="hover:text-violet-600 dark:hover:text-violet-300">FAQ</a>
                <a href="https://app.fullcodereview.com/login" class="hover:text-violet-600 dark:hover:text-violet-300">Sign in</a>
            </nav>

            <div class="text-xs text-ink-500 dark:text-ink-300/70">
                © {{ year }} Code Review · All rights reserved
            </div>
        </div>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
