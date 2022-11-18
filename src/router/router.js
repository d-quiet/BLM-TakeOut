// 引用两个函数，一个是创建路由createRouter、createWebHistory路由模式
import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载
const login = () => import('../views/login/Login.vue')
const Register = () => import('../views/register/Register.vue')
const Home = () => import('../views/home/Home.vue')
const Shop = () => import('../views/shop/Shop.vue')
const ShopCar = () => import('../views/shopcar/ShopCar.vue')
// 路由映射表
const routes = [
    {
        path: '/', redirect: (to) => {
            // 做判断，判断跳转到哪
            return { path: '/login' }
        },
        children: [{
            path: '/home',
            component: Home,
            name: 'home'
        }]
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/shop/:id',
        name: 'shop',
        component: Shop
    },
    {
        path: '/shopcar',
        name: 'shopcat',
        component: ShopCar
    },
]

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router