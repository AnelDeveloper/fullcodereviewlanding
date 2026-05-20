<template>
    <div class="relative min-h-screen overflow-x-clip">
        <Navbar />

        <main class="pt-16">
            <Hero />
            <HumanVerification />
            <Features />
            <WhyThisMatters />
            <HowItWorks />
            <SampleReport />
            <BuiltFor />
            <Security />
            <HumanSupport />
            <Pricing />
            <FAQ />
            <Community />
            <CTA />
        </main>

        <Footer />

        <!-- Floating help button with tooltip -->
        <div class="fixed bottom-6 right-6 z-50 group">
            <div class="absolute bottom-16 right-0 w-64 rounded-xl shadow-2xl border border-white/10 bg-ink-900 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <p class="text-sm font-semibold mb-1">Questions or need help connecting GitHub?</p>
                <p class="text-xs text-ink-100/70">Book a free call with one of our engineers.</p>
                <div class="absolute -bottom-1.5 right-8 w-3 h-3 bg-ink-900 border-r border-b border-white/10 rotate-45"></div>
            </div>
            <a
                href="https://app.qodeshark.com/book"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-5 py-3.5 rounded-full shadow-2xl bg-white text-ink-900 font-bold hover:scale-105 transition-transform"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                <span class="text-sm font-semibold">Need help?</span>
            </a>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue"
import Navbar from "./components/Navbar.vue"
import Hero from "./components/Hero.vue"
import HumanVerification from "./components/HumanVerification.vue"
import Features from "./components/Features.vue"
import WhyThisMatters from "./components/WhyThisMatters.vue"
import HowItWorks from "./components/HowItWorks.vue"
import SampleReport from "./components/SampleReport.vue"
import BuiltFor from "./components/BuiltFor.vue"
import Security from "./components/Security.vue"
import HumanSupport from "./components/HumanSupport.vue"
import Pricing from "./components/Pricing.vue"
import FAQ from "./components/FAQ.vue"
import Community from "./components/Community.vue"
import CTA from "./components/CTA.vue"
import Footer from "./components/Footer.vue"
import { initTheme } from "./composables/useTheme.js"

onMounted(() => initTheme())
</script>
