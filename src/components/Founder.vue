<template>
    <section class="py-20 px-6">
        <div class="max-w-4xl mx-auto">
            <div class="glass p-8 md:p-12 relative overflow-hidden">
                <!-- Soft accent -->
                <div class="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] opacity-30" style="background:#8B5CF6"></div>
                <div class="absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-[80px] opacity-20" style="background:#EC4899"></div>

                <div class="relative grid md:grid-cols-[auto,1fr] gap-8 items-start">
                    <!-- Avatar -->
                    <div class="flex md:block items-center gap-4">
                        <div
                            class="w-24 h-24 md:w-28 md:h-28 rounded-2xl grid place-items-center text-white text-3xl md:text-4xl font-extrabold shadow-2xl flex-shrink-0"
                            style="background:linear-gradient(135deg,#8B5CF6 0%,#EC4899 100%);"
                        >
                            AK
                        </div>
                        <div class="md:hidden">
                            <div class="font-bold text-ink-900 dark:text-ink-100">Anel Kujovic</div>
                            <div class="text-sm text-ink-600 dark:text-ink-200/80">Software engineer · 6+ yrs</div>
                        </div>
                    </div>

                    <!-- Copy -->
                    <div>
                        <div class="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-300 mb-3">Made by a real engineer</div>

                        <h2 class="text-2xl md:text-4xl font-extrabold tracking-tight text-ink-900 dark:text-ink-100 mb-4 leading-tight">
                            Hey, I'm <span class="gradient-text">Anel.</span>
                        </h2>

                        <p class="text-ink-700 dark:text-ink-100/90 leading-relaxed mb-4">
                            I'm a software engineer with <span class="font-bold">6+ years</span> shipping production apps — frontend, backend, databases, the whole stack.
                        </p>
                        <p class="text-ink-600 dark:text-ink-200/80 leading-relaxed mb-4">
                            I built <span class="font-semibold text-ink-900 dark:text-ink-100">Full Code Review</span> after I kept seeing the same thing: people vibe-coding incredible apps with Claude, Cursor, and v0 — then shipping them with auth bugs, leaky queries, and silent data corruption that any senior engineer would catch in a 5-minute PR review.
                        </p>
                        <p class="text-ink-600 dark:text-ink-200/80 leading-relaxed mb-6">
                            So I built the senior engineer. The one I wish I'd had when I started. No gatekeeping, no enterprise pricing, no "consider refactoring." Just real findings, with real fixes, in 60 seconds.
                        </p>

                        <!-- Hidden name on mobile (already shown next to avatar above) -->
                        <div class="hidden md:flex items-center gap-3 mb-6">
                            <div>
                                <div class="font-bold text-ink-900 dark:text-ink-100">Anel Kujovic</div>
                                <div class="text-sm text-ink-600 dark:text-ink-200/80">Founder · Software engineer · 6+ years</div>
                            </div>
                        </div>

                        <!-- Links -->
                        <div class="flex flex-wrap items-center gap-3">
                            <a
                                href="https://www.linkedin.com/in/anel-kujovic-20692b141/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border border-ink-700/15 dark:border-ink-100/10 hover:border-violet-500/40 text-ink-800 dark:text-ink-100 hover:text-violet-600 dark:hover:text-violet-300 transition-colors"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/AnelDeveloper"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border border-ink-700/15 dark:border-ink-100/10 hover:border-violet-500/40 text-ink-800 dark:text-ink-100 hover:text-violet-600 dark:hover:text-violet-300 transition-colors"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8 0 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.7-5.5 6 .5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>
                                GitHub
                            </a>
                            <a
                                href="#pricing"
                                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-violet-600 dark:text-violet-300 hover:underline"
                            >
                                Try the tool
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
