import { createRouter, createWebHistory } from "vue-router"

import Dashboard from "./views/dashboard/DashboardView.vue"

const routes = [
    { path: "/", component: Dashboard }
]

export default createRouter({
    history: createWebHistory(),
    routes
})