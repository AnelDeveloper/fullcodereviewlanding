<template>
    <section class="relative pt-20 pb-28 px-6">
        <div class="max-w-5xl mx-auto text-center">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-200 mb-6 animate-fade-in-up">
                <span class="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse"></span>
                Built for vibe coders · Works with Claude, Cursor, v0, Lovable
            </div>

            <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 animate-fade-in-up text-ink-900 dark:text-ink-100" style="animation-delay:.05s">
                Catch what your AI missed.
                <span class="block gradient-text">Before users do.</span>
            </h1>

            <p class="text-lg md:text-xl text-ink-600 dark:text-ink-200/80 max-w-2xl mx-auto leading-relaxed mb-8 animate-fade-in-up" style="animation-delay:.1s">
                You vibe-coded an app. We do a senior-level review — security, database, backend, frontend — and tell you exactly what to fix. No fluff, no judgment.
            </p>

            <!-- Social proof badge -->
            <div class="flex items-center justify-center gap-3 mb-8 animate-fade-in-up" style="animation-delay:.12s">
                <div class="flex items-center gap-0.5">
                    <span v-for="i in 5" :key="i" class="w-4 h-4 grid place-items-center rounded-[2px] bg-[#00B67A]">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                    </span>
                </div>
                <span class="text-sm text-ink-600 dark:text-ink-200/80">
                    <span class="font-bold text-ink-900 dark:text-ink-100">4.8</span> · 247 vibe coders shipped safer
                </span>
            </div>

            <div class="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up" style="animation-delay:.15s">
                <a href="https://app.fullcodereview.com/register" class="btn-vibe text-base">
                    Review my repo — from $20
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
                <a href="#how" class="btn-ghost">See how it works</a>
            </div>

            <div class="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-500 dark:text-ink-300/70 animate-fade-in-up" style="animation-delay:.2s">
                <span class="inline-flex items-center gap-1.5"><Dot/>~60 second turnaround</span>
                <span class="inline-flex items-center gap-1.5"><Dot/>One-time payment</span>
                <span class="inline-flex items-center gap-1.5"><Dot/>Private repos supported</span>
                <span class="inline-flex items-center gap-1.5"><Dot/>Fix every issue</span>
            </div>
        </div>

        <!-- Hero card preview: live scorecard mockup -->
        <div class="max-w-5xl mx-auto mt-20 animate-fade-in-up" style="animation-delay:.25s">
            <div class="glass p-5 md:p-7 rounded-3xl">
                <!-- Header strip -->
                <div class="flex items-center justify-between gap-3 mb-6 flex-wrap">
                    <div class="flex items-center gap-3 min-w-0">
                        <span class="brand-mark flex-shrink-0">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                        </span>
                        <div class="min-w-0">
                            <div class="text-[11px] uppercase tracking-widest text-violet-600 dark:text-violet-300 font-semibold">Scorecard</div>
                            <div class="font-mono text-sm text-ink-900 dark:text-ink-100 truncate">yourname / saas-mvp</div>
                        </div>
                    </div>
                    <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Scan complete · 23 issues
                    </span>
                </div>

                <!-- Big overall score + bar -->
                <div class="rounded-2xl p-5 md:p-6 mb-5 border border-ink-700/10 dark:border-ink-100/10 bg-white/40 dark:bg-ink-900/40">
                    <div class="flex items-center justify-between gap-4 mb-3">
                        <div>
                            <div class="text-[11px] uppercase tracking-widest text-ink-500 dark:text-ink-300 font-semibold mb-1">Overall risk score</div>
                            <div class="flex items-baseline gap-2">
                                <span class="text-5xl md:text-6xl font-extrabold text-ink-900 dark:text-ink-100 leading-none">78</span>
                                <span class="text-lg font-bold text-ink-400 dark:text-ink-300">/ 100</span>
                                <span class="ml-3 text-sm font-bold text-orange-600 dark:text-orange-400">Needs attention</span>
                            </div>
                        </div>
                        <div class="hidden sm:flex flex-col items-end gap-1 text-right">
                            <div class="text-[11px] uppercase tracking-widest text-ink-500 dark:text-ink-300 font-semibold">Avg fix time</div>
                            <div class="text-sm font-bold text-ink-900 dark:text-ink-100">~2 hrs</div>
                        </div>
                    </div>
                    <!-- Progress bar -->
                    <div class="h-2 rounded-full bg-ink-200 dark:bg-ink-800 overflow-hidden">
                        <div class="h-full rounded-full" style="width:78%; background: linear-gradient(90deg, #EF4444 0%, #F97316 50%, #EAB308 100%);"></div>
                    </div>
                </div>

                <!-- Category scores -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                    <div class="rounded-xl border border-ink-700/10 dark:border-ink-100/10 bg-white/60 dark:bg-ink-900/40 p-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="w-2 h-2 rounded-full bg-red-500"></span>
                            <span class="text-[10px] uppercase tracking-widest text-ink-500 dark:text-ink-300 font-semibold">Security</span>
                        </div>
                        <div class="flex items-baseline gap-1">
                            <span class="text-2xl font-extrabold text-red-600 dark:text-red-400">64</span>
                            <span class="text-xs text-ink-400 dark:text-ink-300">/100</span>
                        </div>
                    </div>
                    <div class="rounded-xl border border-ink-700/10 dark:border-ink-100/10 bg-white/60 dark:bg-ink-900/40 p-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="w-2 h-2 rounded-full bg-orange-500"></span>
                            <span class="text-[10px] uppercase tracking-widest text-ink-500 dark:text-ink-300 font-semibold">Database</span>
                        </div>
                        <div class="flex items-baseline gap-1">
                            <span class="text-2xl font-extrabold text-orange-600 dark:text-orange-400">72</span>
                            <span class="text-xs text-ink-400 dark:text-ink-300">/100</span>
                        </div>
                    </div>
                    <div class="rounded-xl border border-ink-700/10 dark:border-ink-100/10 bg-white/60 dark:bg-ink-900/40 p-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <span class="text-[10px] uppercase tracking-widest text-ink-500 dark:text-ink-300 font-semibold">Backend</span>
                        </div>
                        <div class="flex items-baseline gap-1">
                            <span class="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">86</span>
                            <span class="text-xs text-ink-400 dark:text-ink-300">/100</span>
                        </div>
                    </div>
                    <div class="rounded-xl border border-ink-700/10 dark:border-ink-100/10 bg-white/60 dark:bg-ink-900/40 p-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <span class="text-[10px] uppercase tracking-widest text-ink-500 dark:text-ink-300 font-semibold">Frontend</span>
                        </div>
                        <div class="flex items-baseline gap-1">
                            <span class="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">82</span>
                            <span class="text-xs text-ink-400 dark:text-ink-300">/100</span>
                        </div>
                    </div>
                </div>

                <!-- Top issues preview -->
                <div class="grid md:grid-cols-2 gap-3 mb-5">
                    <div class="rounded-xl border-l-4 border-l-red-500 border border-ink-700/10 dark:border-ink-100/10 bg-white/60 dark:bg-ink-900/40 p-4">
                        <div class="flex items-center gap-2 mb-2 flex-wrap">
                            <span class="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-extrabold bg-red-500/10 dark:bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                Critical
                            </span>
                            <span class="text-[11px] font-mono text-ink-500 dark:text-ink-300 truncate">server/auth.ts:42</span>
                        </div>
                        <div class="text-sm font-bold text-ink-900 dark:text-ink-100 mb-1">Missing auth on admin endpoint</div>
                        <div class="text-xs text-ink-600 dark:text-ink-200/80 leading-relaxed">
                            <span class="text-violet-700 dark:text-violet-300 font-bold">Fix:</span> wrap with <code class="font-mono text-[11px] px-1 py-0.5 rounded bg-violet-500/10 text-violet-700 dark:text-violet-300">requireRole('admin')</code>
                        </div>
                    </div>
                    <div class="rounded-xl border-l-4 border-l-orange-500 border border-ink-700/10 dark:border-ink-100/10 bg-white/60 dark:bg-ink-900/40 p-4">
                        <div class="flex items-center gap-2 mb-2 flex-wrap">
                            <span class="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-extrabold bg-orange-500/10 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/30">
                                <span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                High
                            </span>
                            <span class="text-[11px] font-mono text-ink-500 dark:text-ink-300 truncate">prisma/schema.prisma:113</span>
                        </div>
                        <div class="text-sm font-bold text-ink-900 dark:text-ink-100 mb-1">No index on (user_id, created_at)</div>
                        <div class="text-xs text-ink-600 dark:text-ink-200/80 leading-relaxed">
                            <span class="text-violet-700 dark:text-violet-300 font-bold">Fix:</span> add <code class="font-mono text-[11px] px-1 py-0.5 rounded bg-violet-500/10 text-violet-700 dark:text-violet-300">@@index([userId, createdAt])</code>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="flex items-center justify-between text-xs flex-wrap gap-2">
                    <span class="text-ink-500 dark:text-ink-300">+ 21 more issues with fixes</span>
                    <span class="inline-flex items-center gap-1.5 text-violet-600 dark:text-violet-300 font-semibold">
                        Full PDF in your inbox
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { h } from "vue"

const Dot = { render: () => h("span", { class: "w-1 h-1 rounded-full bg-violet-500" }) }
</script>
