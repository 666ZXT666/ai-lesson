// 路由配置
import { createRouter, //创建路由实例
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

    },
    {
        path: '/about',
        name: 'about',//路由名称
        component: About 
    },
    {
        path: '/posts/:postId',
        component: PostShow,
        name: 'postShow',
        props: true,
        //子路由 路由嵌套
        children: [
{
    path:'meta',
    component: PostMeta
}
        ]
    }
]


const routes = [

    {
        path: '/posts/index',
        component: PostIndex,
        props:{
            sort:'popular'
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


export default router