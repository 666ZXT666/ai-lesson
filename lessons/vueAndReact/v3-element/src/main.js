import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'
import{
    ElButton,
    ElForm,
    ElFormItem,
    ElInput,
    ElCheckbox,
    ElContainer,
    ElHeader,
    ElMenu,
    ElMenuItem,
    ElSubMenu,
    ElMain,
    ElAside
} from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

createApp(App)
.use(router)
.use(createPinia())
.use(ElButton)
.use(ElForm)
.use(ElFormItem)
.use(ElInput)
.use(ElCheckbox)
.use(ElContainer)
.use(ElHeader)
.use(ElMenu)
.use(ElMenuItem)
.use(ElSubMenu)
.use(ElMain)
.use(ElAside)
.mount('#app')
