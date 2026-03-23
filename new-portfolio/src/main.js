import './assets/main.css'

import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.p-dark'
        }
    }
})
app.use(router)
app.mount('#app')


