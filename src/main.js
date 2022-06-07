import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router';

import routes from './routes'
import App from './App.vue'

import './index.css'

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')