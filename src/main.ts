// import Vue, { createApp} from '@vue/compat';
import { createApp } from 'vue';
import { createPinia } from 'pinia'
import piniaPersistedPlugin from 'pinia-plugin-persistedstate'

import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import BootstrapVue from 'bootstrap-vue';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'element-plus/dist/index.css'
import './assets/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router'

// Vue.use(BootstrapVue);
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

const pinia = createPinia()
pinia.use(piniaPersistedPlugin)

app.use(ElementPlus)
app.use(pinia)
app.use(router)

// config axios
import axios from 'axios'
import { useAuthStore } from './stores/auth';
const authStore = useAuthStore()
axios.defaults.baseURL = import.meta.env.VITE_BASE_API
axios.defaults.headers.common['Authorization'] = authStore.token ? `Bearer ${authStore.token}` : ''

app.mount('#app')
