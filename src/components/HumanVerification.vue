<template>
    <section class="py-24 px-6 border-t border-ink-700/10 dark:border-ink-100/5">
        <div class="max-w-6xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-14">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-white/30 bg-white/10 text-white dark:text-white mb-4">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Trust &amp; verification
                </div>
                <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-ink-900 dark:text-ink-100 leading-[1.1]">
                    AI scans first. <span class="gradient-text">Senior engineers verify afterwards.</span>
                </h2>
                <p class="mt-5 text-lg text-ink-600 dark:text-ink-100/60 leading-relaxed">
                    We're not another AI wrapper. Every Critical and High-severity finding is double-checked by a real senior engineer before it lands in your report — so you never act on a false positive, and never miss what counts.
                </p>
            </div>

            <!-- 3-step pipeline -->
            <div class="grid md:grid-cols-3 gap-5 mb-10">
                <Step
                    n="01"
                    :icon="iconScan"
                    label="AI Analysis"
                    title="100+ checks across security, database, backend, frontend"
                    desc="Claude-powered analysis flags every potential risk — security gaps, performance bottlenecks, scalability issues, AI-generated mistakes."
                />
                <Step
                    n="02"
                    :icon="iconCheck"
                    label="Engineer Verification"
                    title="Critical &amp; High findings hand-verified"
                    desc="A senior engineer (5+ years production experience) reviews every Critical/High issue. False positives are eliminated. Real risks are confirmed."
                    highlight
                />
                <Step
                    n="03"
                    :icon="iconShield"
                    label="Verified Report"
                    title="Sign-off you can ship on"
                    desc="What you receive is a vetted, prioritized list — with concrete fixes, severity grading, and a production-readiness score you can present to investors or your team."
                />
            </div>

            <!-- Trust strip -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <TrustItem :icon="iconBadge" title="Senior engineers" desc="5+ years production experience, US/EU based" />
                <TrustItem :icon="iconLock" title="NDA available" desc="Drop us a request before sharing the repo" />
                <TrustItem :icon="iconEye" title="Cross-checked findings" desc="Critical/High never AI-only — always verified" />
                <TrustItem :icon="iconNoAI" title="No AI training" desc="Your code never enters any training dataset" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { h } from "vue"

const svg = (paths, size = 22) =>
    h("svg", {
        width: size, height: size, viewBox: "0 0 24 24",
        fill: "none", stroke: "currentColor", "stroke-width": 2,
        "stroke-linecap": "round", "stroke-linejoin": "round",
        innerHTML: paths,
    })

const iconScan = () => svg(`<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/>`)
const iconCheck = () => svg(`<path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/>`)
const iconShield = () => svg(`<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>`)
const iconBadge = () => svg(`<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M19.4 9A1.65 1.65 0 0 0 21 7.5V6a2 2 0 0 0-2-2h-1.5A1.65 1.65 0 0 0 16 2.6L15 2 14 .6a1.65 1.65 0 0 0-1.5 1.4H11A1.65 1.65 0 0 0 9.5 0L8 .6 7 2A1.65 1.65 0 0 0 5.5 4H4a2 2 0 0 0-2 2v1.5A1.65 1.65 0 0 0 2 9"/>`, 16)
const iconLock = () => svg(`<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`, 16)
const iconEye = () => svg(`<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`, 16)
const iconNoAI = () => svg(`<circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>`, 16)

const Step = {
    props: ["n", "icon", "label", "title", "desc", "highlight"],
    setup(props) {
        return () => h("div", {
            class: [
                "glass p-6 md:p-7 transition-colors hover:border-ink-700/20 dark:hover:border-ink-100/20 relative",
                props.highlight ? "border-white/40 dark:border-white/40" : "",
            ],
        }, [
            props.highlight
                ? h("span", { class: "absolute -top-2.5 right-6 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white text-black" }, "Human-verified")
                : null,
            h("div", { class: "flex items-center gap-3 mb-4" }, [
                h("div", { class: "w-10 h-10 rounded-lg grid place-items-center text-white dark:text-white bg-white/10" }, [props.icon()]),
                h("div", { class: "flex-1 min-w-0" }, [
                    h("div", { class: "text-[11px] uppercase tracking-widest text-ink-500 dark:text-ink-100/60 font-semibold" }, `Step ${props.n}`),
                    h("div", { class: "text-sm font-bold text-ink-900 dark:text-ink-100" }, props.label),
                ]),
            ]),
            h("h3", { class: "text-base font-bold text-ink-900 dark:text-ink-100 mb-2 leading-snug" }, props.title),
            h("p", { class: "text-sm text-ink-600 dark:text-ink-100/60 leading-relaxed" }, props.desc),
        ])
    },
}

const TrustItem = {
    props: ["icon", "title", "desc"],
    setup(props) {
        return () => h("div", { class: "flex items-start gap-3 p-4 rounded-xl border border-ink-700/10 dark:border-ink-100/10" }, [
            h("span", { class: "flex-shrink-0 w-8 h-8 rounded-md grid place-items-center text-white dark:text-white bg-white/10" }, [props.icon()]),
            h("div", { class: "min-w-0" }, [
                h("div", { class: "text-sm font-bold text-ink-900 dark:text-ink-100" }, props.title),
                h("div", { class: "text-xs text-ink-600 dark:text-ink-100/60 leading-snug mt-0.5" }, props.desc),
            ]),
        ])
    },
}
</script>
