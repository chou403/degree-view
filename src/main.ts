import './style.css'
import 'lib-flexible'
import 'virtual:windi.css'

import { createApp } from 'vue'
import App from './App.vue'
import route from './routers'
import pinia from './stores'
import http from './apis'

const app = createApp(App)

app.config.globalProperties.$http = http

app.use(route)
app.use(pinia)

app.mount('#app')
