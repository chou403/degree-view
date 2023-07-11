import { RouteRecordRaw } from 'vue-router'

const homeRoutes: Array<RouteRecordRaw> = [
    {
        // 路由重定向配置
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: () => import('@/views/home.vue')
    }, {
        path: '/login',
        component: () => import('@/views/login.vue')
    }
]

export default homeRoutes
