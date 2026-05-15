<template>
    <section id="features" class="py-24 px-6">
        <div class="max-w-6xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-14">
                <div class="text-sm font-semibold uppercase tracking-widest text-white dark:text-white mb-3">Production-readiness audit</div>
                <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-ink-900 dark:text-ink-100 leading-[1.1]">
                    Seven dimensions of <span class="gradient-text">technical risk.</span>
                </h2>
                <p class="mt-5 text-lg text-ink-600 dark:text-ink-100/60">
                    Seven AI agents auditing your codebase simultaneously — then verified by a senior engineer across security, infrastructure, performance, scalability, technical debt, and code quality.
                </p>
            </div>

            <!-- Code-quality dimensions (4 cards) -->
            <div class="text-xs font-semibold uppercase tracking-widest text-ink-500 dark:text-ink-100/60 mb-4 px-1">Code-quality dimensions</div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                <div
                    v-for="cat in codeCats"
                    :key="cat.title"
                    class="glass p-6 transition-colors hover:border-ink-700/20 dark:hover:border-ink-100/20 flex flex-col"
                >
                    <div class="flex items-start justify-between mb-5">
                        <div
                            class="w-10 h-10 rounded-lg grid place-items-center text-white dark:text-white bg-white/10"
                            v-html="iconSvg[cat.icon]"
                        ></div>
                        <span class="text-[10px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-full bg-white/10 text-white dark:text-white border border-white/20">
                            {{ cat.count }} checks
                        </span>
                    </div>
                    <h3 class="text-lg font-bold text-ink-900 dark:text-ink-100 mb-1">{{ cat.title }}</h3>
                    <ul class="space-y-2 mt-auto pt-4 border-t border-ink-700/10 dark:border-ink-100/10">
                        <li v-for="ex in cat.examples" :key="ex" class="flex items-start gap-2 text-xs text-ink-700 dark:text-ink-100/60 leading-snug">
                            <span class="mt-1 w-1 h-1 rounded-full bg-white flex-shrink-0"></span>
                            <span>{{ ex }}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Production-readiness dimensions (3 cards) -->
            <div class="text-xs font-semibold uppercase tracking-widest text-ink-500 dark:text-ink-100/60 mb-4 px-1">Production-readiness dimensions</div>
            <div class="grid md:grid-cols-3 gap-5 mb-10">
                <div
                    v-for="cat in prodCats"
                    :key="cat.title"
                    class="glass p-6 transition-colors hover:border-ink-700/20 dark:hover:border-ink-100/20 flex flex-col"
                >
                    <div class="flex items-start justify-between mb-5">
                        <div
                            class="w-10 h-10 rounded-lg grid place-items-center text-white dark:text-white bg-white/10"
                            v-html="iconSvg[cat.icon]"
                        ></div>
                        <span class="text-[10px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-full bg-white/10 text-white dark:text-white border border-white/20">
                            {{ cat.count }}
                        </span>
                    </div>
                    <h3 class="text-lg font-bold text-ink-900 dark:text-ink-100 mb-1">{{ cat.title }}</h3>
                    <p class="text-sm text-ink-600 dark:text-ink-100/60 mb-4 leading-relaxed">{{ cat.tagline }}</p>
                    <ul class="space-y-2 mt-auto pt-4 border-t border-ink-700/10 dark:border-ink-100/10">
                        <li v-for="ex in cat.examples" :key="ex" class="flex items-start gap-2 text-xs text-ink-700 dark:text-ink-100/60 leading-snug">
                            <span class="mt-1 w-1 h-1 rounded-full bg-white flex-shrink-0"></span>
                            <span>{{ ex }}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Anti-claim strip: what we DON'T flag -->
            <div class="max-w-3xl mx-auto rounded-2xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10 p-5 flex items-start gap-4">
                <span class="flex-shrink-0 w-10 h-10 rounded-xl grid place-items-center bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
                </span>
                <div>
                    <div class="font-bold text-ink-900 dark:text-ink-100 mb-1">What we won't waste your time on</div>
                    <p class="text-sm text-ink-600 dark:text-ink-100/60 leading-relaxed">
                        No style preferences. No "consider renaming this variable." No "add more comments." No "consider refactoring." If a finding hits your report, it's a real risk with a senior-engineer-verified fix.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const codeCats = [
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

const prodCats = [
    {
        icon: "bolt",
        title: "Performance & scalability",
        count: "Cross-cutting",
        tagline: "Will it survive 1k → 100k users?",
        examples: [
            "Hot-path performance bottlenecks",
            "Memory leaks & long-running ops",
            "Unbounded loops & queue back-pressure",
            "Cache strategy & invalidation gaps",
        ],
    },
    {
        icon: "stack",
        title: "Infrastructure & technical debt",
        count: "Cross-cutting",
        tagline: "What's quietly compounding into a rewrite.",
        examples: [
            "Dependency CVEs & abandoned libs",
            "Unsafe deployment configs",
            "Logging, tracing, observability gaps",
            "Unsafe secrets & env handling",
        ],
    },
    {
        icon: "compass",
        title: "AI code quality",
        count: "AI-aware",
        tagline: "What AI actually produced.",
        examples: [
            "Hallucinated APIs and non-existent functions",
            "Plausible-looking but unsafe patterns",
            "Inconsistent error handling across files",
            "Semantic ambiguity in generated code",
        ],
    },
]

const iconSvg = {
    shield: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    db: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    server: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><line x1="6" y1="7" x2="6.01" y2="7"/><line x1="6" y1="17" x2="6.01" y2="17"/></svg>`,
    code: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    bolt: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><circle cx="19" cy="5" r="3"/></svg>`,
    stack: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M14.83 9.17a4 4 0 0 1 0 5.66"/><path d="M9.17 9.17a4 4 0 0 0 0 5.66"/></svg>`,
    compass: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v3"/><path d="M8 11h3"/></svg>`,
}
</script>
