import { createRouter, createWebHistory } from "vue-router"
import HomePage from "../pages/HomePage.vue"
import AuditPage from "../pages/AuditPage.vue"
import PricingPage from "../pages/PricingPage.vue"
import ServicesPage from "../pages/ServicesPage.vue"
import TeamPage from "../pages/TeamPage.vue"

const routes = [
    { path: "/", component: HomePage },
    { path: "/codeaudit", component: AuditPage },
    { path: "/pricing", component: PricingPage },
    { path: "/services", component: ServicesPage },
    { path: "/team", component: TeamPage },
]

export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) return { el: to.hash, behavior: "smooth" }
        if (savedPosition) return savedPosition
        return { top: 0 }
    },
})
