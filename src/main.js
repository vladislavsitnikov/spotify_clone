import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import piniaPlaginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPlaginPersistedstate)

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
