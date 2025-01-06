import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
//自动找到.index.js
import router from './router' // 路由对象

createApp(App) // vue -> 根组件
    // app对象有一个use方法，可以传入一个插件
    .use(router) // 使用路由插件
    .mount('#app') // 挂载