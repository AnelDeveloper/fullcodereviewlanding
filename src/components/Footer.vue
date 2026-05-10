<template>
    <footer class="border-t border-ink-700/10 dark:border-ink-100/5 py-12 px-6">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div class="flex items-center gap-3">
                <img
                    src="/logo.png"
                    alt="Qodeshark"
                    class="w-9 h-9 rounded-[10px] object-cover shadow-md"
                    width="36"
                    height="36"
                />
                <div>
                    <div class="font-bold text-ink-900 dark:text-ink-100">Qodeshark</div>
                    <div class="text-xs text-ink-500 dark:text-ink-300/70">Helping vibe coders ship secure, proven apps.</div>
                </div>
            </div>

            <nav class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-600 dark:text-ink-200/80">
                <a href="#features" class="hover:text-violet-600 dark:hover:text-violet-300">Features</a>
                <a href="#pricing" class="hover:text-violet-600 dark:hover:text-violet-300">Pricing</a>
                <a href="#community" class="hover:text-violet-600 dark:hover:text-violet-300">Discord</a>
                <a href="#faq" class="hover:text-violet-600 dark:hover:text-violet-300">FAQ</a>
                <a href="https://app.qodeshark.com/login" class="hover:text-violet-600 dark:hover:text-violet-300">Sign in</a>
            </nav>

            <!-- Social icons -->
            <div class="flex items-center gap-2">
                <a
                    href="https://discord.gg/VHbdPqEV"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Discord"
                    class="w-9 h-9 grid place-items-center rounded-lg border border-ink-700/10 dark:border-ink-100/10 text-ink-600 dark:text-ink-200/80 hover:text-[#5865F2] hover:border-[#5865F2]/40 transition-colors"
                >
                    <svg width="16" height="16" viewBox="0 0 71 55" fill="currentColor"><path d="M60.105 4.898A58.55 58.55 0 0 0 45.653.415a.226.226 0 0 0-.24.113 40.793 40.793 0 0 0-1.804 3.708c-5.456-.819-10.886-.819-16.255 0-.487-1.103-1.092-2.387-1.808-3.708a.232.232 0 0 0-.24-.113 58.392 58.392 0 0 0-14.451 4.483.21.21 0 0 0-.097.085C1.578 18.73-.943 32.144.293 45.39a.246.246 0 0 0 .093.167c6.073 4.46 11.955 7.167 17.729 8.962a.226.226 0 0 0 .246-.082 42.1 42.1 0 0 0 3.628-5.902.227.227 0 0 0-.124-.317 38.633 38.633 0 0 1-5.518-2.63.229.229 0 0 1-.022-.378c.371-.279.741-.567 1.094-.86a.219.219 0 0 1 .228-.03c11.572 5.281 24.1 5.281 35.539 0a.219.219 0 0 1 .232.027c.353.293.724.583 1.098.862a.229.229 0 0 1-.02.378 36.282 36.282 0 0 1-5.521 2.628.229.229 0 0 0-.121.319 47.281 47.281 0 0 0 3.624 5.9.225.225 0 0 0 .246.084c5.802-1.795 11.684-4.502 17.757-8.962a.231.231 0 0 0 .093-.165c1.479-15.314-2.476-28.617-10.485-40.408a.183.183 0 0 0-.094-.085Zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.382 7.156Zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156Z"/></svg>
                </a>
                <a
                    href="https://www.instagram.com/fullcodereview"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    class="w-9 h-9 grid place-items-center rounded-lg border border-ink-700/10 dark:border-ink-100/10 text-ink-600 dark:text-ink-200/80 hover:text-[#E1306C] hover:border-[#E1306C]/40 transition-colors"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a
                    href="https://github.com/AnelDeveloper"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    class="w-9 h-9 grid place-items-center rounded-lg border border-ink-700/10 dark:border-ink-100/10 text-ink-600 dark:text-ink-200/80 hover:text-ink-900 dark:hover:text-ink-100 hover:border-ink-700/30 dark:hover:border-ink-100/30 transition-colors"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8 0 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.7-5.5 6 .5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>
                </a>
            </div>

            <div class="text-xs text-ink-500 dark:text-ink-300/70">
                © {{ year }} Qodeshark · All rights reserved
            </div>
        </div>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
