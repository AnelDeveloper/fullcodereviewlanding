<template>
    <section id="pricing" class="py-24 px-6">
        <div class="max-w-6xl mx-auto">
            <div class="text-center max-w-2xl mx-auto mb-10">
                <div class="text-sm font-semibold uppercase tracking-widest text-white dark:text-white mb-3">Pricing</div>
                <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-ink-900 dark:text-ink-100">
                    Pick what to review. <span class="gradient-text">Bundle &amp; save up to 20%.</span>
                </h2>
                <p class="mt-5 text-lg text-ink-600 dark:text-ink-100/60">
                    Starting from <span class="font-bold text-ink-900 dark:text-ink-100">$20</span> — choose any combination. The more you stack, the bigger the discount.
                </p>
                <!-- Founders' offer reminder -->
                <div class="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border border-orange-500/30 bg-orange-500/10 text-orange-700 dark:text-orange-300">
                    <span class="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                    Founders' offer · First 100 sign-ups get an extra 25% off → up to 40% total
                </div>
            </div>

            <!-- Discount tier banner -->
            <div class="max-w-3xl mx-auto mb-12">
                <div class="glass p-2 flex flex-col sm:flex-row items-stretch gap-2">
                    <TierBadge :active="selected.length >= 1" :highlight="selected.length === 1" label="1 category" hint="Pick one" />
                    <TierBadge :active="selected.length >= 2" :highlight="selected.length === 2" label="Save 10%" hint="2 categories" />
                    <TierBadge :active="selected.length >= 3" :highlight="selected.length === 3" label="Save 15%" hint="3 categories" />
                    <TierBadge :active="selected.length >= 4" :highlight="selected.length === 4" label="Save 20%" hint="All 4 — best value" :star="true" />
                </div>
            </div>

            <div class="grid lg:grid-cols-3 gap-6">
                <!-- Categories -->
                <div class="lg:col-span-2 grid md:grid-cols-2 gap-5">
                    <CategoryCard
                        v-for="cat in categories"
                        :key="cat.id"
                        :category="cat"
                        :selected="selected.includes(cat.id)"
                        @toggle="toggle(cat.id)"
                    />
                </div>

                <!-- Sticky total -->
                <div class="lg:col-span-1">
                    <div class="glass p-7 lg:sticky lg:top-24">
                        <div>
                            <div class="flex items-center justify-between mb-2">
                                <div class="text-sm font-semibold uppercase tracking-widest text-white dark:text-white">Your review</div>
                                <span
                                    v-if="discountPct > 0"
                                    class="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white text-black"
                                >Save {{ discountPct }}%</span>
                            </div>

                            <div class="flex items-baseline gap-2 mb-1">
                                <span class="text-6xl font-extrabold text-ink-900 dark:text-ink-100">${{ totalAfter }}</span>
                                <span
                                    v-if="discountPct > 0"
                                    class="text-xl font-semibold line-through text-ink-500 dark:text-ink-100/60"
                                >${{ subtotal }}</span>
                            </div>
                            <p class="text-sm text-ink-600 dark:text-ink-100/60 mb-2">
                                {{ summary }}
                            </p>
                            <p
                                v-if="upsellHint"
                                class="text-xs font-semibold text-white dark:text-white mb-4"
                            >
                                💡 {{ upsellHint }}
                            </p>
                            <div v-else class="mb-4"></div>

                            <ul v-if="selected.length" class="space-y-2 mb-4 pb-4 border-b border-ink-700/10 dark:border-ink-100/10">
                                <li
                                    v-for="cat in selectedCategories"
                                    :key="cat.id"
                                    class="flex items-center justify-between text-sm"
                                >
                                    <span class="text-ink-800 dark:text-ink-100">{{ cat.title }}</span>
                                    <span class="font-mono text-ink-600 dark:text-ink-100/60">${{ cat.price }}</span>
                                </li>
                                <li
                                    v-if="discountPct > 0"
                                    class="flex items-center justify-between text-sm pt-2 border-t border-dashed border-white/30"
                                >
                                    <span class="text-white dark:text-white font-semibold">Bundle discount ({{ discountPct }}%)</span>
                                    <span class="font-mono text-white dark:text-white font-semibold">-${{ savings }}</span>
                                </li>
                            </ul>

                            <ul class="space-y-3 mb-7">
                                <Feat>Per-file evidence with line numbers</Feat>
                                <Feat>Concrete fix suggestions</Feat>
                                <Feat>Interactive scorecard + PDF report</Feat>
                                <Feat>Private repos via GitHub OAuth</Feat>
                                <Feat>Code valid for 30 days</Feat>
                                <Feat>30-day money-back guarantee</Feat>
                            </ul>

                            <button
                                type="button"
                                v-if="selected.length < categories.length"
                                @click="selectAll"
                                class="w-full mb-3 py-2.5 rounded-full text-sm font-semibold border border-white/40 text-white dark:text-white hover:bg-white/10 transition-colors"
                            >
                                ✨ Select all 4 — save 20%
                            </button>

                            <a
                                :href="checkoutUrl"
                                :class="['btn-vibe w-full justify-center', selected.length === 0 ? 'opacity-50 pointer-events-none' : '']"
                            >
                                {{ ctaLabel }}
                            </a>
                            <p class="text-center text-xs text-ink-500 dark:text-ink-100/60 mt-4">
                                Secure checkout via Stripe · One-time payment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, h } from "vue"

const categories = [
    {
        id: "security",
        title: "Security",
        price: 20,
        icon: "shield",
        desc: "Find the gaps that get apps breached.",
        items: [
            "Auth gaps & broken access control (IDOR)",
            "Injection (SQL, NoSQL, command)",
            "XSS, CSRF, SSRF",
            "Mass assignment & input validation",
            "Leaked secrets in code & history",
            "Missing rate limits & brute-force surfaces",
            "Insecure deserialization",
            "Dependency CVEs",
        ],
    },
    {
        id: "database",
        title: "Database",
        price: 60,
        icon: "db",
        desc: "Schema, queries, and integrity.",
        items: [
            "Relationships & foreign key correctness",
            "Indexing strategy (missing, unused, redundant)",
            "N+1 queries & over-fetching",
            "Unsafe migrations (locking, downtime)",
            "Transaction boundaries & isolation",
            "Constraints (NOT NULL, UNIQUE, CHECK)",
            "Data types, precision, timezone handling",
            "Query plans on hot paths",
        ],
    },
    {
        id: "backend",
        title: "Backend",
        price: 50,
        icon: "server",
        desc: "APIs, auth, and the server contract.",
        items: [
            "REST / GraphQL API design & status codes",
            "Authentication (sessions, JWT, OAuth)",
            "Authorization, roles & permissions",
            "Security headers (CSP, HSTS, CORS)",
            "Token handling (refresh, rotation, storage)",
            "Middleware ordering & error handling",
            "Idempotency on mutations & retries",
            "Logging, tracing, observability",
        ],
    },
    {
        id: "frontend",
        title: "Frontend",
        price: 50,
        icon: "code",
        desc: "Components, state, and the client.",
        items: [
            "Component structure & reusability",
            "State management (props, stores, context)",
            "Rendering performance & re-renders",
            "Bundle size & code-splitting",
            "Accessibility (ARIA, keyboard, contrast)",
            "Form validation & UX edge cases",
            "Hydration & SSR pitfalls",
            "SEO basics (meta, semantics, headings)",
        ],
    },
]

const DISCOUNT_TIERS = { 2: 10, 3: 15, 4: 20 }

const selected = ref(["security"])

const toggle = (id) => {
    const i = selected.value.indexOf(id)
    if (i === -1) selected.value.push(id)
    else selected.value.splice(i, 1)
}

const selectAll = () => {
    selected.value = categories.map((c) => c.id)
}

const selectedCategories = computed(() =>
    categories.filter((c) => selected.value.includes(c.id))
)

const subtotal = computed(() =>
    selectedCategories.value.reduce((sum, c) => sum + c.price, 0)
)

const discountPct = computed(() => DISCOUNT_TIERS[selected.value.length] || 0)

const savings = computed(() =>
    Math.round((subtotal.value * discountPct.value) / 100)
)

const totalAfter = computed(() => subtotal.value - savings.value)

const summary = computed(() => {
    const n = selected.value.length
    if (n === 0) return "Pick at least one category to continue."
    return `${n} ${n === 1 ? "category" : "categories"} selected`
})

const upsellHint = computed(() => {
    const n = selected.value.length
    if (n === 0 || n === 4) return null
    if (n === 1) return "Add 1 more → unlock 10% off"
    if (n === 2) return "Add 1 more → bump to 15% off"
    if (n === 3) return "Add 1 more → maximum 20% off"
    return null
})

const ctaLabel = computed(() => {
    if (selected.value.length === 0) return "Select categories"
    return `Get my review · $${totalAfter.value}`
})

const checkoutUrl = computed(() => {
    if (!selected.value.length) return "#"
    const params = new URLSearchParams({ scope: selected.value.join(",") })
    return `https://app.fullcodereview.com/register?${params.toString()}`
})

const Feat = {
    setup(_, { slots }) {
        return () => h("li", { class: "flex items-start gap-3 text-ink-800 dark:text-ink-100" }, [
            h("span", { class: "mt-1 w-5 h-5 rounded-full grid place-items-center bg-white/15 text-white dark:text-white flex-shrink-0" }, [
                h("svg", { width: 12, height: 12, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 3, "stroke-linecap": "round", "stroke-linejoin": "round" }, [
                    h("polyline", { points: "20 6 9 17 4 12" }),
                ]),
            ]),
            h("span", { class: "text-sm" }, slots.default?.()),
        ])
    },
}

const TierBadge = {
    props: ["active", "highlight", "label", "hint", "star"],
    setup(props) {
        return () =>
            h(
                "div",
                {
                    class: [
                        "flex-1 text-center px-3 py-2.5 rounded-xl transition-all",
                        props.highlight
                            ? "bg-white text-black"
                            : props.active
                                ? "bg-white/10 text-white dark:text-white"
                                : "text-ink-500 dark:text-ink-100/60",
                    ],
                },
                [
                    h(
                        "div",
                        { class: "text-sm font-extrabold flex items-center justify-center gap-1" },
                        [props.star ? "⭐ " + props.label : props.label]
                    ),
                    h("div", { class: "text-[10px] uppercase tracking-wider opacity-80 mt-0.5" }, props.hint),
                ]
            )
    },
}

const ICONS = {
    shield: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>`,
    db: `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>`,
    server: `<rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><line x1="6" y1="7" x2="6.01" y2="7"/><line x1="6" y1="17" x2="6.01" y2="17"/>`,
    code: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
}

const CategoryCard = {
    props: ["category", "selected"],
    emits: ["toggle"],
    setup(props, { emit }) {
        return () =>
            h(
                "button",
                {
                    type: "button",
                    onClick: () => emit("toggle"),
                    class: [
                        "glass p-6 text-left transition-all hover:-translate-y-1 relative",
                        props.selected
                            ? "ring-2 ring-white/60 shadow-[0_0_0_4px_rgba(255,255,255,0.08)]"
                            : "",
                    ],
                },
                [
                    h("div", { class: "flex items-start justify-between gap-3 mb-4" }, [
                        h(
                            "div",
                            {
                                class: "w-10 h-10 rounded-lg grid place-items-center flex-shrink-0 bg-white/10",
                            },
                            [
                                h("svg", {
                                    class: "text-white dark:text-white",
                                    width: 22,
                                    height: 22,
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    "stroke-width": 2,
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    innerHTML: ICONS[props.category.icon],
                                }),
                            ]
                        ),
                        h(
                            "span",
                            {
                                class: [
                                    "w-6 h-6 rounded-md grid place-items-center border-2 transition-colors flex-shrink-0",
                                    props.selected
                                        ? "bg-white border-white text-black"
                                        : "border-ink-700/20 dark:border-ink-100/20",
                                ],
                            },
                            props.selected
                                ? [
                                    h(
                                        "svg",
                                        {
                                            width: 14,
                                            height: 14,
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
                                : []
                        ),
                    ]),
                    h("div", { class: "flex items-baseline justify-between gap-2 mb-1" }, [
                        h("h3", { class: "text-lg font-bold text-ink-900 dark:text-ink-100" }, props.category.title),
                        h("span", { class: "text-base font-extrabold text-white dark:text-white" }, `+$${props.category.price}`),
                    ]),
                    h("p", { class: "text-sm text-ink-600 dark:text-ink-100/60 mb-4" }, props.category.desc),
                    h(
                        "ul",
                        { class: "space-y-1.5" },
                        props.category.items.map((item) =>
                            h(
                                "li",
                                {
                                    class: "flex items-start gap-2 text-xs text-ink-700 dark:text-ink-100/60",
                                },
                                [
                                    h(
                                        "span",
                                        {
                                            class: "mt-1 w-1 h-1 rounded-full bg-white flex-shrink-0",
                                        }
                                    ),
                                    h("span", {}, item),
                                ]
                            )
                        )
                    ),
                ]
            )
    },
}
</script>
