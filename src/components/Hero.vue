<template>
    <section class="relative pt-20 pb-28 px-6">
        <div class="max-w-5xl mx-auto text-center">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-white/30 bg-white/10 text-white dark:text-white mb-6 animate-fade-in-up">
                <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                AI-assisted audits · Verified by senior engineers
            </div>

            <h1 class="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 animate-fade-in-up text-ink-900 dark:text-ink-100" style="animation-delay:.05s">
                Good code is written.
                <span class="block gradient-text">Great code is audited.</span>
            </h1>

            <p class="text-base sm:text-lg md:text-xl text-ink-600 dark:text-ink-100/60 max-w-2xl mx-auto leading-relaxed mb-8 animate-fade-in-up" style="animation-delay:.1s">
                Identify risks across security, performance, scalability, and technical debt <span class="font-semibold text-ink-800 dark:text-ink-100">before they impact production.</span> Every audit combines AI-powered analysis with senior-engineer verification — built for SaaS founders, vibe coders, CTOs, and AI-assisted dev teams.
            </p>

            <!-- Demo video -->
            <!-- Demo video -->
            <div class="w-full mb-8 animate-fade-in-up overflow-hidden rounded-2xl bg-black" style="animation-delay:.11s;">
                <video
                    src="/demo%20videos/QodeShark%20Demo.mp4"
                    class="w-full block"
                    autoplay
                    muted
                    loop
                    playsinline
                ></video>
            </div>

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
                <span class="text-sm text-ink-600 dark:text-ink-100/60">
                    <span class="font-bold text-ink-900 dark:text-ink-100">5.0</span> on Trustpilot
                </span>
            </a>

            <!-- Founders' offer promo banner -->
            <div class="max-w-2xl mx-auto mb-8 animate-fade-in-up px-1" style="animation-delay:.13s">
                <div class="glass p-3 sm:p-4 md:p-5 text-left" style="border-color:rgba(249,115,22,0.35);">
                    <div class="flex items-center gap-3 md:gap-4">
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-2 mb-1 flex-wrap">
                                <span class="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/30">
                                    <span class="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                                    Founders' offer
                                </span>
                                <span class="text-[11px] text-ink-500 dark:text-ink-100/60 hidden sm:inline">First 100 sign-ups only</span>
                            </div>
                            <div class="text-sm md:text-base font-bold text-ink-900 dark:text-ink-100 leading-snug">
                                Save an <span class="gradient-text">extra 25%</span> — stacks with bundle for up to <span class="gradient-text">40% off</span>
                            </div>
                            <div class="text-xs text-ink-600 dark:text-ink-100/60 mt-1">
                                Just register — discount code emailed instantly.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3 animate-fade-in-up max-w-sm sm:max-w-none mx-auto" style="animation-delay:.15s">
                <a href="https://app.qodeshark.com/register" class="btn-vibe text-base justify-center">
                    Register &amp; get 25% off
                </a>
                <a href="#how" class="btn-ghost justify-center">See how it works</a>
            </div>

            <div class="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-500 dark:text-ink-100/60 animate-fade-in-up" style="animation-delay:.2s">
                <span class="inline-flex items-center gap-1.5"><Dot/>Read-only GitHub access</span>
                <span class="inline-flex items-center gap-1.5"><Dot/>NDA available</span>
                <span class="inline-flex items-center gap-1.5"><Dot/>No AI training on your code</span>
                <span class="inline-flex items-center gap-1.5"><Dot/>Senior-engineer verified</span>
            </div>

            <!-- Platform logos marquee -->
            <div class="mt-12 animate-fade-in-up" style="animation-delay:.25s">
                <p class="text-xs font-semibold uppercase tracking-widest text-ink-500 dark:text-ink-100/60 text-center mb-5">Works with code from any AI platform</p>
                <div class="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                    <div class="flex items-center w-max animate-marquee">
                        <div v-for="(logo, i) in [...platforms, ...platforms]" :key="logo.name + i" class="flex items-center justify-center w-28 h-10 mx-6 flex-shrink-0">
                            <img :src="logo.src" :alt="logo.name" class="max-w-full max-h-full object-contain" :style="{
                                filter: ['Manus', 'Gamma', 'Claude'].includes(logo.name) ? 'brightness(0) invert(1)' : '',
                                transform: ['Cursor', 'Gamma', 'base44'].includes(logo.name) ? 'scale(1.6)' : '',
                            }" />
                        </div>
                    </div>
                </div>
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
                            <div class="text-[11px] uppercase tracking-widest text-white dark:text-white font-semibold">Scorecard</div>
                            <div class="font-mono text-sm text-ink-900 dark:text-ink-100 truncate">yourname / saas-mvp</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Scan complete · 23 issues
                        </span>
                        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/30 text-white dark:text-white text-xs font-bold">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Engineer-verified
                        </span>
                    </div>
                </div>

                <!-- Big overall score + bar -->
                <div class="rounded-2xl p-5 md:p-6 mb-5 border border-ink-700/10 dark:border-ink-100/10 bg-white/40 dark:bg-ink-900/40">
                    <div class="flex items-center justify-between gap-4 mb-3">
                        <div>
                            <div class="text-[11px] uppercase tracking-widest text-ink-500 dark:text-ink-100/60 font-semibold mb-1">Overall risk score</div>
                            <div class="flex items-baseline gap-2">
                                <span class="text-5xl md:text-6xl font-extrabold text-ink-900 dark:text-ink-100 leading-none">78</span>
                                <span class="text-lg font-bold text-ink-400 dark:text-ink-100/60">/ 100</span>
                                <span class="ml-3 text-sm font-bold text-orange-600 dark:text-orange-400">Needs attention</span>
                            </div>
                        </div>
                        <div class="hidden sm:flex flex-col items-end gap-1 text-right">
                            <div class="text-[11px] uppercase tracking-widest text-ink-500 dark:text-ink-100/60 font-semibold">Avg fix time</div>
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
                            <span class="text-[10px] uppercase tracking-widest text-ink-500 dark:text-ink-100/60 font-semibold">Security</span>
                        </div>
                        <div class="flex items-baseline gap-1">
                            <span class="text-2xl font-extrabold text-red-600 dark:text-red-400">64</span>
                            <span class="text-xs text-ink-400 dark:text-ink-100/60">/100</span>
                        </div>
                    </div>
                    <div class="rounded-xl border border-ink-700/10 dark:border-ink-100/10 bg-white/60 dark:bg-ink-900/40 p-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="w-2 h-2 rounded-full bg-orange-500"></span>
                            <span class="text-[10px] uppercase tracking-widest text-ink-500 dark:text-ink-100/60 font-semibold">Database</span>
                        </div>
                        <div class="flex items-baseline gap-1">
                            <span class="text-2xl font-extrabold text-orange-600 dark:text-orange-400">72</span>
                            <span class="text-xs text-ink-400 dark:text-ink-100/60">/100</span>
                        </div>
                    </div>
                    <div class="rounded-xl border border-ink-700/10 dark:border-ink-100/10 bg-white/60 dark:bg-ink-900/40 p-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <span class="text-[10px] uppercase tracking-widest text-ink-500 dark:text-ink-100/60 font-semibold">Backend</span>
                        </div>
                        <div class="flex items-baseline gap-1">
                            <span class="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">86</span>
                            <span class="text-xs text-ink-400 dark:text-ink-100/60">/100</span>
                        </div>
                    </div>
                    <div class="rounded-xl border border-ink-700/10 dark:border-ink-100/10 bg-white/60 dark:bg-ink-900/40 p-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <span class="text-[10px] uppercase tracking-widest text-ink-500 dark:text-ink-100/60 font-semibold">Frontend</span>
                        </div>
                        <div class="flex items-baseline gap-1">
                            <span class="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">82</span>
                            <span class="text-xs text-ink-400 dark:text-ink-100/60">/100</span>
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
                            <span class="text-[11px] font-mono text-ink-500 dark:text-ink-100/60 truncate">server/auth.ts:42</span>
                        </div>
                        <div class="text-sm font-bold text-ink-900 dark:text-ink-100 mb-1">Missing auth on admin endpoint</div>
                        <div class="text-xs text-ink-600 dark:text-ink-100/60 leading-relaxed">
                            <span class="text-white dark:text-white font-bold">Fix:</span> wrap with <code class="font-mono text-[11px] px-1 py-0.5 rounded bg-white/10 text-white dark:text-white">requireRole('admin')</code>
                        </div>
                    </div>
                    <div class="rounded-xl border-l-4 border-l-orange-500 border border-ink-700/10 dark:border-ink-100/10 bg-white/60 dark:bg-ink-900/40 p-4">
                        <div class="flex items-center gap-2 mb-2 flex-wrap">
                            <span class="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-extrabold bg-orange-500/10 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/30">
                                <span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                High
                            </span>
                            <span class="text-[11px] font-mono text-ink-500 dark:text-ink-100/60 truncate">prisma/schema.prisma:113</span>
                        </div>
                        <div class="text-sm font-bold text-ink-900 dark:text-ink-100 mb-1">No index on (user_id, created_at)</div>
                        <div class="text-xs text-ink-600 dark:text-ink-100/60 leading-relaxed">
                            <span class="text-white dark:text-white font-bold">Fix:</span> add <code class="font-mono text-[11px] px-1 py-0.5 rounded bg-white/10 text-white dark:text-white">@@index([userId, createdAt])</code>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="flex items-center justify-between text-xs flex-wrap gap-2">
                    <span class="text-ink-500 dark:text-ink-100/60">+ 21 more issues with fixes</span>
                    <span class="inline-flex items-center gap-1.5 text-white dark:text-white font-semibold">
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

const Dot = { render: () => h("span", { class: "w-1 h-1 rounded-full bg-white" }) }

const platforms = [
    { name: "base44",            src: "/Platforms/base44.png" },
    { name: "bolt.new",          src: "/Platforms/bolt.new.png" },
    { name: "Claude",            src: "/Platforms/Claude.png" },
    { name: "CodeX",             src: "/Platforms/CodeX.png" },
    { name: "Cursor",            src: "/Platforms/Cursor.png" },
    { name: "Gamma",             src: "/Platforms/Gamma.png" },
    { name: "Google Antigravity", src: "/Platforms/Google Antigravity.png" },
    { name: "Lovable",           src: "/Platforms/Lovable.png" },
    { name: "Manus",             src: "/Platforms/Manus.png" },
    { name: "Replit",            src: "/Platforms/Replit.png" },
    { name: "v0",                src: "/Platforms/v0.png" },
    { name: "Windsurf",          src: "/Platforms/Windsurf.png" },
]
</script>
