import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import App from './App.vue'
import { router } from './router/index.ts'

const app = createApp(App)

const pinia = createPinia()// 创建一个pinia实例

app
.use(pinia)
.use(router)
.mount('#app')
