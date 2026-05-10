<template>
    <section id="security" class="py-24 px-6">
        <div class="max-w-6xl mx-auto">
            <!-- Header -->
            <div class="text-center max-w-2xl mx-auto mb-10">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-200 mb-4">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    Trust &amp; security
                </div>
                <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-ink-900 dark:text-ink-100 leading-[1.1]">
                    Secure <span class="gradient-text">GitHub access.</span>
                </h2>
                <p class="mt-5 text-lg text-ink-600 dark:text-ink-200/80 leading-relaxed">
                    Qodeshark connects through a read-only GitHub App. You choose exactly which repository to review, and we only request the permissions needed to analyze your code. Your repository stays private. Your code is never used for AI training. You can revoke access in two clicks.
                </p>
            </div>

            <!-- Trust badges -->
            <div class="flex flex-wrap items-center justify-center gap-2 mb-12">
                <Badge :icon="iconEye">Read-only access</Badge>
                <Badge :icon="iconFolder">Selected repo only</Badge>
                <Badge :icon="iconLock">No code changes</Badge>
                <Badge :icon="iconRevoke">Revoke anytime</Badge>
                <Badge :icon="iconShield">Private reports</Badge>
                <Badge :icon="iconNoAI">No AI training</Badge>
                <Badge :icon="iconNDA">NDA available</Badge>
            </div>

            <!-- Two cards: can / cannot -->
            <div class="grid md:grid-cols-2 gap-5 mb-10">
                <!-- Can do -->
                <div class="glass p-6 md:p-7 border-emerald-500/30">
                    <div class="flex items-center gap-3 mb-5 pb-4 border-b border-emerald-500/20">
                        <span class="w-10 h-10 rounded-xl grid place-items-center bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        <h3 class="text-lg font-bold text-ink-900 dark:text-ink-100">What we can do</h3>
                    </div>
                    <ul class="space-y-3">
                        <li class="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-100/90 leading-relaxed">
                            <CheckIcon />
                            <span>Read selected repository files for review</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-100/90 leading-relaxed">
                            <CheckIcon />
                            <span>Analyze security, infrastructure, database, backend, and frontend</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-100/90 leading-relaxed">
                            <CheckIcon />
                            <span>Generate a private, encrypted review report (you only)</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-100/90 leading-relaxed">
                            <CheckIcon />
                            <span>Sign an NDA before scanning (on request)</span>
                        </li>
                    </ul>
                </div>

                <!-- Cannot do -->
                <div class="glass p-6 md:p-7 border-rose-500/30">
                    <div class="flex items-center gap-3 mb-5 pb-4 border-b border-rose-500/20">
                        <span class="w-10 h-10 rounded-xl grid place-items-center bg-rose-500/15 text-rose-600 dark:text-rose-400">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                        </span>
                        <h3 class="text-lg font-bold text-ink-900 dark:text-ink-100">What we cannot do</h3>
                    </div>
                    <ul class="space-y-3">
                        <li class="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-100/90 leading-relaxed">
                            <XIcon />
                            <span>Push, edit, or delete any code</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-100/90 leading-relaxed">
                            <XIcon />
                            <span>Access GitHub Secrets or env vars</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-100/90 leading-relaxed">
                            <XIcon />
                            <span>Change GitHub repository settings</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-100/90 leading-relaxed">
                            <XIcon />
                            <span>Use your code to train any AI model — ours or anyone else's</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-100/90 leading-relaxed">
                            <XIcon />
                            <span>Share your repo, findings, or report with third parties</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-100/90 leading-relaxed">
                            <XIcon />
                            <span>Retain your code after the audit completes (purged within 24h)</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- GitHub connect CTA -->
            <div class="text-center">
                <a
                    href="https://app.qodeshark.com/register"
                    class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-white bg-ink-900 dark:bg-ink-100 dark:text-ink-900 hover:opacity-90 transition-opacity shadow-lg"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8 0 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.7-5.5 6 .5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>
                    Connect with GitHub
                </a>
                <p class="mt-3 text-xs text-ink-500 dark:text-ink-300/80">
                    Read-only access. Selected repo only. No code changes. Revoke anytime.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { h } from "vue"

const svgPaths = (paths, size = 14) =>
    h(
        "svg",
        {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": 2,
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            innerHTML: paths,
        }
    )

const iconEye = () => svgPaths(`<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`)
const iconFolder = () => svgPaths(`<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>`)
const iconLock = () => svgPaths(`<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`)
const iconRevoke = () => svgPaths(`<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>`)
const iconShield = () => svgPaths(`<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`)
const iconNoAI = () => svgPaths(`<circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>`)
const iconNDA = () => svgPaths(`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/>`)

const Badge = {
    props: ["icon"],
    setup(props, { slots }) {
        return () =>
            h(
                "span",
                {
                    class:
                        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-ink-700/10 dark:border-ink-100/10 bg-white/60 dark:bg-ink-900/40 text-ink-800 dark:text-ink-100",
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

const CheckIcon = {
    render: () =>
        h(
            "span",
            {
                class:
                    "mt-0.5 flex-shrink-0 w-5 h-5 rounded-full grid place-items-center bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
            },
            [
                h(
                    "svg",
                    {
                        width: 12,
                        height: 12,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": 3,
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                    },
                    [h("polyline", { points: "20 6 9 17 4 12" })]
                ),
            ]
        ),
}

const XIcon = {
    render: () =>
        h(
            "span",
            {
                class:
                    "mt-0.5 flex-shrink-0 w-5 h-5 rounded-full grid place-items-center bg-rose-500/15 text-rose-600 dark:text-rose-400",
            },
            [
                h(
                    "svg",
                    {
                        width: 12,
                        height: 12,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": 3,
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                    },
                    [h("path", { d: "M18 6 6 18M6 6l12 12" })]
                ),
            ]
        ),
}
</script>
