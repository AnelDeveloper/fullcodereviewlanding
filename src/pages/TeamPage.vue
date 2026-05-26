<template>
    <div class="relative min-h-screen bg-black">
        <Navbar />

        <!-- Header -->
        <section class="pt-36 pb-20 px-6 text-center">
            <div class="max-w-3xl mx-auto">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 text-white/50"
                    style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">
                    Our team
                </div>
                <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05] mb-5">
                    The engineers<br>
                    <span class="text-white/40">behind the work.</span>
                </h1>
                <p class="text-lg text-white/40 leading-relaxed max-w-xl mx-auto">
                    Real senior engineers — not outsourced, not AI. Every project is handled by an experienced developer with years of production-grade work.
                </p>
            </div>
        </section>

        <!-- Team grid -->
        <section class="pb-28 px-6" style="border-top:1px solid rgba(255,255,255,0.06)">
            <div class="max-w-6xl mx-auto pt-16">
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="member in team" :key="member.name"
                        class="flex flex-col items-center text-center rounded-2xl p-8"
                        style="background:#0a0a0a;border:1px solid rgba(255,255,255,0.08)">

                        <!-- Photo -->
                        <div class="mb-5 flex-shrink-0">
                            <img :src="member.photo" :alt="member.name"
                                class="w-20 h-20 rounded-full object-cover"
                                style="border:2px solid rgba(255,255,255,0.12)" />
                        </div>

                        <!-- Name & role -->
                        <div class="flex items-center justify-center gap-2 mb-1">
                            <h3 class="text-base font-bold text-white">{{ member.name }}</h3>
                            <a v-if="member.linkedin" :href="member.linkedin" target="_blank" rel="noopener noreferrer"
                                class="flex-shrink-0 transition-opacity opacity-40 hover:opacity-100"
                                aria-label="LinkedIn">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
                            </a>
                        </div>
                        <p class="text-sm font-semibold mb-1" style="color:rgba(255,255,255,0.55)">{{ member.role }}</p>
                        <p class="text-xs mb-5 leading-relaxed" style="color:rgba(255,255,255,0.3)">{{ member.specialty }}</p>

                        <!-- Tags -->
                        <div class="flex flex-wrap justify-center gap-1.5 mt-auto">
                            <span v-for="tag in member.tags" :key="tag"
                                class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
                                style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.45)">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- CTA -->
                <div class="mt-16 text-center">
                    <p class="text-white/30 mb-5 text-sm">Ready to work with our team?</p>
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
import { onMounted } from "vue"
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import { initTheme } from "../composables/useTheme.js"

onMounted(() => initTheme())

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
</script>
