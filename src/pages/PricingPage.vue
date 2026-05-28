<template>
    <div class="relative min-h-screen bg-black">
        <Navbar />

        <!-- Header -->
        <section class="pt-36 pb-20 px-6 text-center">
            <div class="max-w-3xl mx-auto">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 text-white/50"
                    style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">
                    Transparent pricing
                </div>
                <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05] mb-5">
                    Simple, clear pricing.<br>
                    <span class="text-white/40">No surprises.</span>
                </h1>
                <p class="text-lg text-white/40 leading-relaxed max-w-xl mx-auto">
                    Every service starts with a free 30-minute consultation. You approve the quote before we start — no commitment, no surprises.
                </p>
            </div>
        </section>

        <!-- Pricing table -->
        <section class="pb-28 px-6" style="border-top:1px solid rgba(255,255,255,0.06)">
            <div class="max-w-4xl mx-auto pt-16">

                <!-- Featured: Consultation -->
                <div class="rounded-2xl overflow-hidden mb-4"
                    style="background:#0a0a0a;border:1px solid rgba(255,255,255,0.12)">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-7 py-6">
                        <div class="flex items-center gap-4">
                            <div>
                                <div class="flex items-center gap-2 mb-0.5">
                                    <span class="text-base font-bold text-white">Technical Consultation</span>
                                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-black bg-white whitespace-nowrap flex-shrink-0">Start here · 1st free</span>
                                </div>
                                <p class="text-sm" style="color:rgba(255,255,255,0.4)">30-minute one-on-one expert video call to discuss your project and get a clear plan.</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 flex-shrink-0">
                            <span class="text-xl font-extrabold text-white">$20<span class="text-sm font-normal text-white/40"> / session</span></span>
                            <button @click="showBooking = true"
                                class="inline-flex items-center px-5 py-2 rounded-full text-sm font-bold text-black bg-white hover:opacity-90 transition-opacity whitespace-nowrap">
                                Book free
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Service rows -->
                <div class="rounded-2xl overflow-hidden" style="border:1px solid rgba(255,255,255,0.08)">

                    <!-- Table header -->
                    <div class="grid grid-cols-12 px-7 py-3 text-[10px] font-bold uppercase tracking-widest"
                        style="background:#111111;border-bottom:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.6)">
                        <div class="col-span-9">Service</div>
                        <div class="col-span-2 text-right">Price</div>
                        <div class="col-span-1"></div>
                    </div>

                    <!-- Rows -->
                    <div v-for="(svc, i) in pricingServices" :key="svc.title"
                        class="flex items-baseline justify-between sm:grid sm:items-center sm:grid-cols-12 px-4 sm:px-7 py-3 sm:py-4 gap-2 sm:gap-3 transition-colors hover:bg-white/[0.02]"
                        :style="i < pricingServices.length - 1 ? 'border-bottom:1px solid rgba(255,255,255,0.05)' : ''">

                        <!-- Name + desc -->
                        <div class="flex-1 sm:col-span-9 min-w-0 pr-3 sm:pr-0">
                            <div class="flex items-center gap-2">
                                <span class="text-sm font-semibold text-white">{{ svc.title }}</span>
                                <span v-if="svc.badge"
                                    class="hidden sm:inline px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider"
                                    style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);color:rgba(255,255,255,0.5)">
                                    {{ svc.badge }}
                                </span>
                            </div>
                            <p class="text-xs truncate mt-0.5" style="color:rgba(255,255,255,0.3)">{{ svc.desc }}</p>
                        </div>

                        <!-- Price + Button (mobile: stacked, desktop: separate columns) -->
                        <div class="flex flex-col items-end gap-1 sm:contents">
                            <!-- Price -->
                            <div class="sm:col-span-2 sm:text-right">
                                <span class="text-sm font-extrabold text-white whitespace-nowrap">{{ svc.price }}</span>
                            </div>
                            <!-- CTA -->
                            <div class="sm:col-span-1 sm:flex sm:justify-end">
                                <button @click="showBooking = true"
                                    class="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold text-black bg-white hover:opacity-90 transition-opacity whitespace-nowrap">
                                    {{ svc.cta || "Book" }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Custom pricing note -->
                <div class="mt-5 flex items-start gap-3 px-6 py-4 rounded-xl"
                    style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07)">
                    <span class="text-base mt-0.5">💡</span>
                    <p class="text-sm" style="color:rgba(255,255,255,0.4)">
                        <span class="text-white font-semibold">Project Rebuild & Customized Service</span> are quoted after your free consultation — scope varies per project. No commitment until you approve the quote.
                    </p>
                </div>

            </div>
        </section>

        <!-- Guarantee strip -->
        <section class="py-16 px-6" style="border-top:1px solid rgba(255,255,255,0.06)">
            <div class="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
                <div v-for="g in guaranteeStrip" :key="g.label">
                    <div class="text-2xl mb-2">{{ g.icon }}</div>
                    <div class="text-sm font-bold text-white mb-1">{{ g.label }}</div>
                    <div class="text-xs" style="color:rgba(255,255,255,0.35)">{{ g.desc }}</div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="py-20 px-6 text-center" style="border-top:1px solid rgba(255,255,255,0.06)">
            <div class="max-w-2xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4">Not sure which service you need?</h2>
                <p class="text-white/40 mb-8">Book the free consultation first — we'll tell you exactly what your project needs.</p>
                <button @click="showBooking = true"
                    class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black text-base bg-white transition-all hover:bg-white/90 hover:scale-[1.02]">
                    Book free consultation
                </button>
            </div>
        </section>

        <BookingModal v-if="showBooking" @close="showBooking = false" />
        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import BookingModal from "../components/BookingModal.vue"
import { initTheme } from "../composables/useTheme.js"

const showBooking = ref(false)
onMounted(() => initTheme())

const pricingServices = [
    {
        icon: "🔍",
        title: "Code Audit",
        desc: "Security, database, backend & frontend — per-file evidence + PDF report",
        category: "Audit",
        price: "From $20",
        badge: "Most Popular",
        cta: "Start",
    },
    {
        icon: "🔒",
        title: "Auth Implementation",
        desc: "OAuth, JWT, session management & role-based access",
        category: "Implementation",
        price: "From $200",
    },
    {
        icon: "🔌",
        title: "API Implementation",
        desc: "REST APIs, third-party integrations & webhook handling",
        category: "Implementation",
        price: "From $250",
    },
    {
        icon: "🧹",
        title: "Code Optimization",
        desc: "Fix vulnerabilities, performance issues & technical debt",
        category: "Optimization",
        price: "From $300",
    },
    {
        icon: "⚙️",
        title: "Complex Feature Building",
        desc: "Advanced backend logic, microservices & scalable solutions",
        category: "Implementation",
        price: "From $300",
    },
    {
        icon: "💳",
        title: "Payment Implementation",
        desc: "Stripe, PayPal & custom gateways with webhooks",
        category: "Implementation",
        price: "From $350",
        badge: "Popular",
    },
    {
        icon: "📦",
        title: "Codebase Migration",
        desc: "Migrate between platforms or host servers seamlessly",
        category: "Migration",
        price: "From $350",
    },
    {
        icon: "🗃️",
        title: "Database Migration",
        desc: "Cross-platform database migration with zero data loss",
        category: "Migration",
        price: "From $400",
        badge: "Popular",
    },
    {
        icon: "🛢️",
        title: "Database Implementation",
        desc: "SQL/NoSQL, Supabase & Firebase design & optimization",
        category: "Database",
        price: "From $450",
    },
    {
        icon: "🏗️",
        title: "Project Rebuild",
        desc: "Full rebuild to be clean, scalable & production-ready",
        category: "Rebuild",
        price: "Custom",
    },
    {
        icon: "✨",
        title: "Customized Service",
        desc: "Tailored solution for your unique project needs",
        category: "Custom",
        price: "Custom",
    },
]

const guaranteeStrip = [
    { icon: "🛡️", label: "30-day money-back", desc: "Not satisfied? Full refund, no questions asked." },
    { icon: "🔒", label: "NDA before we start", desc: "Your code and idea stay strictly confidential." },
    { icon: "👨‍💻", label: "No outsourcing", desc: "Every project handled by our in-house engineers." },
]
</script>
