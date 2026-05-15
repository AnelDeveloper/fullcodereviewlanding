<template>
    <section class="py-24 px-6">
        <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <!-- LEFT: copy -->
            <div class="lg:sticky lg:top-24">
                <div class="text-sm font-semibold uppercase tracking-widest text-white dark:text-white mb-3">What you get</div>
                <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-ink-900 dark:text-ink-100 mb-6 leading-[1.1]">
                    A report that tells you <span class="gradient-text">exactly what to fix.</span>
                </h2>
                <p class="text-lg text-ink-600 dark:text-ink-100/60 mb-8 leading-relaxed">
                    No "consider refactoring." No vague nitpicks. Every finding points at a real file and line, explains the risk in plain English, and ships with a copy-pasteable fix.
                </p>

                <!-- Comparison: lazy AI vs real review -->
                <div class="mb-8 grid sm:grid-cols-2 gap-3">
                    <div class="rounded-xl p-4 bg-red-500/5 dark:bg-red-500/10 border border-red-500/20">
                        <div class="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                            <X />
                            Generic AI code review
                        </div>
                        <p class="text-sm text-ink-700 dark:text-ink-100/60 italic leading-relaxed">
                            "Consider improving error handling and adding more comments for clarity."
                        </p>
                    </div>
                    <div class="rounded-xl p-4 bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/30">
                        <div class="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                            <Check2 />
                            QodeShark
                        </div>
                        <p class="text-sm text-ink-700 dark:text-ink-100 leading-relaxed">
                            <span class="font-mono text-xs text-ink-500 dark:text-ink-100/60">auth.ts:42</span> — <span class="font-semibold">Missing role check</span> on admin route. Fix: wrap with <code class="font-mono text-xs">requireRole('admin')</code>.
                        </p>
                    </div>
                </div>

                <!-- Numbered value props -->
                <ul class="space-y-4 mb-10">
                    <Benefit n="01" title="Per-file evidence">
                        Exact file path and line number for every finding — no hunting.
                    </Benefit>
                    <Benefit n="02" title="4-tier severity">
                        Critical, High, Medium, Low — so you know exactly what to fix first.
                    </Benefit>
                    <Benefit n="03" title="A fix, not a feeling">
                        Each issue includes the suggested code change, not generic advice.
                    </Benefit>
                    <Benefit n="04" title="PDF in your inbox">
                        Shareable report with the full scorecard, perfect for standups & PR reviews.
                    </Benefit>
                </ul>

                <!-- Stats strip -->
                <div class="grid grid-cols-3 gap-4 p-5 rounded-2xl border border-ink-700/10 dark:border-ink-100/10 bg-white/40 dark:bg-ink-900/40">
                    <Stat value="Minutes" label="Avg turnaround" />
                    <Stat value="20–80" label="Issues per repo" />
                    <Stat value="100%" label="With a fix" />
                </div>
            </div>

            <!-- RIGHT: sample report -->
            <div>
                <div class="glass p-5 md:p-6">
                    <!-- Report header -->
                    <div class="flex items-center justify-between mb-5 pb-4 border-b border-ink-700/10 dark:border-ink-100/10">
                        <div>
                            <div class="text-xs uppercase tracking-widest text-ink-500 dark:text-ink-100/60 mb-1">Sample report</div>
                            <div class="font-mono text-sm text-ink-900 dark:text-ink-100">acme-inc / payments-service</div>
                        </div>
                        <div class="text-right">
                            <div class="text-2xl font-extrabold text-orange-500 dark:text-orange-400">23</div>
                            <div class="text-[10px] uppercase tracking-wider text-ink-500 dark:text-ink-100/60">issues found</div>
                        </div>
                    </div>

                    <!-- Severity legend -->
                    <div class="flex flex-wrap gap-2 mb-5">
                        <Pill color="red" count="3">Critical</Pill>
                        <Pill color="orange" count="7">High</Pill>
                        <Pill color="yellow" count="9">Medium</Pill>
                        <Pill color="cyan" count="4">Low</Pill>
                    </div>

                    <!-- Issue card 1: Critical -->
                    <IssueCard
                        severity="critical"
                        title="SQL injection in user search endpoint"
                        file="app/Http/Controllers/SearchController.php:48"
                    >
                        <template #desc>
                            Raw query string is concatenated into a SQL <code>WHERE</code> clause. Attackers can dump or modify the users table.
                        </template>
                        <template #fix>
                            Use parameter binding: <code class="font-mono">DB::table('users')->where('email', $request->q)</code>
                        </template>
                    </IssueCard>

                    <!-- Issue card 2: High -->
                    <IssueCard
                        severity="high"
                        title="N+1 query loading order items"
                        file="app/Services/OrderService.php:112"
                    >
                        <template #desc>
                            Looping over orders and calling <code>$order->items</code> fires a query per order. List pages will break under any real load.
                        </template>
                        <template #fix>
                            Eager-load with <code class="font-mono">Order::with('items')->get()</code>.
                        </template>
                    </IssueCard>

                    <!-- Issue card 3: Medium -->
                    <IssueCard
                        severity="medium"
                        title="Missing index on (user_id, created_at)"
                        file="prisma/schema.prisma:113"
                    >
                        <template #desc>
                            The dashboard query filters by user and sorts by date. Without a composite index this scans the whole orders table.
                        </template>
                        <template #fix>
                            Add <code class="font-mono">@@index([userId, createdAt])</code> to the Order model.
                        </template>
                    </IssueCard>

                    <!-- "More" footer -->
                    <div class="mt-5 pt-4 border-t border-ink-700/10 dark:border-ink-100/10 flex items-center justify-between text-sm">
                        <span class="text-ink-500 dark:text-ink-100/60">+ 20 more issues with fixes</span>
                        <span class="inline-flex items-center gap-1.5 text-white dark:text-white font-semibold">
                            Full PDF in your inbox
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { h } from "vue"

const SEVERITY = {
    critical: {
        dot: "bg-red-500",
        text: "text-red-600 dark:text-red-400",
        bg: "bg-red-500/10 dark:bg-red-500/15",
        border: "border-red-500/30",
        accent: "border-l-red-500",
    },
    high: {
        dot: "bg-orange-500",
        text: "text-orange-600 dark:text-orange-400",
        bg: "bg-orange-500/10 dark:bg-orange-500/15",
        border: "border-orange-500/30",
        accent: "border-l-orange-500",
    },
    medium: {
        dot: "bg-yellow-500",
        text: "text-yellow-700 dark:text-yellow-400",
        bg: "bg-yellow-500/10 dark:bg-yellow-500/15",
        border: "border-yellow-500/30",
        accent: "border-l-yellow-500",
    },
    low: {
        dot: "bg-cyan-500",
        text: "text-cyan-700 dark:text-cyan-400",
        bg: "bg-cyan-500/10 dark:bg-cyan-500/15",
        border: "border-cyan-500/30",
        accent: "border-l-cyan-500",
    },
}

const Check2 = {
    render: () =>
        h("svg", { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 3, "stroke-linecap": "round", "stroke-linejoin": "round" }, [
            h("polyline", { points: "20 6 9 17 4 12" }),
        ]),
}

const X = {
    render: () =>
        h("svg", { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 3, "stroke-linecap": "round", "stroke-linejoin": "round" }, [
            h("path", { d: "M18 6 6 18M6 6l12 12" }),
        ]),
}

const Benefit = {
    props: ["n", "title"],
    setup(props, { slots }) {
        return () =>
            h("li", { class: "flex items-start gap-4" }, [
                h(
                    "span",
                    {
                        class: "flex-shrink-0 w-10 h-10 rounded-lg grid place-items-center font-mono text-sm font-bold text-white dark:text-white bg-white/10",
                    },
                    props.n
                ),
                h("div", {}, [
                    h("div", { class: "font-bold text-ink-900 dark:text-ink-100 mb-0.5" }, props.title),
                    h("p", { class: "text-sm text-ink-600 dark:text-ink-100/60 leading-relaxed" }, slots.default?.()),
                ]),
            ])
    },
}

const Stat = {
    props: ["value", "label"],
    setup(props) {
        return () =>
            h("div", { class: "text-center" }, [
                h("div", { class: "text-2xl font-extrabold gradient-text leading-tight" }, props.value),
                h(
                    "div",
                    { class: "text-[10px] uppercase tracking-wider text-ink-500 dark:text-ink-100/60 mt-1 font-semibold" },
                    props.label
                ),
            ])
    },
}

const Pill = {
    props: ["color", "count"],
    setup(props, { slots }) {
        const palette = {
            red: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30",
            orange: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30",
            yellow: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/30",
            cyan: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/30",
        }
        return () =>
            h(
                "span",
                {
                    class: [
                        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border",
                        palette[props.color],
                    ],
                },
                [
                    h("span", { class: "tabular-nums" }, props.count),
                    h("span", { class: "uppercase tracking-wider" }, slots.default?.()),
                ]
            )
    },
}

const IssueCard = {
    props: ["severity", "title", "file"],
    setup(props, { slots }) {
        const s = SEVERITY[props.severity]
        return () =>
            h(
                "div",
                {
                    class: [
                        "rounded-xl border bg-white/70 dark:bg-ink-900/60 border-l-4 mb-3 p-4 md:p-5 overflow-hidden",
                        "border-ink-700/10 dark:border-ink-100/10",
                        s.accent,
                    ],
                },
                [
                    h("div", { class: "flex items-center gap-2 mb-2 flex-wrap min-w-0" }, [
                        h(
                            "span",
                            {
                                class: [
                                    "inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-extrabold border flex-shrink-0",
                                    s.bg,
                                    s.text,
                                    s.border,
                                ],
                            },
                            [h("span", { class: ["w-1.5 h-1.5 rounded-full", s.dot] }), props.severity]
                        ),
                        h("span", { class: "text-[11px] font-mono text-ink-500 dark:text-ink-100/60 truncate min-w-0 flex-1", title: props.file }, props.file),
                    ]),
                    h("div", { class: "font-bold text-ink-900 dark:text-ink-100 mb-2" }, props.title),
                    h(
                        "p",
                        { class: "text-sm text-ink-600 dark:text-ink-100/60 mb-3 leading-relaxed" },
                        slots.desc?.()
                    ),
                    h(
                        "div",
                        {
                            class:
                                "rounded-lg bg-white/8 dark:bg-white/10 border border-white/30 p-3 text-sm text-ink-800 dark:text-ink-100 leading-relaxed",
                        },
                        [
                            h("span", { class: "text-white dark:text-white font-bold mr-1" }, "Fix:"),
                            slots.fix?.(),
                        ]
                    ),
                ]
            )
    },
}
</script>

<style scoped>
code {
    @apply font-mono text-[0.85em] px-1 py-0.5 rounded bg-white/10 text-white dark:text-white;
}
</style>
