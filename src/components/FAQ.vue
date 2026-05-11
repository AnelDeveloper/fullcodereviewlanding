<template>
    <section id="faq" class="py-24 px-6">
        <div class="max-w-3xl mx-auto">
            <div class="text-center mb-12">
                <div class="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-300 mb-3">FAQ</div>
                <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-ink-900 dark:text-ink-100">
                    Things people <span class="gradient-text">usually ask</span>
                </h2>
            </div>

            <div class="space-y-3">
                <Item q="Can Full Code Review change my code?">
                    No. We use read-only GitHub access. We cannot push commits, edit files, delete files, or change your repository in any way.
                </Item>
                <Item q="Can you access all my repositories?">
                    No. During GitHub App installation, you choose exactly which repositories Full Code Review can access. You can grant access to a single repo and nothing else.
                </Item>
                <Item q="Can you see my GitHub Secrets?">
                    No. We do not request access to GitHub Secrets, environment variables stored in GitHub, or repository settings. We only request what's needed to read your code.
                </Item>
                <Item q="Can I remove access later?">
                    Yes — anytime. From GitHub <span class="font-semibold">Settings → Applications → Installed GitHub Apps</span>, you can revoke our access in two clicks. We're also notified and stop scanning immediately.
                </Item>
                <Item q="Will it work on AI-generated code (Cursor, Claude, v0, Lovable, Bolt)?">
                    That's literally what it's built for. Vibe-coded apps tend to have specific blind spots — missing auth checks on admin routes, unsafe DB queries, exposed env keys, hallucinated APIs. We're tuned to find them.
                </Item>
                <Item q="Will the report make me feel bad?">
                    No. Findings are neutral, severity-tagged, and shipped with a fix. We don't critique your style, your variable names, or your coding ability. We just point at real issues and tell you the patch. That's it.
                </Item>
                <Item q="My repo is messy / unfinished / a weekend hack — does that matter?">
                    Nope. We review what's there. If you've got 12 routes and 3 of them have auth bugs, that's what the report says. No setup, no config, no judgment.
                </Item>
                <Item q="Can I scan the same repo again after fixing things?">
                    Yes — just buy another code. Vibe coders typically run a review, fix what matters, ship, then run another a week later. Each code is single-use, valid for 30 days.
                </Item>
                <Item q="Can you scan private repos?">
                    Yes. Sign in with GitHub once and we'll scan your private repos. Read-only access, and the token is deleted the moment your scan finishes.
                </Item>
                <Item q="Which languages and stacks do you support?">
                    Anything Claude can read — JavaScript / TypeScript, Python, PHP, Ruby, Go, Rust, Java / Kotlin, C# / .NET, Elixir, plus the usual ORMs and SQL. Next.js, Nuxt, Laravel, Rails, FastAPI, Express — we adapt to your stack.
                </Item>
                <Item q="How big a repo can you handle?">
                    Up to ~850k tokens in a single pass. That's enough for most vibe-coded apps and small-to-medium production apps. Massive monorepos may get sampled — we'll prioritize the highest-risk paths.
                </Item>
                <Item q="What's in the PDF report?">
                    The full scorecard, every issue with severity / file / line, and a suggested fix for each. Shareable with co-founders, designers, or whoever's helping you ship.
                </Item>
                <Item q="Is the redeem code reusable?">
                    No — each code is single-use and valid for 30 days. If something errors before the scan finishes, the code stays valid so you can retry.
                </Item>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, h } from "vue"

const Item = {
    props: ["q"],
    setup(props, { slots }) {
        const open = ref(false)
        return () => h("div", { class: "glass overflow-hidden" }, [
            h("button", {
                onClick: () => (open.value = !open.value),
                class: "w-full text-left p-5 flex items-center justify-between gap-4",
            }, [
                h("span", { class: "font-semibold text-ink-900 dark:text-ink-100" }, props.q),
                h("span", {
                    class: ["w-7 h-7 rounded-full grid place-items-center transition-transform border border-ink-700/15 dark:border-ink-100/10", open.value ? "rotate-45 bg-violet-500/20 border-violet-500/40" : ""],
                }, [
                    h("svg", { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2.5, "stroke-linecap": "round" }, [
                        h("path", { d: "M12 5v14M5 12h14" }),
                    ]),
                ]),
            ]),
            open.value
                ? h("div", { class: "px-5 pb-5 -mt-1 text-ink-600 dark:text-ink-200/80 text-sm leading-relaxed" }, slots.default?.())
                : null,
        ])
    },
}
</script>
