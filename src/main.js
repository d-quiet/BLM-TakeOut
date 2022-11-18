import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/router'
import 'vant/lib/index.css';
import Vant from 'vant'
import axios from './utils/https'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(createPinia()).use(router).use(Vant).mount('#app')
