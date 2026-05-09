<template>
    <div class="relative min-h-screen overflow-x-clip">
        <Navbar />

        <main>
            <Hero />
            <HumanVerification />
            <Features />
            <WhyThisMatters />
            <HowItWorks />
            <SampleReport />
            <BuiltFor />
            <Security />
            <Founder />
            <HumanSupport />
            <Pricing />
            <FAQ />
            <Community />
            <CTA />
        </main>

        <Footer />
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
import Founder from "./components/Founder.vue"
import HumanSupport from "./components/HumanSupport.vue"
import Pricing from "./components/Pricing.vue"
import FAQ from "./components/FAQ.vue"
import Community from "./components/Community.vue"
import CTA from "./components/CTA.vue"
import Footer from "./components/Footer.vue"
import { initTheme } from "./composables/useTheme.js"

onMounted(() => initTheme())
</script>
