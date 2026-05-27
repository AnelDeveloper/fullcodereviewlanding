<template>
    <!-- Promo banner -->
    <div class="fixed top-0 left-0 right-0 z-50 text-white text-xs sm:text-sm font-semibold text-center py-2.5 px-4" style="background:#10b981">
        New! <RouterLink to="/codeaudit" class="hover:opacity-70 transition-opacity">CodeAudit</RouterLink>: AI-powered code audit verified by senior engineers.
        <RouterLink to="/codeaudit" class="ml-2 inline-flex items-center gap-1 font-bold hover:opacity-70 transition-opacity">Try it free</RouterLink>
    </div>

    <header class="fixed top-10 left-0 right-0 z-40 backdrop-blur-md bg-white/70 dark:bg-ink-950/70 border-b border-ink-700/10 dark:border-ink-100/5">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
            <!-- Left: Logo -->
            <RouterLink to="/" class="flex items-center gap-0 text-ink-900 dark:text-ink-100 min-w-0" @click="mobileOpen = false">
                <img
                    src="/logos/Shark Logo Itself white.svg"
                    alt="QodeShark"
                    class="h-auto object-contain flex-shrink-0 translate-y-2 w-[150px] -ml-14 sm:-ml-12"
                    width="36"
                    height="36"
                />
                <span class="font-bold text-base sm:text-lg tracking-tight truncate -ml-9 sm:-ml-10">QodeShark</span>
            </RouterLink>

            <!-- Middle: Nav links (desktop) -->
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-ink-600 dark:text-ink-100/60">
                <RouterLink to="/codeaudit" class="hover:text-white dark:hover:text-white transition-colors">CodeAudit</RouterLink>
                <RouterLink to="/services" class="hover:text-white dark:hover:text-white transition-colors">Services</RouterLink>
                <RouterLink to="/pricing" class="hover:text-white dark:hover:text-white transition-colors">Pricing</RouterLink>
                <RouterLink to="/team" class="hover:text-white dark:hover:text-white transition-colors">Team</RouterLink>
            </nav>

            <!-- Right: Sign in + CTA (desktop) + Hamburger (mobile) -->
            <div class="flex items-center gap-4 md:mr-8">
                <a href="https://app.qodeshark.com/login" class="hidden md:inline-flex text-sm font-medium text-ink-700 dark:text-ink-100/60 hover:text-white dark:hover:text-white transition-colors">
                    Sign in
                </a>
                <a href="https://app.qodeshark.com/login" class="hidden md:inline-flex btn-vibe text-xs py-2 px-4">
                    Get started
                </a>

                <!-- Hamburger button (mobile only) -->
                <button
                    class="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                    @click="mobileOpen = !mobileOpen"
                    aria-label="Toggle menu">
                    <span class="block w-5 h-0.5 bg-white transition-all duration-200"
                        :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"></span>
                    <span class="block w-5 h-0.5 bg-white transition-all duration-200"
                        :class="mobileOpen ? 'opacity-0' : ''"></span>
                    <span class="block w-5 h-0.5 bg-white transition-all duration-200"
                        :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"></span>
                </button>
            </div>
        </div>

        <!-- Mobile menu -->
        <div v-if="mobileOpen"
            class="md:hidden border-t border-white/10"
            style="background:rgba(0,0,0,0.95);backdrop-filter:blur(12px)">
            <nav class="flex flex-col px-6 py-4 gap-1">
                <RouterLink to="/codeaudit" @click="mobileOpen = false"
                    class="py-3 text-sm font-medium text-white/70 hover:text-white transition-colors border-b border-white/06">
                    CodeAudit
                </RouterLink>
                <RouterLink to="/services" @click="mobileOpen = false"
                    class="py-3 text-sm font-medium text-white/70 hover:text-white transition-colors border-b border-white/06">
                    Services
                </RouterLink>
                <RouterLink to="/pricing" @click="mobileOpen = false"
                    class="py-3 text-sm font-medium text-white/70 hover:text-white transition-colors border-b border-white/06">
                    Pricing
                </RouterLink>
                <RouterLink to="/team" @click="mobileOpen = false"
                    class="py-3 text-sm font-medium text-white/70 hover:text-white transition-colors border-b border-white/06">
                    Team
                </RouterLink>
                <div class="flex flex-col gap-3 pt-4">
                    <a href="https://app.qodeshark.com/login"
                        class="text-sm font-medium text-white/50 hover:text-white transition-colors text-center py-2">
                        Sign in
                    </a>
                    <a href="https://app.qodeshark.com/login"
                        class="btn-vibe text-sm py-3 px-5 text-center">
                        Get started
                    </a>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const mobileOpen = ref(false)
const router = useRouter()

// Close menu on route change
router.afterEach(() => { mobileOpen.value = false })
</script>
