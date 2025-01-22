import { createRouter, createWebHistory } from 'vue-router'


const rootRoutes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      cache: true
    },
    component: () => import('../views/Home.vue'),
  },

  {
    path: '/assistant',
    name: 'Assistant',
    component: () => import('../views/Assistant/Assistant.vue'),
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: () => import('../views/Shopping/Shopping.vue'),
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My/Mine.vue'),
  }
]

const routes = [
  {
    path: '/app',
    name: 'App',
    component: () => import('../views/KeepAlive.vue'),
    redirect: '/home',
    children: rootRoutes
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string;
  next()
})
export { router }