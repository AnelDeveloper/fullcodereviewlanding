<template>
    <footer class="border-t border-ink-700/10 dark:border-ink-100/5 py-12 px-6">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div class="flex items-center gap-3">
                <img
                    src="/logo.png"
                    alt="Full Code Review"
                    class="w-9 h-9 rounded-[10px] object-cover shadow-md"
                    width="36"
                    height="36"
                />
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
