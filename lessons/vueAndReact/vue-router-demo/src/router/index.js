// 路由配置
import {
    createRouter, //创建路由实例
    createWebHashHistory//路由模式
} from 'vue-router' // 插件

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PostIndex from '../views/posts/index/Post-index.vue'
import PostShow from '../views/show/Post-show.vue'
import PostMeta from '../views/posts/meta/Post-meta.vue'

//页面级别组件
// 创建路由实例

// 文章模块
const postRoutes = [
    {
        path: '/',
        name: 'home',//路由名称
        component: Home, //页面组件
        // 路由向页面级别组件传参
        meta: {
            requireAuth: false,
            title: '首页'
        }
    },
    {
        path: '/about',
        name: 'about',//路由名称
        meta: {
            requireAuth: true
        },
        component: About
    },
    {
        path: '/posts/:postId',
        component: PostShow,
        name: 'postShow',
        props: true,
        meta: {
            title: '文章详情'
        },
        //子路由 路由嵌套
        children: [
            {
                path: 'meta',
                component: PostMeta
            }
        ]
    }
]


const routes = [

    {
        path: '/posts/index',
        component: PostIndex,
        props: {
            sort: 'popular'
        },
        meta: {
            title: '文章列表'
        }
    },
    {
        path: '/posts/:postId',//动态路由
        component: PostShow,

    },
    ...postRoutes
]
// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(), // 路由模式
    routes // 路由配置数组
})

// 每次路由的切换都会执行这个回调
router.beforeEach((to, from, next) => {
    document.title = to.meta.titlez
    if (to.meta.requireAuth) {
        console.log('需要登录')
        next('/login')
    }
    next()
})

export default router