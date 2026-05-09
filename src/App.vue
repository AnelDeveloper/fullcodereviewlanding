<template>
    <div class="relative min-h-screen overflow-x-clip">
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
