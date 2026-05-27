<template>
    <div class="relative min-h-screen overflow-x-hidden bg-black">
        <Navbar />

        <!-- ─── HERO ─── -->
        <section class="relative flex flex-col items-center justify-center pt-[104px] md:pt-[176px] pb-12 px-6 overflow-hidden">

            <!-- Subtle white glow -->
            <div class="absolute inset-0 pointer-events-none overflow-hidden">
                <div class="absolute -top-40 left-[20%] w-[700px] h-[700px] rounded-full bg-white/[0.03] blur-[140px] animate-float-slow"></div>
                <div class="absolute bottom-0 right-[20%] w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-[120px] animate-float-slower"></div>
            </div>

            <!-- Subtle grid -->
            <div class="absolute inset-0 pointer-events-none"
                style="background-image:linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px);background-size:72px 72px;"></div>

            <!-- Content -->
            <div class="relative z-10 w-full max-w-5xl mx-auto text-center">

                <!-- Headline -->
                <h1 class="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-7 animate-fade-in-up text-white"
                    style="animation-delay:.06s">
                    Your AI got you 70%.<br>
                    <span class="text-white/60">We handle the rest.</span>
                </h1>

                <!-- Sub -->
                <p class="text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up text-white/40"
                    style="animation-delay:.12s">
                    Vibe coded project in production? Get instant help from senior software engineers.
                    Code audit, API integration, code optimization, database migration, customized service & more.
                </p>

                <!-- CTAs -->
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-20 animate-fade-in-up"
                    style="animation-delay:.18s">
                    <a href="https://app.qodeshark.com/book"
                        class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black text-base bg-white transition-all hover:bg-white/90 hover:scale-[1.02]">
                        Book free consultation
                    </a>
                    <RouterLink to="/codeaudit"
                        class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white/70 text-base transition-all hover:text-white hover:border-white/30"
                        style="border:1px solid rgba(255,255,255,0.15)">
                        View audit services
                    </RouterLink>
                </div>

                <!-- Engineering dashboard card -->
                <div class="animate-fade-in-up" style="animation-delay:.24s">
                    <div class="relative max-w-5xl mx-auto rounded-2xl overflow-hidden"
                        style="background:#0a0a0a;border:1px solid rgba(255,255,255,0.1);box-shadow:0 32px 64px rgba(0,0,0,0.5)">

                        <!-- Window chrome -->
                        <div class="flex items-center gap-2 px-5 py-3.5"
                            style="border-bottom:1px solid rgba(255,255,255,0.06);background:#111">
                            <span class="w-3 h-3 rounded-full bg-white/20"></span>
                            <span class="w-3 h-3 rounded-full bg-white/20"></span>
                            <span class="w-3 h-3 rounded-full bg-white/20"></span>
                            <span class="flex-1 text-center text-xs text-white/25 font-mono">QodeShark Engineering</span>
                            <span class="flex items-center gap-1.5 text-xs text-white/60 font-semibold">
                                <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                                {{ visibleCount }} active
                            </span>
                        </div>

                        <!-- Column headers -->
                        <div class="grid grid-cols-12 gap-2 px-3 sm:px-5 py-2.5 text-[10px] font-semibold uppercase tracking-widest text-white/20"
                            style="border-bottom:1px solid rgba(255,255,255,0.04)">
                            <div class="col-span-5">Service</div>
                            <div class="col-span-3 sm:col-span-4">Progress</div>
                            <div class="col-span-3 sm:col-span-2 text-center">Status</div>
                            <div class="col-span-1 text-right">Eng</div>
                        </div>

                        <div style="height:420px;overflow:hidden">
                            <template v-for="(row, i) in dashboardRows" :key="`${loopCycle}-${i}`">
                                <ServiceRow v-if="i < visibleCount" v-bind="row" delay="0s" />
                            </template>
                        </div>

                        <!-- Footer -->
                        <div class="flex items-center justify-between px-5 py-3.5 text-xs"
                            style="border-top:1px solid rgba(255,255,255,0.05);background:#111">
                            <span class="text-white/25 font-mono">{{ secondsAgo === 0 ? 'Updated just now' : `Updated ${secondsAgo}s ago` }}</span>
                            <a href="https://app.qodeshark.com/book"
                                class="inline-flex items-center gap-1 font-semibold text-white/60 hover:text-white transition-colors">
                                Start a project
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Platform logos -->
                <div class="mt-16 animate-fade-in-up" style="animation-delay:.35s">
                    <p class="text-xs font-semibold uppercase tracking-widest text-white/20 mb-5">
                        Works with code from any AI platform
                    </p>
                    <div class="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                        <div class="flex items-center w-max animate-marquee">
                            <div v-for="(logo, i) in [...platforms, ...platforms]" :key="logo.name + i"
                                class="flex items-center justify-center w-28 h-10 mx-6 flex-shrink-0">
                                <img :src="logo.src" :alt="logo.name"
                                    class="max-w-full max-h-full object-contain"
                                    :style="{
                                        filter: ['Manus','Gamma','Claude'].includes(logo.name) ? 'brightness(0) invert(1)' : '',
                                        transform: ['Cursor','Gamma','base44'].includes(logo.name) ? 'scale(1.6)' : '',
                                    }" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- ─── STATS BAR ─── -->
        <section class="py-14 px-6" style="border-top:1px solid rgba(255,255,255,0.06)">
            <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                <div v-for="s in statsBar" :key="s.label" class="text-center">
                    <div class="text-3xl sm:text-4xl font-extrabold text-white mb-1">{{ s.value }}</div>
                    <div class="text-xs text-white/35 font-medium uppercase tracking-wider">{{ s.label }}</div>
                </div>
            </div>
        </section>

        <!-- ─── SERVICES TEASER ─── -->
        <section class="py-12 md:py-24 px-6" style="border-top:1px solid rgba(255,255,255,0.06)">
            <div class="max-w-6xl mx-auto">

                <!-- Header row -->
                <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                    <div>
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 text-white/50"
                            style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">
                            What we do
                        </div>
                        <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
                            Fix it. Build it. Ship it.<br>
                            <span class="text-white/40">For vibe-coded projects.</span>
                        </h2>
                    </div>
                    <RouterLink to="/services"
                        class="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white/60 hover:text-white transition-colors"
                        style="border:1px solid rgba(255,255,255,0.12)">
                        See all services
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                    </RouterLink>
                </div>

                <!-- Service two-column grid -->
                <div class="grid sm:grid-cols-2 gap-x-12 gap-y-0">
                    <div v-for="(svc, i) in servicesList" :key="svc.name"
                        class="flex items-center gap-3 py-3.5"
                        :style="i < servicesList.length - 2 || servicesList.length % 2 === 1 && i < servicesList.length - 1 ? 'border-bottom:1px solid rgba(255,255,255,0.06)' : ''">
                        <span class="text-sm font-semibold text-white/80">{{ svc.name }}</span>
                        <span class="ml-auto text-xs flex-shrink-0" style="color:rgba(255,255,255,0.25)">{{ svc.price }}</span>
                    </div>
                </div>

                <!-- CTA strip -->
                <div class="mt-12 flex flex-col sm:flex-row items-center gap-4">
                    <a href="https://app.qodeshark.com/book"
                        class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black text-base bg-white transition-all hover:bg-white/90 hover:scale-[1.02]">
                        Book free consultation
                    </a>
                    <span class="text-sm text-white/30">First session free · No commitment</span>
                </div>
            </div>
        </section>

        <!-- ─── HOW IT WORKS ─── -->
        <section class="py-14 md:py-28 px-6" style="border-top:1px solid rgba(255,255,255,0.06)">
            <div class="max-w-5xl mx-auto">
                <div class="text-center max-w-2xl mx-auto mb-10 md:mb-16">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-5 text-white/50"
                        style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">
                        How it works
                    </div>
                    <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
                        From booking to clean code<br><span class="text-white/40">in three steps.</span>
                    </h2>
                </div>

                <div class="grid md:grid-cols-3 gap-6 relative">
                    <!-- Connector line (desktop only) -->
                    <div class="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px" style="background:rgba(255,255,255,0.07)"></div>

                    <div v-for="step in howItWorks" :key="step.step"
                        class="relative flex flex-col rounded-2xl p-7"
                        style="background:#1c1c1c;border:1px solid rgba(255,255,255,0.08)">
                        <!-- Step number -->
                        <div class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold mb-6 flex-shrink-0"
                            style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);color:rgba(255,255,255,0.6)">
                            {{ step.step }}
                        </div>
                        <h3 class="text-lg font-bold text-white mb-3">{{ step.title }}</h3>
                        <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.4)">{{ step.desc }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ─── TEAM TEASER ─── -->
        <section class="py-12 md:py-24 px-6" style="border-top:1px solid rgba(255,255,255,0.06)">
            <div class="max-w-6xl mx-auto">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-8">

                    <!-- Left: copy -->
                    <div class="max-w-lg">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 text-white/50"
                            style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">
                            Our team
                        </div>
                        <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-[1.08]">
                            The engineers<br>
                            <span class="text-white/40">behind the work.</span>
                        </h2>
                        <p class="text-white/35 text-base leading-relaxed mb-6">
                            Real senior engineers — not outsourced, not AI. 20 specialists across full-stack, mobile, database, DevOps, and more.
                        </p>
                        <RouterLink to="/team"
                            class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white/60 hover:text-white transition-colors"
                            style="border:1px solid rgba(255,255,255,0.12)">
                            Meet the team
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                        </RouterLink>
                    </div>

                    <!-- Right: avatar cluster -->
                    <div class="flex flex-wrap gap-3 max-w-xs">
                        <div v-for="member in teamPreview" :key="member.name" class="relative group">
                            <img :src="member.photo" :alt="member.name"
                                class="w-14 h-14 rounded-full object-cover transition-transform group-hover:scale-110"
                                style="border:2px solid rgba(255,255,255,0.12)" />
                            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded-lg text-[10px] font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                style="background:#111;border:1px solid rgba(255,255,255,0.12)">
                                {{ member.name }}
                            </div>
                        </div>
                        <RouterLink to="/team"
                            class="w-14 h-14 rounded-full flex items-center justify-center text-xs font-bold text-white/50 hover:text-white transition-colors"
                            style="border:2px dashed rgba(255,255,255,0.15)">
                            +14
                        </RouterLink>
                    </div>

                </div>
            </div>
        </section>

        <!-- ─── GUARANTEE ─── -->
        <section class="py-14 md:py-28 px-6" style="border-top:1px solid rgba(255,255,255,0.06)">
            <div class="max-w-5xl mx-auto">
                <div class="text-center max-w-2xl mx-auto mb-10 md:mb-16">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-5 text-white/50"
                        style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">
                        Our promise
                    </div>
                    <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
                        Built on trust.<br><span class="text-white/40">Backed by guarantees.</span>
                    </h2>
                </div>
                <div class="grid sm:grid-cols-2 gap-5">
                    <div v-for="g in guarantees" :key="g.title"
                        class="flex items-start gap-5 rounded-2xl p-7"
                        style="background:#1c1c1c;border:1px solid rgba(255,255,255,0.08)">
                        <div class="text-2xl flex-shrink-0 mt-0.5">{{ g.icon }}</div>
                        <div>
                            <h3 class="text-base font-bold text-white mb-2">{{ g.title }}</h3>
                            <p class="text-sm leading-relaxed mb-3" style="color:rgba(255,255,255,0.4)">{{ g.desc }}</p>
                            <a v-if="g.download" :href="g.download.href" download
                                class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white transition-all hover:bg-white/20"
                                style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.2)">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                                {{ g.download.label }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ─── CASE STUDIES ─── -->
        <section class="py-14 md:py-28 px-6" style="border-top:1px solid rgba(255,255,255,0.06)">
            <div class="max-w-5xl mx-auto">
                <div class="text-center max-w-2xl mx-auto mb-10 md:mb-16">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-5 text-white/50"
                        style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">
                        Case studies
                    </div>
                    <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
                        Real projects.<br><span class="text-white/40">Real results.</span>
                    </h2>
                </div>
                <div class="grid md:grid-cols-3 gap-5">
                    <div v-for="cs in caseStudies" :key="cs.title"
                        class="flex flex-col rounded-2xl overflow-hidden"
                        style="background:#1c1c1c;border:1px solid rgba(255,255,255,0.08)">
                        <!-- Top bar -->
                        <div class="px-6 pt-6 pb-4" style="border-bottom:1px solid rgba(255,255,255,0.06)">
                            <div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
                                style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.4)">
                                {{ cs.service }}
                            </div>
                            <h3 class="text-base font-bold text-white leading-snug">{{ cs.title }}</h3>
                        </div>
                        <!-- Problem / Result -->
                        <div class="flex flex-col flex-1 px-6 py-5 gap-4">
                            <div>
                                <div class="text-[10px] font-bold uppercase tracking-widest mb-1.5" style="color:rgba(255,255,255,0.25)">Problem</div>
                                <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.45)">{{ cs.problem }}</p>
                            </div>
                            <div>
                                <div class="text-[10px] font-bold uppercase tracking-widest mb-1.5" style="color:rgba(255,255,255,0.25)">Result</div>
                                <p class="text-sm leading-relaxed font-semibold text-white">{{ cs.result }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ─── COMPARISON ─── -->
        <section class="py-14 md:py-28 px-6" style="border-top:1px solid rgba(255,255,255,0.06)">
            <div class="max-w-4xl mx-auto">
                <div class="text-center max-w-2xl mx-auto mb-10 md:mb-16">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-5 text-white/50"
                        style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">
                        Why QodeShark
                    </div>
                    <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
                        The smarter choice<br><span class="text-white/40">for vibe coded projects.</span>
                    </h2>
                </div>

                <!-- Table -->
                <div class="rounded-2xl overflow-hidden" style="border:1px solid rgba(255,255,255,0.08)">
                    <!-- Header -->
                    <div class="grid grid-cols-3 text-xs font-bold uppercase tracking-widest px-3 sm:px-6 py-4"
                        style="background:#1c1c1c;border-bottom:1px solid rgba(255,255,255,0.08)">
                        <div class="col-span-1 text-white/30">Feature</div>
                        <div class="text-center text-white">QodeShark</div>
                        <div class="text-center text-white/30">Freelancer</div>
                    </div>
                    <!-- Rows -->
                    <div v-for="(row, i) in comparisonRows" :key="row.feature"
                        class="grid grid-cols-3 items-center px-3 sm:px-6 py-4 text-sm"
                        :style="i % 2 === 0 ? 'background:#181818' : 'background:#1c1c1c'">
                        <div class="col-span-1 font-medium" style="color:rgba(255,255,255,0.55)">{{ row.feature }}</div>
                        <div class="flex justify-center">
                            <span v-if="row.qs === true" class="text-white text-base">✓</span>
                            <span v-else class="text-xs font-semibold text-white">{{ row.qs }}</span>
                        </div>
                        <div class="flex justify-center">
                            <span v-if="row.fl === true" class="text-white/40 text-base">✓</span>
                            <span v-else-if="row.fl === false" style="color:rgba(255,255,255,0.2)">✕</span>
                            <span v-else class="text-xs" style="color:rgba(255,255,255,0.35)">{{ row.fl }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ─── TESTIMONIALS ─── -->
        <section class="py-28 px-6 overflow-hidden" style="border-top:1px solid rgba(255,255,255,0.06)">
            <div class="max-w-6xl mx-auto">

                <!-- Header -->
                <div class="text-center max-w-2xl mx-auto mb-10 md:mb-16">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-5 text-white/50"
                        style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">
                        Client stories
                    </div>
                    <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-5 leading-[1.08]">
                        What our clients say.
                    </h2>
                    <div class="flex items-center justify-center gap-2">
                        <div class="flex items-center gap-0.5">
                            <span v-for="i in 5" :key="i" class="w-4 h-4 grid place-items-center rounded-sm bg-white">
                                <svg width="9" height="9" viewBox="0 0 24 24" fill="black"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                            </span>
                        </div>
                        <span class="text-white/40 text-sm">5.0 · Verified clients</span>
                    </div>
                </div>

                <!-- Vertical scrolling columns -->
                <div class="relative" style="height:680px;overflow:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent,black 12%,black 88%,transparent);mask-image:linear-gradient(to bottom,transparent,black 12%,black 88%,transparent)">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
                        <!-- Column 1 -->
                        <div class="scroll-col" style="--dur:32s">
                            <TestimonialCard v-for="(r,i) in [...col1, ...col1]" :key="'c1-'+i" v-bind="r" />
                        </div>
                        <!-- Column 2 -->
                        <div class="scroll-col hidden sm:flex" style="--dur:24s">
                            <TestimonialCard v-for="(r,i) in [...col2, ...col2]" :key="'c2-'+i" v-bind="r" />
                        </div>
                        <!-- Column 3 -->
                        <div class="scroll-col hidden lg:flex" style="--dur:28s">
                            <TestimonialCard v-for="(r,i) in [...col3, ...col3]" :key="'c3-'+i" v-bind="r" />
                        </div>
                    </div>
                </div>

                <!-- Trustpilot CTA -->
                <div class="mt-12 text-center">
                    <a href="https://www.trustpilot.com/evaluate/fullcodereview.com" target="_blank" rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>
                        Leave a review on Trustpilot
                    </a>
                </div>

            </div>
        </section>

        <!-- ─── FINAL CTA ─── -->
        <section class="py-14 md:py-28 px-6" style="border-top:1px solid rgba(255,255,255,0.06)">
            <div class="max-w-3xl mx-auto text-center">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-8 text-white/50"
                    style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">
                    <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0"></span>
                    Engineers available now
                </div>
                <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
                    Your project deserves<br>proper engineering.
                </h2>
                <p class="text-lg text-white/40 leading-relaxed mb-10 max-w-xl mx-auto">
                    Book a free 30-minute consultation. No commitment, no pressure — just a senior engineer who tells you exactly what your project needs.
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="https://app.qodeshark.com/book"
                        class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black text-base bg-white transition-all hover:bg-white/90 hover:scale-[1.02]">
                        Book free consultation
                    </a>
                    <RouterLink to="/codeaudit"
                        class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white/60 text-base transition-all hover:text-white"
                        style="border:1px solid rgba(255,255,255,0.12)">
                        View audit services
                    </RouterLink>
                </div>
            </div>
        </section>

        <!-- ─── FAQ ─── -->
        <section class="py-14 md:py-28 px-6" style="border-top:1px solid rgba(255,255,255,0.06)">
            <div class="max-w-3xl mx-auto">

                <!-- Header -->
                <div class="text-center mb-16">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-5 text-white/50"
                        style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">
                        FAQ
                    </div>
                    <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
                        Common questions.
                    </h2>
                </div>

                <!-- Accordion -->
                <div class="flex flex-col">
                    <div v-for="(item, i) in faqs" :key="i"
                        style="border-bottom:1px solid rgba(255,255,255,0.07)">
                        <button
                            class="w-full flex items-center justify-between gap-4 py-5 text-left group"
                            @click="openFaq = openFaq === i ? null : i">
                            <span class="text-base font-semibold transition-colors"
                                :style="openFaq === i ? 'color:rgba(255,255,255,1)' : 'color:rgba(255,255,255,0.7)'">
                                {{ item.q }}
                            </span>
                            <!-- +/× icon -->
                            <span class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all"
                                :style="openFaq === i
                                    ? 'background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2)'
                                    : 'background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)'">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    :style="openFaq === i ? 'color:white' : 'color:rgba(255,255,255,0.4)'"
                                    class="transition-transform duration-200"
                                    :class="openFaq === i ? 'rotate-45' : 'rotate-0'">
                                    <path d="M12 5v14M5 12h14" />
                                </svg>
                            </span>
                        </button>

                        <!-- Answer (animated expand) -->
                        <div class="overflow-hidden transition-all duration-300 ease-in-out"
                            :style="openFaq === i ? 'max-height:400px;opacity:1' : 'max-height:0;opacity:0'">
                            <p class="pb-5 leading-relaxed text-sm" style="color:rgba(255,255,255,0.45)">
                                {{ item.a }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Bottom CTA -->
                <div class="mt-16 text-center">
                    <p class="text-white/30 mb-6 text-sm">Still have questions? We're happy to answer them on the call.</p>
                    <a href="https://app.qodeshark.com/book"
                        class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black text-base bg-white transition-all hover:bg-white/90 hover:scale-[1.02]">
                        Book a free consultation
                    </a>
                </div>

            </div>
        </section>

        <Footer />

        <!-- Floating help button -->
        <div class="fixed bottom-6 right-6 z-50 group">
            <div class="absolute bottom-16 right-0 w-64 rounded-xl shadow-2xl border border-white/10 bg-ink-900 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <p class="text-sm font-semibold mb-1">Not sure where to start?</p>
                <p class="text-xs text-ink-100/70">Book a free call with one of our senior engineers.</p>
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
import { h, ref, onMounted } from "vue"
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import { initTheme } from "../composables/useTheme.js"

const secondsAgo = ref(0)
const visibleCount = ref(0)
const loopCycle = ref(0)

const dashboardRows = [
    { emoji: "📋", name: "Code Audit",            detail: "Security · backend · database · PDF report", progress: 100, status: "delivered",   engPhoto: "/Team Profiles/Anel Kujovic.jpeg" },
    { emoji: "💳", name: "Payment Integration",  detail: "Stripe + webhooks + retry logic",           progress: 72,  status: "in-progress", engPhoto: "/Team Profiles/Toretto Young.png", animated: true },
    { emoji: "🛠️", name: "Code Optimization",    detail: "N+1 queries fixed · 8s → 400ms",            progress: 100, status: "complete",    engPhoto: "/Team Profiles/Thomas Wright.jpg" },
    { emoji: "🗃️", name: "Database Migration",   detail: "Supabase → PostgreSQL · zero data loss",    progress: 56,  status: "in-progress", engPhoto: "https://randomuser.me/api/portraits/men/50.jpg", animated: true },
    { emoji: "🔌", name: "API Implementation",   detail: "REST endpoints · third-party integrations", progress: 39,  status: "in-progress", engPhoto: "https://randomuser.me/api/portraits/men/60.jpg", animated: true },
    { emoji: "☁️", name: "Codebase Migration",    detail: "Replit → Vercel · configs + CI/CD setup",   progress: 0,  status: "queued",      engPhoto: "https://randomuser.me/api/portraits/men/10.jpg" },
]

function runLoop() {
    visibleCount.value = 0
    loopCycle.value++
    secondsAgo.value = 0

    let i = 0
    const addNext = () => {
        if (i < dashboardRows.length) {
            visibleCount.value = ++i
            setTimeout(addNext, 750)
        } else {
            // All rows visible — pause, then clear and restart
            setTimeout(runLoop, 3500)
        }
    }
    setTimeout(addNext, 500)
}

onMounted(() => {
    initTheme()
    setInterval(() => secondsAgo.value++, 1000)
    runLoop()
})

// ── FAQ ────────────────────────────────────────────────────────────────────

const openFaq = ref(null)

const faqs = [
    {
        q: "How do I get started?",
        a: "Book the free 30-minute consultation — it's the first step for every project. We'll review what you've built, identify what needs fixing or building, and give you a clear plan and quote. No commitment required.",
    },
    {
        q: "Can you work on AI-generated code?",
        a: "That's exactly our specialty. We work with vibe-coded projects every day — whether built with Cursor, Lovable, Bolt, v0, Replit, or any other AI platform. If your AI built it, we can clean it, fix it, or extend it.",
    },
    {
        q: "How long does each service take?",
        a: "Most services are completed within 2–5 business days. More complex work — like full project rebuilds or large database migrations — may take longer, but we'll give you an accurate timeline before work begins.",
    },
    {
        q: "What if I'm not happy with the result?",
        a: "We offer a 30-day money-back guarantee. If you're not satisfied with the delivered work, we'll make it right or refund you in full — no questions asked, no back-and-forth.",
    },
    {
        q: "What tech stacks do you support?",
        a: "We work across the full stack: React, Next.js, Vue, Node.js, Python, FastAPI, Supabase, Firebase, PostgreSQL, MongoDB, Stripe, and more. If your AI platform built it, we can work on it.",
    },
    {
        q: "Do you sign NDAs?",
        a: "Yes. We sign an NDA before any work begins. Your code, your data, and your project idea are treated as strictly confidential — we never share or reuse client code.",
    },
    {
        q: "How does pricing work?",
        a: "Services start at $20. Each service has a published starting price, and for more complex or custom work we'll scope and quote it after the free consultation. No hidden fees — you approve the price before anything starts.",
    },
    {
        q: "Do I own the code when it's done?",
        a: "100%. All delivered work is pushed to your repository or handed off as a ZIP. You own everything — the code, configs, documentation. We retain no rights to anything we build for you.",
    },
]

const platforms = [
    { name: "base44",             src: "/Platforms/base44.png" },
    { name: "bolt.new",           src: "/Platforms/bolt.new.png" },
    { name: "Claude",             src: "/Platforms/Claude.png" },
    { name: "CodeX",              src: "/Platforms/CodeX.png" },
    { name: "Cursor",             src: "/Platforms/Cursor.png" },
    { name: "Gamma",              src: "/Platforms/Gamma.png" },
    { name: "Google Antigravity", src: "/Platforms/Google Antigravity.png" },
    { name: "Lovable",            src: "/Platforms/Lovable.png" },
    { name: "Manus",              src: "/Platforms/Manus.png" },
    { name: "Replit",             src: "/Platforms/Replit.png" },
    { name: "v0",                 src: "/Platforms/v0.png" },
    { name: "Windsurf",           src: "/Platforms/Windsurf.png" },
]

// ── Services teaser ────────────────────────────────────────────────────────

const servicesList = [
    { emoji: "🎙️", name: "Technical Consultation", price: "$20 / session" },
    { emoji: "🔍", name: "Code Audit",              price: "From $20"     },
    { emoji: "🔒", name: "Auth Implementation",      price: "From $200"    },
    { emoji: "🔌", name: "API Implementation",       price: "From $250"    },
    { emoji: "🧹", name: "Code Optimization",       price: "From $300"    },
    { emoji: "⚙️", name: "Complex Feature Building", price: "From $300"    },
    { emoji: "💳", name: "Payment Implementation",   price: "From $350"    },
    { emoji: "☁️", name: "Codebase Migration",       price: "From $350"    },
    { emoji: "🗃️", name: "Database Migration",       price: "From $400"    },
    { emoji: "🛢️", name: "Database Implementation",  price: "From $450"    },
    { emoji: "🏗️", name: "Project Rebuild",          price: "Custom"       },
    { emoji: "✨", name: "Customized Service",        price: "Custom"       },
]

// kept for reference (moved to ServicesPage)
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
        price: "From $200",
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
        price: "From $250",
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

// ── Stats bar ──────────────────────────────────────────────────────────────

const statsBar = [
    { value: "1200+",  label: "Projects delivered" },
    { value: "4.9★",  label: "Trustpilot rating" },
    { value: "48hr",   label: "Avg turnaround" },
    { value: "30-day", label: "Money-back guarantee" },
]

// ── How it works ───────────────────────────────────────────────────────────

const howItWorks = [
    {
        step: "01",
        title: "Book a free consultation",
        desc: "30 minutes with a senior engineer. Tell us what you're building, what's broken, or where you're stuck. No commitment required.",
    },
    {
        step: "02",
        title: "We scope & start building",
        desc: "Clear quote, fixed timeline, you approve before anything starts. We sign an NDA and assign the right engineer for your project.",
    },
    {
        step: "03",
        title: "Clean code delivered",
        desc: "Your finished code pushed directly to your repository with documentation. 30-day money-back guarantee included on every service.",
    },
]

// ── Guarantees ─────────────────────────────────────────────────────────────

const guarantees = [
    {
        icon: "🛡️",
        title: "30-day money-back guarantee",
        desc: "Not satisfied with the delivered work? We'll make it right or refund you in full — no questions asked, no back-and-forth.",
    },
    {
        icon: "🔒",
        title: "NDA signed before work begins",
        desc: "Your code, your data, and your project idea are strictly confidential. We sign an NDA before seeing a single line of your codebase.",
        download: { label: "Download our NDA", href: "/QodeShark NDA.pdf" },
    },
    {
        icon: "👨‍💻",
        title: "Real engineers — no outsourcing",
        desc: "Every project is handled by one of our in-house senior engineers. We never outsource your work to third parties.",
    },
    {
        icon: "💬",
        title: "Direct communication",
        desc: "You work directly with the engineer building your project — via Zoom and chat. No account managers, no ticket queues.",
    },
]

// ── Case studies ───────────────────────────────────────────────────────────

const caseStudies = [
    {
        service: "Payment Implementation",
        title: "Stripe subscriptions silently failing",
        problem: "An e-commerce founder was losing revenue every week — Stripe webhooks were failing silently with no retry logic or alerts in place.",
        result: "Rebuilt the entire webhook handler with retry logic and recovery emails. Zero failed payments in the following 30 days.",
    },
    {
        service: "Code Optimization",
        title: "Dashboard loading in 9 seconds",
        problem: "A SaaS app became unusable at 150 concurrent users. N+1 database queries and missing indexes were killing performance.",
        result: "Load time dropped from 9s to 340ms after eliminating N+1 queries, adding proper indexing, and implementing a caching layer.",
    },
    {
        service: "Auth Implementation",
        title: "Unprotected admin endpoints before SOC2",
        problem: "A healthtech startup discovered critical auth gaps a week before their SOC2 audit — unprotected routes and no rate limiting.",
        result: "Implemented OAuth 2.0 + JWT refresh tokens, rate limiting, and audit logging. SOC2 audit passed without findings.",
    },
]

// ── Comparison ─────────────────────────────────────────────────────────────

const comparisonRows = [
    { feature: "Fixed pricing upfront",     qs: true,  fl: "Sometimes" },
    { feature: "Delivery guarantee",         qs: true,  fl: false       },
    { feature: "30-day money-back",          qs: true,  fl: false       },
    { feature: "NDA included",               qs: true,  fl: "Sometimes" },
    { feature: "No outsourcing",             qs: true,  fl: "Varies"    },
    { feature: "Direct engineer access",     qs: true,  fl: true        },
    { feature: "Senior-level experience",    qs: true,  fl: "Varies"    },
    { feature: "Vibe code expertise",        qs: true,  fl: false       },
]

// ── Team teaser (first 6 for avatar cluster on home page) ─────────────────

const teamPreview = [
    { name: "Anel Kujovic",  photo: "/Team Profiles/Anel Kujovic.jpeg" },
    { name: "Toretto Young", photo: "/Team Profiles/Toretto Young.png" },
    { name: "Alex Madera",   photo: "/Team Profiles/Alex Madera.png" },
    { name: "Sky Li",        photo: "/Team Profiles/Sky Li.PNG" },
    { name: "Thomas Wright", photo: "/Team Profiles/Thomas Wright.jpg" },
    { name: "Andy West",     photo: "/Team Profiles/Andy West.jpg" },
]

// ── Team ───────────────────────────────────────────────────────────────────

const team = [
    {
        name: "Anel Kujovic",
        role: "Senior Full-Stack Engineer",
        specialty: "Web, Android & iOS Development",
        photo: "/Team Profiles/Anel Kujovic.jpeg",
        tags: ["React", "Node.js", "Android", "iOS", "Vue"],
        linkedin: "https://www.linkedin.com/in/anel-kujovic-20692b141/",
    },
    {
        name: "Toretto Young",
        role: "Full-Stack Engineer",
        specialty: "Authentication, Stripe & Supabase",
        photo: "/Team Profiles/Toretto Young.png",
        tags: ["Auth", "Stripe", "Supabase", "Next.js"],
        linkedin: "https://www.linkedin.com/in/toretto-young-376b141b5/",
    },
    {
        name: "Alex Madera",
        role: "Android Full-Stack Engineer",
        specialty: "Android App Development",
        photo: "/Team Profiles/Alex Madera.png",
        tags: ["Android", "Kotlin", "Java", "Firebase"],
    },
    {
        name: "Sky Li",
        role: "Backend Engineer",
        specialty: "Python & Backend Development",
        photo: "/Team Profiles/Sky Li.PNG",
        tags: ["Python", "FastAPI", "PostgreSQL", "AWS"],
    },
    {
        name: "Thomas Wright",
        role: "Senior Backend Engineer",
        specialty: "API Architecture & Database Design",
        photo: "/Team Profiles/Thomas Wright.jpg",
        tags: ["Node.js", "PostgreSQL", "REST APIs", "Redis"],
    },
    {
        name: "Andy West",
        role: "Full-Stack Engineer",
        specialty: "React, Next.js & Cloud Infrastructure",
        photo: "/Team Profiles/Andy West.jpg",
        tags: ["React", "Next.js", "TypeScript", "AWS"],
    },
    {
        name: "Sam Holloway",
        role: "DevOps Engineer",
        specialty: "Docker, Kubernetes & CI/CD Pipelines",
        photo: "https://randomuser.me/api/portraits/men/10.jpg",
        tags: ["Docker", "Kubernetes", "GitHub Actions", "AWS"],
    },
    {
        name: "Ryan O'Brien",
        role: "Senior Backend Engineer",
        specialty: "Go, gRPC & Microservices Architecture",
        photo: "https://randomuser.me/api/portraits/men/20.jpg",
        tags: ["Go", "gRPC", "Microservices", "PostgreSQL"],
    },
    {
        name: "Lucas Ferreira",
        role: "Mobile Engineer",
        specialty: "React Native & Cross-Platform Development",
        photo: "https://randomuser.me/api/portraits/men/30.jpg",
        tags: ["React Native", "Expo", "iOS", "Android"],
    },
    {
        name: "Daniel Park",
        role: "Full-Stack Engineer",
        specialty: "Next.js, Prisma & Vercel",
        photo: "https://randomuser.me/api/portraits/men/40.jpg",
        tags: ["Next.js", "Prisma", "Vercel", "TypeScript"],
    },
    {
        name: "Omar Hassan",
        role: "Backend Engineer",
        specialty: "Python, Django & REST APIs",
        photo: "https://randomuser.me/api/portraits/men/50.jpg",
        tags: ["Python", "Django", "FastAPI", "Celery"],
    },
    {
        name: "Marcus Thompson",
        role: "Senior Engineer",
        specialty: "Node.js, AWS & System Architecture",
        photo: "https://randomuser.me/api/portraits/men/60.jpg",
        tags: ["Node.js", "AWS", "Lambda", "DynamoDB"],
    },
    {
        name: "Nina Kovach",
        role: "Full-Stack Engineer",
        specialty: "Laravel, Vue.js & MySQL",
        photo: "https://randomuser.me/api/portraits/women/45.jpg",
        tags: ["Laravel", "Vue.js", "MySQL", "PHP"],
    },
    {
        name: "Jake Morrison",
        role: "Senior Frontend Engineer",
        specialty: "React, Vue & TypeScript",
        photo: "https://randomuser.me/api/portraits/men/15.jpg",
        tags: ["React", "Vue", "TypeScript", "Tailwind"],
    },
    {
        name: "Ethan Clarke",
        role: "Full-Stack Engineer",
        specialty: "REST APIs, WebSockets & Third-Party Integrations",
        photo: "https://randomuser.me/api/portraits/men/22.jpg",
        tags: ["Node.js", "WebSockets", "REST APIs", "AWS"],
    },
    {
        name: "Liam Walsh",
        role: "Full-Stack Engineer",
        specialty: "PHP, Laravel & MySQL",
        photo: "https://randomuser.me/api/portraits/men/35.jpg",
        tags: ["PHP", "Laravel", "MySQL", "Vue.js"],
    },
    {
        name: "David Kim",
        role: "Mobile Engineer",
        specialty: "Swift & iOS Development",
        photo: "https://randomuser.me/api/portraits/men/45.jpg",
        tags: ["Swift", "iOS", "Xcode", "Firebase"],
    },
    {
        name: "Chris Anderson",
        role: "Database Engineer",
        specialty: "PostgreSQL, MySQL & Redis",
        photo: "https://randomuser.me/api/portraits/men/55.jpg",
        tags: ["PostgreSQL", "MySQL", "Redis", "Supabase"],
    },
    {
        name: "Nathan Nguyen",
        role: "Full-Stack Engineer",
        specialty: "Django, React & AWS",
        photo: "https://randomuser.me/api/portraits/men/65.jpg",
        tags: ["Django", "React", "AWS", "Python"],
    },
    {
        name: "Kevin Park",
        role: "Backend Engineer",
        specialty: "Java, Spring Boot & Microservices",
        photo: "https://randomuser.me/api/portraits/men/75.jpg",
        tags: ["Java", "Spring Boot", "Kafka", "Docker"],
    },
]

// ── Testimonials ───────────────────────────────────────────────────────────

const allTestimonials = [
    {
        name: "Luca Martini",
        role: "Solo founder · SaaS",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        service: "Auth Implementation",
        title: "Saved me weeks of debugging",
        body: "I spent three weeks trying to get OAuth working with JWT refresh tokens. QodeShark implemented the whole auth system in two days — clean, secure, and documented. I just plugged it in.",
    },
    {
        name: "Sara Kim",
        role: "Vibe coder · e-commerce",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        service: "Payment Implementation",
        title: "Stripe live in 48 hours",
        body: "Had a half-broken Stripe setup — payments worked but webhooks were silently failing. They rebuilt the whole integration with proper retry logic and webhook verification. Went live 48 hours later.",
    },
    {
        name: "Devon Richards",
        role: "Indie hacker · marketplace",
        photo: "https://randomuser.me/api/portraits/men/15.jpg",
        service: "Technical Consultation",
        title: "Best $20 I've ever spent",
        body: "The free call alone saved me from rebuilding my entire backend. In 30 minutes they pointed out exactly what was wrong and gave me a clear fix. Hired them on the spot for the implementation.",
    },
    {
        name: "Priya Sharma",
        role: "CTO · B2B SaaS",
        photo: "https://randomuser.me/api/portraits/women/23.jpg",
        service: "Database Migration",
        title: "Zero data loss, zero downtime",
        body: "We migrated 4 years of production data from self-hosted Postgres to Supabase. Ran overnight. Zero data loss, zero downtime. I was expecting chaos — it was the smoothest migration we've ever done.",
    },
    {
        name: "James Okafor",
        role: "Vibe coder · fintech",
        photo: "https://randomuser.me/api/portraits/men/51.jpg",
        service: "Code Optimization",
        title: "App went from 8s to 400ms",
        body: "My dashboard was loading in 8 seconds at 200 users. After the optimization — N+1 queries, missing indexes, a couple race conditions — it's under 400ms. Users noticed immediately.",
    },
    {
        name: "Aisha Ndiaye",
        role: "Founder · internal tooling",
        photo: "https://randomuser.me/api/portraits/women/65.jpg",
        service: "Complex Feature Building",
        title: "Shipped what I was stuck on for 2 months",
        body: "I'd been vibe-coding a reporting module for two months and kept hitting walls. They scoped it in the consultation, built it in four days, and walked me through the code. Exactly what I needed.",
    },
    {
        name: "Marcus Torres",
        role: "Eng lead · marketplace",
        photo: "https://randomuser.me/api/portraits/men/28.jpg",
        service: "API Implementation",
        title: "Saved our third-party integration deadline",
        body: "We had a shipping partner API that had to go live in a week. QodeShark built the full integration — auth, retries, webhooks, error handling — in three days. Clean code, well documented.",
    },
    {
        name: "Elena Vasquez",
        role: "Founder · productivity app",
        photo: "https://randomuser.me/api/portraits/women/12.jpg",
        service: "Codebase Migration",
        title: "Migrated from Replit to Vercel without breaking a thing",
        body: "My whole app was living on Replit and I needed to move it to a proper host. They handled the entire migration — environment variables, configs, CI/CD setup. Not a single thing broke.",
    },
    {
        name: "Ryan Blake",
        role: "Solo dev · analytics SaaS",
        photo: "https://randomuser.me/api/portraits/men/7.jpg",
        service: "Database Implementation",
        title: "Proper schema design from the start",
        body: "I was about to launch with a flat table structure that would've fallen apart at scale. They redesigned the schema, set up proper relations, indexes, and row-level security on Supabase. Launched with confidence.",
    },
    {
        name: "Sophie Laurent",
        role: "Vibe coder · edtech",
        photo: "https://randomuser.me/api/portraits/women/38.jpg",
        service: "Project Rebuild",
        title: "Unrecognisable — in the best way",
        body: "My app worked but the codebase was a nightmare. After the rebuild I could actually read my own code. Performance doubled, the bugs stopped, and I can now ship features without things breaking.",
    },
    {
        name: "Nathan Kowalski",
        role: "CTO · healthtech startup",
        photo: "https://randomuser.me/api/portraits/men/62.jpg",
        service: "Code Audit",
        title: "Found 3 critical issues before our SOC2 audit",
        body: "We ran a Code Audit a week before our SOC2 audit. Found three critical auth gaps — unprotected admin endpoints, a leaking JWT secret, and missing rate limits. Fixed all of them in two days. Audit passed.",
    },
    {
        name: "Fatima Al-Rashid",
        role: "Indie founder · B2C app",
        photo: "https://randomuser.me/api/portraits/women/58.jpg",
        service: "Customized Service",
        title: "They built exactly what I described",
        body: "I had a very specific requirement that didn't fit any standard service. They scoped it on the call, quoted me fairly, and delivered it exactly as described. No back and forth, no surprises.",
    },
    {
        name: "Chris Weston",
        role: "Full-stack dev · consulting",
        photo: "https://randomuser.me/api/portraits/men/41.jpg",
        service: "Auth Implementation",
        title: "Multi-tenant auth done right",
        body: "Building multi-tenant SaaS auth is hard to get right. They implemented it with proper org isolation, role-based permissions, and SSO support. Something I'd been putting off for six months — done in a week.",
    },
    {
        name: "Zara Hassan",
        role: "E-commerce founder",
        photo: "https://randomuser.me/api/portraits/women/19.jpg",
        service: "Payment Implementation",
        title: "Finally got subscriptions working",
        body: "I'd tried to set up Stripe subscriptions twice before and given up both times. QodeShark did it properly — billing cycles, proration, cancellations, failed payment recovery. It just works.",
    },
    {
        name: "Oliver Chen",
        role: "Vibe coder · B2B tool",
        photo: "https://randomuser.me/api/portraits/men/76.jpg",
        service: "Technical Consultation",
        title: "30 minutes clarified my entire architecture",
        body: "I was about to start building a microservices setup for a 3-person startup. The consultation talked me out of it and showed me a much simpler approach. Saved me months of over-engineering.",
    },
]

// Split into 3 columns (staggered, not round-robin so each column has varied content)
const col1 = allTestimonials.filter((_, i) => i % 3 === 0)
const col2 = allTestimonials.filter((_, i) => i % 3 === 1)
const col3 = allTestimonials.filter((_, i) => i % 3 === 2)

const TestimonialCard = {
    props: ["name", "role", "photo", "service", "title", "body"],
    setup(props) {
        return () => h("div", {
            class: "flex flex-col rounded-2xl p-5 mb-4 flex-shrink-0",
            style: "background:#1c1c1c;border:1px solid rgba(255,255,255,0.08)",
        }, [
            // Stars + service tag
            h("div", { class: "flex items-center justify-between mb-3" }, [
                h("div", { class: "flex items-center gap-0.5" }, [
                    ...Array.from({ length: 5 }, () =>
                        h("svg", { width: 11, height: 11, viewBox: "0 0 24 24", fill: "white" }, [
                            h("polygon", { points: "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" }),
                        ])
                    ),
                ]),
                h("span", {
                    class: "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full truncate max-w-[120px]",
                    style: "color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08)",
                }, props.service),
            ]),

            // Title
            h("h3", { class: "font-bold text-white mb-2 leading-snug text-sm" }, props.title),

            // Body
            h("p", { class: "text-sm leading-relaxed flex-1 mb-4", style: "color:rgba(255,255,255,0.45);font-size:0.8rem" }, props.body),

            // Author
            h("div", { class: "flex items-center gap-3 pt-3", style: "border-top:1px solid rgba(255,255,255,0.06)" }, [
                h("img", {
                    src: props.photo,
                    alt: props.name,
                    class: "w-8 h-8 rounded-full object-cover flex-shrink-0",
                    style: "border:1px solid rgba(255,255,255,0.12)",
                }),
                h("div", { class: "min-w-0" }, [
                    h("div", { class: "text-sm font-semibold text-white truncate" }, props.name),
                    h("div", { class: "text-xs truncate", style: "color:rgba(255,255,255,0.3)" }, props.role),
                ]),
            ]),
        ])
    },
}

// ── Dashboard card helpers ──────────────────────────────────────────────────

const statusConfig = {
    "delivered":   { label: "Delivered",   color: "rgba(255,255,255,0.85)", bg: "rgba(255,255,255,0.08)", border: "rgba(255,255,255,0.2)"  },
    "in-progress": { label: "In progress", color: "rgba(255,255,255,0.65)", bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.15)" },
    "complete":    { label: "Complete",    color: "rgba(255,255,255,0.55)", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.12)" },
    "queued":      { label: "Queued",      color: "rgba(255,255,255,0.25)", bg: "rgba(255,255,255,0.03)", border: "rgba(255,255,255,0.08)" },
}

const ServiceRow = {
    props: ["emoji", "name", "detail", "progress", "status", "engPhoto", "animated", "delay"],
    setup(props) {
        const cfg = statusConfig[props.status]
        const displayPct = ref(0)
        const displayWidth = ref(0)

        onMounted(() => {
            if (!props.animated) return
            const duration = 2000
            const startDelay = 800
            setTimeout(() => {
                const startTime = Date.now()
                const tick = setInterval(() => {
                    const elapsed = Date.now() - startTime
                    const t = Math.min(elapsed / duration, 1)
                    const eased = 1 - Math.pow(1 - t, 3)
                    displayPct.value = Math.round(eased * props.progress)
                    displayWidth.value = eased * props.progress
                    if (t >= 1) clearInterval(tick)
                }, 16)
            }, startDelay)
        })

        return () => {
            const isActive = props.status === "in-progress"
            return h("div", {
                class: `grid grid-cols-12 gap-2 items-center px-3 sm:px-5 py-3.5 transition-colors hover:bg-white/[0.02] row-enter${isActive ? " row-active" : ""}`,
                style: `border-bottom:1px solid rgba(255,255,255,0.04);animation-delay:${props.delay || "0s"}`,
            }, [
                h("div", { class: "col-span-5 min-w-0", style: "display:grid;grid-template-columns:18px 1fr;gap:6px;align-items:center" }, [
                    h("span", { style: "font-size:13px;line-height:1;text-align:center;overflow:hidden" }, props.emoji),
                    h("div", { class: "min-w-0", style: "text-align:left" }, [
                        h("div", { class: "text-sm font-semibold text-white truncate" }, props.name),
                        h("div", { class: "text-[11px] text-white/30 mt-0.5 font-mono truncate overflow-hidden" }, props.detail),
                    ]),
                ]),
                h("div", { class: "col-span-3 sm:col-span-4" }, [
                    props.status === "queued"
                        ? h("span", { class: "text-xs text-white/20 font-mono" }, "—")
                        : h("div", { class: "flex items-center gap-2" }, [
                            h("div", { class: "flex-1 h-1 rounded-full overflow-hidden relative", style: "background:rgba(255,255,255,0.06)" }, [
                                h("div", {
                                    class: props.animated ? "h-full rounded-full relative overflow-hidden" : "h-full rounded-full",
                                    style: `width:${props.animated ? displayWidth.value : props.progress}%;background:rgba(255,255,255,${props.animated ? 0.7 : 0.5});transition:width 0.05s linear`,
                                }, props.animated ? [
                                    h("span", { class: "progress-shimmer" }),
                                ] : []),
                            ]),
                            h("span", { class: "text-[11px] font-mono flex-shrink-0", style: `color:${cfg.color}` },
                                props.progress === 100 ? "100%" : `${props.animated ? displayPct.value : props.progress}%`
                            ),
                        ]),
                ]),
                h("div", { class: "col-span-3 sm:col-span-2 flex justify-center" }, [
                    h("span", {
                        class: `inline-flex items-center text-[7px] sm:text-[10px] font-bold uppercase tracking-wider px-1 sm:px-2 py-0.5 rounded-full whitespace-nowrap${isActive ? " badge-pulse" : ""}`,
                        style: `color:${cfg.color};background:${cfg.bg};border:1px solid ${cfg.border}`,
                    }, cfg.label),
                ]),
                h("div", { class: "col-span-1 flex justify-end" }, [
                    props.engPhoto
                        ? h("div", {
                            class: "w-7 h-7 rounded-full overflow-hidden flex-shrink-0",
                            style: "border:1px solid rgba(255,255,255,0.15)",
                        }, [
                            h("img", {
                                src: props.engPhoto,
                                class: "w-full h-full object-cover",
                            })
                        ])
                        : h("span", { class: "text-xs text-white/20 font-mono" }, "—"),
                ]),
            ])
        }
    },
}

// ── Service card (services grid) ───────────────────────────────────────────

const ServiceCard = {
    props: ["img", "title", "desc", "price", "badge", "cta"],
    setup(props) {
        return () => h("a", {
            href: "https://app.qodeshark.com/book",
            class: "group flex flex-col rounded-2xl overflow-hidden transition-all hover:border-white/25",
            style: "background:#0a0a0a;border:1px solid rgba(255,255,255,0.1)",
        }, [
            // Image — fully visible, no overlay
            h("div", { class: "relative overflow-hidden flex items-center justify-center", style: "height:180px;background:#ffffff;padding:20px" }, [
                h("img", {
                    src: props.img,
                    alt: props.title,
                    class: "max-w-full max-h-full object-contain",
                    style: "opacity:1",
                }),
                // Badge
                props.badge
                    ? h("div", {
                        class: "absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white",
                        style: "background:rgba(0,0,0,0.75);border:1px solid rgba(255,255,255,0.2);backdrop-filter:blur(8px)",
                    }, props.badge)
                    : null,
            ]),

            // Divider
            h("div", { style: "height:1px;background:rgba(255,255,255,0.08)" }),

            // Content
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

const Stat = {
    setup(_, { slots }) {
        return () => h("div", { class: "text-center" }, [
            h("div", { class: "text-2xl font-extrabold text-white leading-none mb-1" }, slots.value?.()),
            h("div", { class: "text-xs text-white/30 font-medium" }, slots.label?.()),
        ])
    },
}

const Divider = {
    render: () => h("div", { class: "hidden sm:block w-px h-8 bg-white/10" }),
}
</script>

<style scoped>
@keyframes progress-fill {
    from { width: 0% }
    to   { width: 72% }
}
.progress-animated {
    animation: progress-fill 2s ease-out 0.8s both;
}

@keyframes row-enter {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
}
.row-enter {
    animation: row-enter 0.45s ease-out both;
}

@keyframes border-pulse {
    0%, 100% { box-shadow: inset 3px 0 0 rgba(255,255,255,0.18); }
    50%       { box-shadow: inset 3px 0 0 rgba(255,255,255,0.5);  }
}
.row-active {
    animation: row-enter 0.45s ease-out both, border-pulse 2.5s ease-in-out 1.2s infinite;
}

/* Blinking cursor */
@keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
}
.blink-cursor {
    animation: blink 1s step-end infinite;
    color: rgba(255,255,255,0.4);
}

/* Progress bar shimmer sweep */
@keyframes shimmer-sweep {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(300%); }
}
.progress-shimmer {
    position: absolute;
    inset: 0;
    width: 40%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
    animation: shimmer-sweep 2s ease-in-out 1s infinite;
}

/* In-progress badge glow */
@keyframes badge-glow {
    0%, 100% { opacity: 0.7; }
    50%       { opacity: 1; box-shadow: 0 0 6px rgba(255,255,255,0.2); }
}
.badge-pulse {
    animation: badge-glow 2s ease-in-out infinite;
}

@keyframes marquee-reverse {
    from { transform: translateX(-50%); }
    to   { transform: translateX(0); }
}
.animate-marquee-reverse {
    animation: marquee-reverse 35s linear infinite;
}

@keyframes scroll-vertical {
    from { transform: translateY(0); }
    to   { transform: translateY(-50%); }
}
.scroll-col {
    display: flex;
    flex-direction: column;
    animation: scroll-vertical var(--dur, 28s) linear infinite;
}
.scroll-col:hover {
    animation-play-state: paused;
}
</style>
