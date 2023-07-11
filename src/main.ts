import './style.css'
import 'lib-flexible'
import 'virtual:windi.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routers'
import pinia from '@/stores/pinia'
import api from '@/apis'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(api)

app.mount('#app')
