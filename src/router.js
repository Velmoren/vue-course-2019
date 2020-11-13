//default
import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

//pages
import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import Shop from '@/pages/Shop'
import Product from '@/pages/Product'

// routing
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/shop/:id',
            name: 'product',
            component: Product
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
    ]
})
