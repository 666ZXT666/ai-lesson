import { createRouter, createWebHistory } from 'vue-router'

// 路由配置数组
const routes = [
    {
        path:'/',
        name:'Home',
        meta:{
            title:'首页',
            requireLogin:true
        },
        // 路由懒加载
        component:()=>import('../views/Home.vue'),
        children:[
            {
                path:'about',
                name:'About',
                component:()=>import('../views/About.vue'),
                meta:{
                    title:'关于',
                    requireLogin:true
                }
            }
        ]
    },
    {
        path:'/login',
        name:'Login',
        meta:{
            title:'登录',
            requireLogin:false
        },
        component:()=>import('../views/Login.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 路由守卫
router.beforeEach((to,from,next)=>{
    document.title = to.meta.title || ''
    if(to.meta.requireLogin){
        if(localStorage.getItem('token')){
            next()
        }else{
            next('/login')
        }
        return
    }
        next()
    
})

export default router