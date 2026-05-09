<template>
    <section id="how" class="py-24 px-6 relative">
        <div class="max-w-6xl mx-auto">
            <div class="text-center max-w-2xl mx-auto mb-14">
                <div class="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-300 mb-3">How it works</div>
                <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-ink-900 dark:text-ink-100">
                    From repo to report in <span class="gradient-text">under 60 seconds.</span>
                </h2>
                <p class="mt-5 text-lg text-ink-600 dark:text-ink-200/80">
                    No account setup, no CLI, no config file. Three clicks and you're done.
                </p>
            </div>

            <!-- Connector line behind cards (desktop only) -->
            <div class="relative">
                <div class="hidden md:block absolute top-[68px] left-[12%] right-[12%] h-px bg-ink-700/15 dark:bg-ink-100/15"></div>

                <div class="grid md:grid-cols-3 gap-5 relative">
                    <Step
                        number="01"
                        title="Pick scope & pay"
                        time="~30 sec"
                        :icon="iconCart"
                    >
                        Choose what to review — security, database, backend, frontend. <strong>Bundle &amp; save up to 20%.</strong> A redeem code lands in your inbox instantly.
                    </Step>

                    <Step
                        number="02"
                        title="Connect a repo"
                        time="~10 sec"
                        :icon="iconGit"
                    >
                        Sign in with GitHub for private repos (read-only, token deleted after) — or just paste any public GitHub URL.
                    </Step>

                    <Step
                        number="03"
                        title="Get the report"
                        time="~60 sec"
                        :icon="iconReport"
                        :final="true"
                    >
                        Interactive scorecard appears in-app. Full PDF — every issue, severity, file, fix — hits your inbox at the same time.
                    </Step>
                </div>
            </div>

            <!-- Trust strip -->
            <div class="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
                <TrustItem :icon="iconLock">Read-only GitHub access</TrustItem>
                <TrustItem :icon="iconShield">Token deleted after scan</TrustItem>
                <TrustItem :icon="iconClock">Code valid for 30 days</TrustItem>
                <TrustItem :icon="iconBadge">No subscription</TrustItem>
            </div>
        </div>
    </section>
</template>

<script setup>
import { h } from "vue"

const svg = (paths) =>
    h(
        "svg",
        {
            width: 20,
            height: 20,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": 2,
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            innerHTML: paths,
        }
    )

const iconCart = () => svg(`<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>`)
const iconGit = () => svg(`<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/>`)
const iconReport = () => svg(`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>`)
const iconLock = () => svg(`<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`)
const iconShield = () => svg(`<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`)
const iconClock = () => svg(`<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`)
const iconBadge = () => svg(`<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>`)

const Step = {
    props: ["number", "title", "time", "icon", "final"],
    setup(props, { slots }) {
        return () =>
            h(
                "div",
                {
                    class:
                        "relative glass p-7 transition-colors hover:border-ink-700/20 dark:hover:border-ink-100/20 group",
                },
                [
                    // Numbered bubble (sits on the connector line)
                    h(
                        "div",
                        {
                            class:
                                "absolute -top-4 left-7 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase text-white bg-violet-600",
                        },
                        [`Step ${props.number}`]
                    ),

                    // Icon
                    h(
                        "div",
                        {
                            class:
                                "w-10 h-10 rounded-lg grid place-items-center mb-5 mt-2 text-violet-600 dark:text-violet-300 bg-violet-500/10",
                        },
                        [props.icon()]
                    ),

                    // Title row with time badge
                    h("div", { class: "flex items-center justify-between gap-3 mb-2" }, [
                        h("h3", { class: "text-xl font-bold text-ink-900 dark:text-ink-100" }, props.title),
                        h(
                            "span",
                            {
                                class:
                                    "text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 whitespace-nowrap",
                            },
                            props.time
                        ),
                    ]),

                    // Description
                    h(
                        "p",
                        { class: "text-sm text-ink-600 dark:text-ink-200/80 leading-relaxed" },
                        slots.default?.()
                    ),

                    // Final-step CTA hint
                    props.final
                        ? h(
                            "div",
                            {
                                class:
                                    "mt-5 pt-5 border-t border-ink-700/10 dark:border-ink-100/10 flex items-center gap-2 text-xs font-semibold text-violet-600 dark:text-violet-300",
                            },
                            [
                                h(
                                    "svg",
                                    {
                                        width: 14,
                                        height: 14,
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": 2.5,
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                    },
                                    [h("polyline", { points: "20 6 9 17 4 12" })]
                                ),
                                "Done. Ship the fixes.",
                            ]
                        )
                        : null,
                ]
            )
    },
}

const TrustItem = {
    props: ["icon"],
    setup(props, { slots }) {
        return () =>
            h(
                "div",
                {
                    class:
                        "inline-flex items-center gap-2 text-ink-600 dark:text-ink-200/80",
                },
                [
                    h(
                        "span",
                        { class: "text-violet-600 dark:text-violet-300" },
                        [props.icon()]
                    ),
                    h("span", {}, slots.default?.()),
                ]
            )
    },
}
</script>
