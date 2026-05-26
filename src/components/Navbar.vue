<template>
    <header class="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/70 dark:bg-ink-950/70 border-b border-ink-700/10 dark:border-ink-100/5">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
            <!-- Left: Logo -->
            <RouterLink to="/" class="flex items-center gap-0 text-ink-900 dark:text-ink-100 min-w-0">
                <img
                    src="/logos/Shark Logo Itself white.svg"
                    alt="QodeShark"
                    class="h-auto object-contain flex-shrink-0 translate-y-2 w-[150px] -ml-14 sm:ml-0"
                    width="36"
                    height="36"
                />
                <span class="font-bold text-base sm:text-lg tracking-tight truncate -ml-9 sm:-ml-10">QodeShark</span>
            </RouterLink>

            <!-- Middle: Nav links -->
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-ink-600 dark:text-ink-100/60">
                <RouterLink to="/codeaudit" class="hover:text-white dark:hover:text-white transition-colors">CodeAudit</RouterLink>
                <RouterLink to="/services" class="hover:text-white dark:hover:text-white transition-colors">Services</RouterLink>
                <RouterLink to="/pricing" class="hover:text-white dark:hover:text-white transition-colors">Pricing</RouterLink>
                <RouterLink to="/team" class="hover:text-white dark:hover:text-white transition-colors">Team</RouterLink>
            </nav>

            <!-- Right: Sign in + CTA -->
            <div class="flex items-center gap-4">
                <a href="https://app.qodeshark.com/login" class="hidden md:inline-flex text-sm font-medium text-ink-700 dark:text-ink-100/60 hover:text-white dark:hover:text-white transition-colors">
                    Sign in
                </a>
                <RouterLink to="/codeaudit" class="hidden sm:inline-flex btn-vibe text-sm py-2.5 px-5">
                    Get started
                </RouterLink>
            </div>
        </div>
    </header>
</template>
