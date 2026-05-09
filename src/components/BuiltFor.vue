<template>
    <section class="py-24 px-6 border-t border-ink-700/10 dark:border-ink-100/5">
        <div class="max-w-6xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-14">
                <div class="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-300 mb-3">Built for</div>
                <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-ink-900 dark:text-ink-100 leading-[1.1]">
                    From solo builders to <span class="gradient-text">Series A.</span> Same depth.
                </h2>
                <p class="mt-5 text-lg text-ink-600 dark:text-ink-200/80 leading-relaxed">
                    The same audit a Big-Four consultancy charges $30k for. Run it on your repo in 60 seconds.
                </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <Audience :icon="iconRocket" title="SaaS founders" desc="Sleep better. Ship safer. Catch the auth gap before customers do." />
                <Audience :icon="iconChip" title="CTOs &amp; tech leads" desc="Pre-launch sanity check. Pre-investor diligence. Pre-fire-drill." />
                <Audience :icon="iconUsers" title="Agencies &amp; consultancies" desc="Hand off code clients trust. Add a verified audit to every deliverable." />
                <Audience :icon="iconChart" title="Investors &amp; VCs" desc="Technical due diligence on a target's stack — without the $30k consultancy bill." />
                <Audience :icon="iconAI" title="AI-assisted dev teams" desc="Verify what Cursor, Claude, v0, Lovable, and Bolt actually shipped to production." />
                <Audience :icon="iconSpark" title="Startups &amp; indie hackers" desc="Ship like a senior engineer reviewed it — without hiring one." />
            </div>
        </div>
    </section>
</template>

<script setup>
import { h } from "vue"

const svg = (paths) =>
    h("svg", {
        width: 20, height: 20, viewBox: "0 0 24 24",
        fill: "none", stroke: "currentColor", "stroke-width": 2,
        "stroke-linecap": "round", "stroke-linejoin": "round",
        innerHTML: paths,
    })

const iconRocket = () => svg(`<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>`)
const iconChip = () => svg(`<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="14" x2="22" y2="14"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="14" x2="4" y2="14"/>`)
const iconUsers = () => svg(`<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`)
const iconChart = () => svg(`<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="3" y1="20" x2="21" y2="20"/>`)
const iconAI = () => svg(`<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/>`)
const iconSpark = () => svg(`<path d="M12 2v4"/><path d="M12 18v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="m16.24 16.24 2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="m16.24 7.76 2.83-2.83"/>`)

const Audience = {
    props: ["icon", "title", "desc"],
    setup(props) {
        return () => h("div", { class: "glass p-6 transition-colors hover:border-violet-500/40" }, [
            h("div", { class: "w-10 h-10 rounded-lg grid place-items-center text-violet-600 dark:text-violet-300 bg-violet-500/10 mb-4" }, [props.icon()]),
            h("h3", { class: "font-bold text-ink-900 dark:text-ink-100 mb-1" }, props.title),
            h("p", { class: "text-sm text-ink-600 dark:text-ink-200/75 leading-relaxed" }, props.desc),
        ])
    },
}
</script>
