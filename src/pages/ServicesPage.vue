<template>
    <div class="relative min-h-screen bg-black">
        <Navbar />

        <!-- Header -->
        <section class="pt-36 pb-20 px-6 text-center">
            <div class="max-w-3xl mx-auto">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 text-white/50"
                    style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">
                    All services
                </div>
                <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05] mb-5">
                    Everything your<br>
                    <span class="text-white/40">project needs.</span>
                </h1>
                <p class="text-lg text-white/40 leading-relaxed max-w-xl mx-auto">
                    Not sure where to start? Book a free consultation — we'll tell you exactly what your project needs.
                </p>
            </div>
        </section>

        <!-- Services -->
        <section class="pb-28 px-6" style="border-top:1px solid rgba(255,255,255,0.06)">
            <div class="max-w-6xl mx-auto pt-16">

                <!-- Featured: Consultation -->
                <div class="mb-8">
                    <a href="https://app.qodeshark.com/book" class="group block rounded-2xl overflow-hidden transition-all hover:border-white/20"
                        style="background:#0a0a0a;border:1px solid rgba(255,255,255,0.08)">
                        <div class="grid md:grid-cols-2 gap-0">
                            <div class="p-8 md:p-10 flex flex-col justify-center" style="background:#333333">
                                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-5 self-start text-black bg-white">
                                    Start here · 1st session FREE
                                </div>
                                <h3 class="text-2xl md:text-3xl font-extrabold text-white mb-3">Technical Consultation</h3>
                                <p class="text-white/40 leading-relaxed mb-6">
                                    30-minute long one-on-one expert video call session to discuss everything about your vibe coded project and get personalized advice.
                                </p>
                                <div class="flex items-center justify-between">
                                    <span class="text-xl font-extrabold text-white">$20<span class="text-white/40 text-sm font-normal"> per session</span></span>
                                    <span class="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold text-black bg-white hover:opacity-90 transition-opacity">
                                        Book
                                    </span>
                                </div>
                            </div>
                            <div class="relative overflow-hidden flex items-center justify-center min-h-[220px] md:min-h-0"
                                style="border-left:1px solid rgba(255,255,255,0.06);background:#ffffff;padding:20px">
                                <img src="/Service images/Technical Consultation.png" alt="Technical Consultation"
                                    class="max-w-full max-h-full object-contain" />
                            </div>
                        </div>
                    </a>
                </div>

                <!-- Service grid -->
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <ServiceCard v-for="svc in services" :key="svc.title" v-bind="svc" />
                </div>

                <!-- Bottom CTA -->
                <div class="mt-16 text-center">
                    <p class="text-white/30 mb-5 text-sm">Not sure which service fits your project?</p>
                    <a href="https://app.qodeshark.com/book"
                        class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black text-base bg-white transition-all hover:bg-white/90 hover:scale-[1.02]">
                        Book a free consultation
                    </a>
                </div>

            </div>
        </section>

        <Footer />
    </div>
</template>

<script setup>
import { h, onMounted } from "vue"
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import { initTheme } from "../composables/useTheme.js"

onMounted(() => initTheme())

const services = [
    {
        img: "/Service images/Code Review.png",
        title: "Code Audit",
        desc: "Connect your GitHub repo and get a full security, database, backend & frontend audit. Per-file evidence, fix suggestions, interactive scorecard, and a PDF report — verified by a senior engineer.",
        price: "From $20",
        badge: "Most Popular",
        cta: "Start",
    },
    {
        img: "/Service images/Code Cleaning.png",
        title: "Code Optimization",
        desc: "Clean up messy codebases — fix security vulnerabilities, improve performance, resolve race conditions, and reduce technical debt.",
        price: "From $300",
    },
    {
        img: "/Service images/Complex Backend Feature Implementation.png",
        title: "Complex Feature Building",
        desc: "Advanced server-side logic, microservices, and scalable backend solutions.",
        price: "From $300",
    },
    {
        img: "/Service images/Auth Implementation.png",
        title: "Auth Implementation",
        desc: "Secure authentication systems including OAuth, JWT, and session management.",
        price: "From $300",
    },
    {
        img: "/Service images/Codebase Migration.png",
        title: "Codebase Migration",
        desc: "Seamlessly migrate your codebase between platforms or host servers.",
        price: "From $350",
    },
    {
        img: "/Service images/Payment Implementation.png",
        title: "Payment Implementation",
        desc: "Stripe, PayPal, and custom payment gateway integrations for your application.",
        price: "From $350",
        badge: "Popular",
    },
    {
        img: "/Service images/API Implementation.png",
        title: "API Implementation",
        desc: "Robust and maintainable API developments, third-party integrations, and webhooks.",
        price: "From $350",
    },
    {
        img: "/Service images/Database Migration.png",
        title: "Database Migration",
        desc: "Seamlessly migrate your database across platforms or cloud providers with zero data loss.",
        price: "From $400",
        badge: "Popular",
    },
    {
        img: "/Service images/Database Implementation.png",
        title: "Database Implementation",
        desc: "SQL/NoSQL, Supabase, and Firebase design, optimization, migrations, and data modeling.",
        price: "From $450",
    },
    {
        img: "/Service images/Project Rebuild.png",
        title: "Project Rebuild",
        desc: "Rebuild your project to be clean, scalable, and production-ready from the ground up.",
        price: "Custom Pricing",
    },
    {
        img: "/Service images/Customized Service.png",
        title: "Customized Service",
        desc: "Tailored solutions for your unique project needs — tell us what you need and we'll make it happen.",
        price: "Custom Pricing",
    },
]

const ServiceCard = {
    props: ["img", "title", "desc", "price", "badge", "cta"],
    setup(props) {
        return () => h("a", {
            href: "https://app.qodeshark.com/book",
            class: "group flex flex-col rounded-2xl overflow-hidden transition-all hover:border-white/25",
            style: "background:#0a0a0a;border:1px solid rgba(255,255,255,0.1)",
        }, [
            h("div", { class: "relative overflow-hidden flex items-center justify-center", style: "height:180px;background:#ffffff;padding:20px" }, [
                h("img", {
                    src: props.img,
                    alt: props.title,
                    class: "max-w-full max-h-full object-contain",
                    style: "opacity:1",
                }),
                props.badge
                    ? h("div", {
                        class: "absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white",
                        style: "background:rgba(0,0,0,0.75);border:1px solid rgba(255,255,255,0.2);backdrop-filter:blur(8px)",
                    }, props.badge)
                    : null,
            ]),
            h("div", { style: "height:1px;background:rgba(255,255,255,0.08)" }),
            h("div", { class: "flex flex-col flex-1 p-5", style: "background:#333333" }, [
                h("h3", { class: "text-base font-bold text-white mb-2 leading-snug" }, props.title),
                h("p", { class: "text-sm leading-relaxed flex-1 mb-4", style: "color:rgba(255,255,255,0.5)" }, props.desc),
                h("div", { class: "flex items-center justify-between" }, [
                    h("span", { class: "text-sm font-extrabold text-white" }, props.price),
                    h("span", {
                        class: "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold text-black bg-white transition-opacity hover:opacity-90",
                    }, props.cta || "Book"),
                ]),
            ]),
        ])
    },
}
</script>
