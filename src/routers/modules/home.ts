import { RouteRecordRaw } from 'vue-router'

// 路由懒加载
const Home = () => import('@/views/home.vue')
const Login = () => import('@/views/login.vue')

export const homeRoutes: Array<RouteRecordRaw> = [
    {
        // 路由重定向配置
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home
    }, {
        path: '/login',
        component: Login
    }
]