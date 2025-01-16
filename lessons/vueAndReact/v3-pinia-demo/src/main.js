import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// vue全家桶的最后一个 状态管理库
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app
.use(pinia)
.mount('#app')
