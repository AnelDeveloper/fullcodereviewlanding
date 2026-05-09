<template>
    <section class="relative pt-20 pb-28 px-6">
        <div class="max-w-5xl mx-auto text-center">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-200 mb-6 animate-fade-in-up">
                <span class="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse"></span>
                Built for vibe coders · Works with Claude, Cursor, v0, Lovable
            </div>

            <h1 class="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 animate-fade-in-up text-ink-900 dark:text-ink-100" style="animation-delay:.05s">
                Catch what your AI missed.
                <span class="block gradient-text">Before users do.</span>
            </h1>

            <p class="text-base sm:text-lg md:text-xl text-ink-600 dark:text-ink-200/80 max-w-2xl mx-auto leading-relaxed mb-8 animate-fade-in-up" style="animation-delay:.1s">
                You vibe-coded an app. We do a senior-level review — security, database, backend, frontend — and tell you exactly what to fix. No fluff, no judgment.
            </p>

            <!-- Social proof badge -->
            <a
                href="https://www.trustpilot.com/review/fullcodereview.com"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-3 mb-6 mx-auto animate-fade-in-up hover:opacity-80 transition-opacity"
                style="animation-delay:.12s"
            >
                <div class="flex items-center gap-0.5">
                    <span v-for="i in 5" :key="i" class="w-4 h-4 grid place-items-center rounded-[2px] bg-[#00B67A]">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                    </span>
                </div>
                <span class="text-sm text-ink-600 dark:text-ink-200/80">
                    <span class="font-bold text-ink-900 dark:text-ink-100">5.0</span> on Trustpilot
                </span>
            </a>

            <!-- Founders' offer promo banner -->
            <div class="max-w-2xl mx-auto mb-8 animate-fade-in-up px-1" style="animation-delay:.13s">
                <div class="glass p-3 sm:p-4 md:p-5 text-left" style="border-color:rgba(249,115,22,0.35);">
                    <div class="flex items-center gap-3 md:gap-4">
                        <span class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl grid place-items-center text-white bg-orange-500">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14a8 8 0 0 0 16 0C20 9.79 17.99 6.04 14.7 3.34c-.4-.34-.99-.18-1.2.33z"/></svg>
                        </span>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-2 mb-1 flex-wrap">
                                <span class="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/30">
                                    <span class="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                                    Founders' offer
                                </span>
                                <span class="text-[11px] text-ink-500 dark:text-ink-300 hidden sm:inline">First 100 sign-ups only</span>
                            </div>
                            <div class="text-sm md:text-base font-bold text-ink-900 dark:text-ink-100 leading-snug">
                                Save an <span class="gradient-text">extra 25%</span> — stacks with bundle for up to <span class="gradient-text">40% off</span>
                            </div>
                            <div class="text-xs text-ink-600 dark:text-ink-200/80 mt-1">
                                Just register — discount code emailed instantly.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3 animate-fade-in-up max-w-sm sm:max-w-none mx-auto" style="animation-delay:.15s">
                <a href="https://app.fullcodereview.com/register" class="btn-vibe text-base justify-center">
                    Register &amp; claim 25% off
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
                <a href="#how" class="btn-ghost justify-center">See how it works</a>
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
