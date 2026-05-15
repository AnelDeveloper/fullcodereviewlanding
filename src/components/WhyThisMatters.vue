<template>
    <section class="py-24 px-6">
        <div class="max-w-6xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-14">
                <div class="text-sm font-semibold uppercase tracking-widest text-white dark:text-white mb-3">The cost of shipping blind</div>
                <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-ink-900 dark:text-ink-100 leading-[1.1]">
                    What's actually <span class="gradient-text">at stake.</span>
                </h2>
                <p class="mt-5 text-lg text-ink-600 dark:text-ink-100/60 leading-relaxed">
                    A code audit isn't a vanity metric. The findings we surface are the same ones that take down launches, lose enterprise contracts, and turn into 3am incident calls.
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-5">
                <RiskCard
                    :icon="iconBreach"
                    label="Security breach"
                    title="A leaked .env file. An unauthenticated /admin route."
                    consequence="Lost enterprise contracts. Failed SOC2 / ISO audits. Legal liability. Reputational damage that follows you for years."
                />
                <RiskCard
                    :icon="iconDown"
                    label="Production downtime"
                    title="The N+1 query that worked in dev, not at 1k users."
                    consequence="Revenue lost by the minute. User trust gone overnight. Your team firefighting instead of shipping."
                />
                <RiskCard
                    :icon="iconScale"
                    label="Scalability collapse"
                    title="Your launch goes viral. Your database doesn't."
                    consequence="The launch you waited months for becomes the outage everyone remembers."
                />
                <RiskCard
                    :icon="iconAI"
                    label="AI-generated bugs"
                    title="AI writes the code. Nobody checks if it's safe."
                    consequence="Code that looks right, compiles fine, and silently fails in production."
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { h } from "vue"

const svg = (paths) =>
    h("svg", {
        width: 22, height: 22, viewBox: "0 0 24 24",
        fill: "none", stroke: "currentColor", "stroke-width": 2,
        "stroke-linecap": "round", "stroke-linejoin": "round",
        innerHTML: paths,
    })

const iconBreach = () => svg(`<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/>`)
const iconDown = () => svg(`<polyline points="3 6 9 12 13 8 21 16"/><polyline points="14 16 21 16 21 9"/>`)
const iconScale = () => svg(`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>`)
const iconAI = () => svg(`<path d="M12 2v4"/><path d="M12 18v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="m16.24 16.24 2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="m16.24 7.76 2.83-2.83"/>`)

const RiskCard = {
    props: ["icon", "label", "title", "consequence"],
    setup(props) {
        return () => h("div", { class: "glass p-6 md:p-7 transition-colors hover:border-rose-500/30" }, [
            h("div", { class: "flex items-center gap-3 mb-4 pb-4 border-b border-ink-700/10 dark:border-ink-100/10" }, [
                h("span", { class: "flex-shrink-0 w-10 h-10 rounded-lg grid place-items-center bg-rose-500/10 text-rose-600 dark:text-rose-400" }, [props.icon()]),
                h("span", { class: "text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400" }, props.label),
            ]),
            h("h3", { class: "text-lg md:text-xl font-bold text-ink-900 dark:text-ink-100 mb-3 leading-snug" }, props.title),
            h("p", { class: "text-sm text-ink-600 dark:text-ink-100/60 leading-relaxed" }, [
                h("span", { class: "font-semibold text-ink-700 dark:text-ink-100/90" }, "What it costs: "),
                props.consequence,
            ]),
        ])
    },
}
</script>
