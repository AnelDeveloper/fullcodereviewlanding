<template>
    <div class="relative min-h-screen overflow-x-clip">
        <!-- Background orbs -->
        <div class="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            <div class="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-[100px] opacity-40 animate-float-slow" style="background:#8B5CF6"></div>
            <div class="absolute -bottom-40 -right-40 w-[540px] h-[540px] rounded-full blur-[100px] opacity-30 animate-float-slower" style="background:#EC4899; animation-delay:-6s"></div>
            <div class="absolute top-[40%] left-[60%] w-[360px] h-[360px] rounded-full blur-[80px] opacity-20 animate-float-slow" style="background:#06B6D4; animation-delay:-12s"></div>
            <div class="absolute inset-0 vibe-grid-bg"></div>
        </div>

        <Navbar />

        <main>
            <Hero />
            <Features />
            <HowItWorks />
            <SampleReport />
            <Founder />
            <Security />
            <Pricing />
            <FAQ />
            <CTA />
        </main>

        <Footer />
    </div>
</template>

<script setup>
import { onMounted } from "vue"
import Navbar from "./components/Navbar.vue"
import Hero from "./components/Hero.vue"
import Features from "./components/Features.vue"
import HowItWorks from "./components/HowItWorks.vue"
import SampleReport from "./components/SampleReport.vue"
import Founder from "./components/Founder.vue"
import Security from "./components/Security.vue"
import Pricing from "./components/Pricing.vue"
import FAQ from "./components/FAQ.vue"
import CTA from "./components/CTA.vue"
import Footer from "./components/Footer.vue"
import { initTheme } from "./composables/useTheme.js"

onMounted(() => initTheme())
</script>
