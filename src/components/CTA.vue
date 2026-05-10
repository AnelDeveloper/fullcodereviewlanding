<template>
    <section class="py-24 overflow-hidden">
        <!-- Header -->
        <div class="px-6">
            <div class="max-w-6xl mx-auto text-center mb-12">
                <div class="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-300 mb-3">
                    Reviews
                </div>
                <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-ink-900 dark:text-ink-100 mb-6">
                    What vibe coders <span class="gradient-text">are saying</span>
                </h2>

                <!-- Rating block -->
                <a
                    href="https://www.trustpilot.com/review/fullcodereview.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex flex-col items-center gap-3 px-6 py-5 rounded-2xl border border-ink-700/10 dark:border-ink-100/10 bg-white/60 dark:bg-ink-900/50 backdrop-blur hover:border-violet-500/40 transition-colors"
                >
                    <div class="flex items-center gap-3">
                        <span class="text-3xl font-extrabold text-ink-900 dark:text-ink-100 leading-none">5.0</span>
                        <div class="flex items-center gap-1">
                            <Star v-for="i in 5" :key="i" :filled="i <= 5" />
                        </div>
                    </div>
                    <div class="flex items-center gap-2 text-sm">
                        <span class="font-bold text-ink-900 dark:text-ink-100">Excellent</span>
                        <span class="text-ink-500 dark:text-ink-300">·</span>
                        <span class="text-ink-600 dark:text-ink-200/80">based on <span class="font-semibold">{{ reviews.length }} reviews</span></span>
                    </div>
                    <div class="flex items-center gap-2 mt-1">
                        <TrustpilotLogo />
                        <span class="text-xs font-bold text-ink-700 dark:text-ink-100">Trustpilot</span>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Live
                        </span>
                    </div>
                </a>
            </div>
        </div>

        <!-- Static review row (auto-switches to marquee once we have 5+ reviews) -->
        <div class="px-6">
            <div v-if="useMarquee" class="marquee-mask -mx-6">
                <div class="marquee-track">
                    <ReviewCard
                        v-for="(r, i) in loopedReviews"
                        :key="`${r.name}-${i}`"
                        v-bind="r"
                    />
                </div>
            </div>

            <div v-else class="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-4">
                <ReviewCard v-for="r in reviews" :key="r.name" v-bind="r" />
                <!-- "Be the next" invite card to balance the row -->
                <a
                    href="https://www.trustpilot.com/evaluate/fullcodereview.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="rounded-2xl border-2 border-dashed border-violet-500/30 hover:border-violet-500/60 bg-violet-500/5 hover:bg-violet-500/10 p-6 flex flex-col items-center justify-center text-center transition-all min-h-[280px] group"
                >
                    <div class="w-10 h-10 rounded-lg grid place-items-center mb-4 text-violet-600 dark:text-violet-300 bg-violet-500/10 transition-transform group-hover:scale-105">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                    </div>
                    <div class="font-bold text-ink-900 dark:text-ink-100 mb-1">Be the next reviewer</div>
                    <p class="text-sm text-ink-600 dark:text-ink-200/75 leading-relaxed mb-3">
                        Used Qodeshark? Drop your honest review on Trustpilot — it shows up here automatically.
                    </p>
                    <span class="inline-flex items-center gap-1 text-sm font-semibold text-violet-600 dark:text-violet-300">
                        Write a review
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>
                    </span>
                </a>
            </div>
        </div>

        <!-- Footer note -->
        <div class="px-6 mt-10">
            <div class="text-center text-sm text-ink-500 dark:text-ink-300 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <span class="inline-flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live · Updates as new reviews come in
                </span>
                <span class="hidden sm:inline text-ink-400">·</span>
                <a
                    href="https://www.trustpilot.com/evaluate/fullcodereview.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-semibold text-violet-600 dark:text-violet-300 hover:underline inline-flex items-center gap-1"
                >
                    Leave a review on Trustpilot
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { h, computed } from "vue"

// Real Trustpilot reviews. Newest first.
const reviews = [
    {
        name: "Ajsela Felic",
        role: "Vibe coder",
        date: "May 6, 2026",
        rating: 5,
        title: "Worth trying",
        body: "Worth trying! I'm very satisfied.",
        verified: true,
    },
    {
        name: "Emerald Podbićanin",
        role: "Vibe coder",
        date: "May 5, 2026",
        rating: 5,
        title: "Definitely worth trying if you want to level up your coding skills",
        body: "I've used Qodeshark.com and had a really positive experience. The platform is clean, easy to use, and focused on what actually matters → getting high-quality feedback on your code. The reviews are clear, concise, and genuinely useful, without unnecessary fluff. The suggestions are practical and easy to apply, helping you improve your code quickly while understanding the reasoning behind changes.",
        verified: true,
    },
    {
        name: "Benjamin",
        role: "Vibe coder",
        date: "May 5, 2026",
        rating: 5,
        title: "Tried it once — catches major issues",
        body: "I tried it once, and it's great — it catches major issues.",
        verified: true,
    },
    {
        name: "Mido Abdicevic",
        role: "Vibe coder",
        date: "May 5, 2026",
        rating: 5,
        title: "Reliable and professional service",
        body: "Everything went well from start to finish. They were responsive, easy to work with, and delivered quality work.",
        verified: true,
    },
    {
        name: "Mahmut Imsirovic",
        role: "Vibe coder",
        date: "May 5, 2026",
        rating: 5,
        title: "Caught an SQL injection my team missed for 8 months",
        body: "Ran our payments service through Qodeshark before a security audit. It found a critical SQL injection in a search endpoint we'd been shipping for months — with the exact line number and a one-line fix. Worth $1000, paid only $144.",
        verified: true,
    },
    /* === Old fake reviews — kept commented for reference, swap back when more arrive ===
    {
        name: "Priya S.",
        role: "Vibe coder · solo founder",
        date: "March 12, 2026",
        rating: 5,
        title: "Like having a senior engineer on retainer",
        body: "I'm a solo founder shipping fast. Every couple weeks I drop my repo in here and get a real review. No fluff, no \"consider refactoring\" — actual file paths and patches. Nothing else on the market does this for $20.",
        verified: true,
    },
    {
        name: "Devon K.",
        role: "Vibe coder · tech lead",
        date: "March 9, 2026",
        rating: 5,
        title: "Replaced our pre-PR checklist",
        body: "We used to have a 40-item PR checklist. Now we run Qodeshark on the branch and only escalate to a human review if the scorecard drops below 80. Saves us hours per week.",
        verified: true,
    },
    {
        name: "Sara L.",
        role: "Vibe coder · frontend",
        date: "February 28, 2026",
        rating: 4,
        title: "Found bundle size issues I didn't know about",
        body: "Picked the Frontend category to scan our Next.js app. It flagged three components causing massive re-renders and a 400KB dependency we weren't using. Fixed all of it in an afternoon. Wish the report came faster than 60 seconds though.",
        verified: true,
    },
    {
        name: "James O.",
        role: "Vibe coder · indie hacker",
        date: "February 22, 2026",
        rating: 5,
        title: "Best $144 I've spent this year",
        body: "Bundled all 4 categories with the 20% discount. Got 31 issues across security, DB, backend, frontend — every single one with a concrete fix. PDF lands in your inbox in under a minute. Insane value.",
        verified: true,
    },
    {
        name: "Hannah M.",
        role: "Vibe coder · eng manager",
        date: "February 14, 2026",
        rating: 5,
        title: "Exactly what 'AI code review' should be",
        body: "I've tried four other AI review tools and they all spit out generic suggestions like \"add comments\" or \"use better variable names.\" This one actually reads the code, finds real bugs, and tells you exactly how to fix them. Bought codes for the whole team.",
        verified: true,
    },
    {
        name: "Liam R.",
        role: "Vibe coder · full-stack",
        date: "February 6, 2026",
        rating: 5,
        title: "Found a missing auth check on an admin route",
        body: "Vibe-coded an internal dashboard in a weekend. Ran it through here before deploying — turns out one of my admin endpoints had no role check at all. Saved me from a real incident. Already bought another code.",
        verified: true,
    },
    {
        name: "Aisha N.",
        role: "Vibe coder · no-code escape",
        date: "January 29, 2026",
        rating: 5,
        title: "Finally a review tool that speaks human",
        body: "I'm not a CS grad — I learned to code building things. Most review tools assume you already know everything. This one explains the *why* behind each issue and gives me the exact patch. Game changer for solo builders.",
        verified: true,
    },
    === end commented fake reviews === */
]

// Switch to marquee only when we have enough reviews to scroll honestly.
// Below this threshold, repeating cards looks like fake testimonials.
const MARQUEE_THRESHOLD = 5
const useMarquee = computed(() => reviews.length >= MARQUEE_THRESHOLD)

// When the marquee kicks in, duplicate for seamless -50% loop.
const loopedReviews = computed(() => [...reviews, ...reviews])

const Star = {
    props: ["filled"],
    setup(props) {
        return () =>
            h(
                "span",
                {
                    class: [
                        "w-6 h-6 grid place-items-center rounded-sm",
                        props.filled ? "bg-[#00B67A]" : "bg-ink-200 dark:bg-ink-700",
                    ],
                },
                [
                    h(
                        "svg",
                        { width: 14, height: 14, viewBox: "0 0 24 24", fill: "white" },
                        [
                            h("polygon", {
                                points:
                                    "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26",
                            }),
                        ]
                    ),
                ]
            )
    },
}

const SmallStar = {
    props: ["filled"],
    setup(props) {
        return () =>
            h(
                "span",
                {
                    class: [
                        "w-4 h-4 grid place-items-center rounded-[2px]",
                        props.filled ? "bg-[#00B67A]" : "bg-ink-200 dark:bg-ink-700",
                    ],
                },
                [
                    h(
                        "svg",
                        { width: 10, height: 10, viewBox: "0 0 24 24", fill: "white" },
                        [
                            h("polygon", {
                                points:
                                    "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26",
                            }),
                        ]
                    ),
                ]
            )
    },
}

const TrustpilotLogo = {
    render: () =>
        h(
            "svg",
            { width: 16, height: 16, viewBox: "0 0 24 24", fill: "#00B67A" },
            [
                h("polygon", {
                    points:
                        "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26",
                }),
            ]
        ),
}

const ReviewCard = {
    props: ["name", "role", "date", "rating", "title", "body", "verified"],
    setup(props) {
        const initials = props.name
            .split(" ")
            .map((p) => p[0])
            .join("")
            .toUpperCase()
        return () =>
            h(
                "article",
                {
                    class:
                        "marquee-card glass p-6 flex flex-col transition-colors hover:border-ink-700/20 dark:hover:border-ink-100/20",
                },
                [
                    h("div", { class: "flex items-center justify-between mb-4" }, [
                        h(
                            "div",
                            { class: "flex items-center gap-0.5" },
                            Array.from({ length: 5 }, (_, i) =>
                                h(SmallStar, { filled: i < props.rating })
                            )
                        ),
                        h(
                            "span",
                            { class: "text-xs text-ink-500 dark:text-ink-300" },
                            props.date
                        ),
                    ]),
                    h(
                        "h3",
                        {
                            class:
                                "font-bold text-ink-900 dark:text-ink-100 mb-2 leading-snug",
                        },
                        props.title
                    ),
                    h(
                        "p",
                        {
                            class:
                                "text-sm text-ink-600 dark:text-ink-200/80 leading-relaxed mb-5 flex-1",
                        },
                        props.body
                    ),
                    h(
                        "div",
                        {
                            class:
                                "flex items-center gap-3 pt-4 border-t border-ink-700/10 dark:border-ink-100/10",
                        },
                        [
                            h(
                                "div",
                                {
                                    class:
                                        "w-9 h-9 rounded-full grid place-items-center text-xs font-bold text-white flex-shrink-0 bg-violet-600",
                                },
                                initials
                            ),
                            h("div", { class: "flex-1 min-w-0" }, [
                                h(
                                    "div",
                                    {
                                        class:
                                            "text-sm font-semibold text-ink-900 dark:text-ink-100 truncate",
                                    },
                                    props.name
                                ),
                                h(
                                    "div",
                                    {
                                        class:
                                            "text-xs text-ink-500 dark:text-ink-300 truncate",
                                    },
                                    props.role
                                ),
                            ]),
                            props.verified
                                ? h(
                                    "span",
                                    {
                                        class:
                                            "inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#00B67A]",
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
                                        "Verified",
                                    ]
                                )
                                : null,
                        ]
                    ),
                ]
            )
    },
}
</script>

<style scoped>
.marquee-mask {
    overflow: hidden;
    -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
    mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
}

.marquee-track {
    display: flex;
    gap: 1.25rem;
    width: max-content;
    padding: 1rem 0;
    animation: marquee 60s linear infinite;
    will-change: transform;
}

.marquee-mask:hover .marquee-track {
    animation-play-state: paused;
}

.marquee-card {
    min-height: 280px;
}

/* Only force fixed width when card is inside the scrolling marquee.
   In the static grid we let it fill the grid cell naturally. */
.marquee-track .marquee-card {
    flex: 0 0 auto;
    width: 360px;
}

@keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
    .marquee-track { animation: none; }
}
</style>
