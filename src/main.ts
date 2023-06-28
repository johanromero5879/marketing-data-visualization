import { createApp } from 'vue'
import { createPinia } from "pinia"
import VueApexCharts from "vue3-apexcharts"

import './style.css'
import App from './App.vue'
import Router from "./router"


const app = createApp(App)

app.use(createPinia())
app.use(Router)
app.use(VueApexCharts)

app.mount('#app')
