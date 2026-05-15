<template>
    <section class="py-20 px-6">
        <div class="max-w-5xl mx-auto">
            <div class="glass p-8 md:p-12">
                <div class="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div class="text-sm font-semibold uppercase tracking-widest text-white dark:text-white mb-3">Need more than auditing?</div>
                        <h2 class="text-2xl md:text-4xl font-extrabold tracking-tight text-ink-900 dark:text-ink-100 leading-[1.15] mb-4">
                            Talk directly with a <span class="gradient-text">senior engineer.</span>
                        </h2>
                        <p class="text-ink-600 dark:text-ink-100/60 leading-relaxed mb-6">
                            For high-stakes launches, investor due diligence, or compliance audits — pair the automated report with a one-on-one review call. A senior engineer walks you through every Critical/High finding, helps prioritize fixes, and signs off on production readiness.
                        </p>

                        <ul class="space-y-3 mb-8">
                            <Item>30-minute review call after every audit (free with any bundle)</Item>
                            <Item>Optional fix-pairing session — implement together</Item>
                            <Item>NDA available before sharing the repo</Item>
                            <Item>Compliance &amp; investor-ready summary on request</Item>
                        </ul>

                        <div class="flex flex-col sm:flex-row gap-3">
                            <a href="https://app.qodeshark.com/book" class="btn-vibe text-base justify-center">
                                Book a review call
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                            </a>
                            <a href="#community" class="btn-ghost justify-center">Or join Discord</a>
                        </div>
                    </div>

                    <!-- Right: stats card -->
                    <div class="rounded-2xl border border-ink-700/10 dark:border-ink-100/10 p-6 md:p-8">
                        <div class="text-[11px] uppercase tracking-widest text-ink-500 dark:text-ink-100/60 font-semibold mb-4">Engineer profile</div>
                        <div class="grid grid-cols-2 gap-5 mb-6">
                            <Stat label="Avg experience" value="6+ yrs" />
                            <Stat label="Production releases" value="100+" />
                            <Stat label="Languages audited" value="12+" />
                            <Stat label="Stacks covered" value="JS · TS · PHP · Py · Go · Rust" small />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { h } from "vue"

const Item = {
    setup(_, { slots }) {
        return () => h("li", { class: "flex items-start gap-3 text-ink-700 dark:text-ink-100/90" }, [
            h("span", { class: "mt-1 flex-shrink-0 w-5 h-5 rounded-full grid place-items-center bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" }, [
                h("svg", { width: 12, height: 12, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 3, "stroke-linecap": "round", "stroke-linejoin": "round" }, [
                    h("polyline", { points: "20 6 9 17 4 12" }),
                ]),
            ]),
            h("span", { class: "text-sm leading-relaxed" }, slots.default?.()),
        ])
    },
}

const Stat = {
    props: ["label", "value", "small"],
    setup(props) {
        return () => h("div", {}, [
            h("div", { class: "text-[10px] uppercase tracking-widest text-ink-500 dark:text-ink-100/60 font-semibold mb-1" }, props.label),
            h("div", { class: [props.small ? "text-sm font-mono" : "text-2xl font-extrabold", "text-ink-900 dark:text-ink-100 leading-none"] }, props.value),
        ])
    },
}
</script>
