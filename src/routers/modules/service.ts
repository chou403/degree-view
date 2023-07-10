import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
    {
        // 路由重定向配置
        path: '/',
        redirect: '/Home'
    }, {
        path: '/Home',
        component: () => import('@/views/home.vue')
    }
]

