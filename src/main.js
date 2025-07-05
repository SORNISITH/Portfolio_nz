import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n' // Assuming you have an i18n.js file for internationalization
const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
