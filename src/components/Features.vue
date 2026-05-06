<template>
    <section id="features" class="py-24 px-6">
        <div class="max-w-6xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-14">
                <div class="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-300 mb-3">What we actually catch</div>
                <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-ink-900 dark:text-ink-100 leading-[1.1]">
                    The bugs that bite you <span class="gradient-text">in production.</span>
                </h2>
                <p class="mt-5 text-lg text-ink-600 dark:text-ink-200/80">
                    Vibe coding ships fast. Production bugs ship faster. We run <span class="font-bold text-ink-900 dark:text-ink-100">100+ senior-engineer checks</span> across four categories — real risks, real file paths, real patches.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div
                    v-for="cat in cats"
                    :key="cat.title"
                    class="glass p-6 transition-all hover:-translate-y-1 hover:shadow-[0_30px_70px_-20px_rgba(139,92,246,0.4)] flex flex-col"
                >
                    <div class="flex items-start justify-between mb-5">
                        <div
                            class="w-11 h-11 rounded-xl grid place-items-center text-violet-600 dark:text-violet-300"
                            style="background:linear-gradient(135deg,rgba(139,92,246,.15),rgba(236,72,153,.15));border:1px solid rgba(139,92,246,.25);"
                            v-html="iconSvg[cat.icon]"
                        ></div>
                        <span class="text-[10px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
                            {{ cat.count }} checks
                        </span>
                    </div>
                    <h3 class="text-lg font-bold text-ink-900 dark:text-ink-100 mb-1">{{ cat.title }}</h3>
                    <p class="text-sm text-ink-600 dark:text-ink-200/75 mb-4 leading-relaxed">{{ cat.tagline }}</p>
                    <ul class="space-y-2 mt-auto pt-4 border-t border-ink-700/10 dark:border-ink-100/10">
                        <li v-for="ex in cat.examples" :key="ex" class="flex items-start gap-2 text-xs text-ink-700 dark:text-ink-200/80 leading-snug">
                            <span class="mt-1 w-1 h-1 rounded-full bg-violet-500 flex-shrink-0"></span>
                            <span>{{ ex }}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Anti-claim strip: what we DON'T flag -->
            <div class="mt-10 max-w-3xl mx-auto rounded-2xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 flex items-start gap-4">
                <span class="flex-shrink-0 w-10 h-10 rounded-xl grid place-items-center bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
                </span>
                <div>
                    <div class="font-bold text-ink-900 dark:text-ink-100 mb-1">What we won't waste your time on</div>
                    <p class="text-sm text-ink-600 dark:text-ink-200/80 leading-relaxed">
                        No style preferences. No "consider renaming this variable." No "add more comments." No "consider refactoring." If a finding hits your report, it's a real risk with a real fix.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const cats = [
    {
        icon: "shield",
        title: "Security",
        count: "30+",
        tagline: "The stuff that ends launches.",
        examples: [
            "Missing auth on /admin routes",
            "SQL / command injection points",
            "Leaked .env keys & secrets",
            "Broken access control (IDOR)",
        ],
    },
    {
        icon: "db",
        title: "Database",
        count: "25+",
        tagline: "What kills your dashboard at 1k users.",
        examples: [
            "N+1 queries on hot paths",
            "Missing or redundant indexes",
            "Unsafe migrations & locking",
            "Broken foreign key constraints",
        ],
    },
    {
        icon: "server",
        title: "Backend",
        count: "25+",
        tagline: "Every layer of the API contract.",
        examples: [
            "Broken role / permission checks",
            "Token leakage & rotation gaps",
            "Missing rate limits",
            "Wrong HTTP codes & idempotency",
        ],
    },
    {
        icon: "code",
        title: "Frontend",
        count: "20+",
        tagline: "What users actually feel.",
        examples: [
            "Components that re-render forever",
            "Unused 400KB+ dependencies",
            "Hydration & SSR mismatches",
            "Form validation & a11y gaps",
        ],
    },
]

const iconSvg = {
    shield: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    db: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    server: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><line x1="6" y1="7" x2="6.01" y2="7"/><line x1="6" y1="17" x2="6.01" y2="17"/></svg>`,
    code: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
}
</script>
