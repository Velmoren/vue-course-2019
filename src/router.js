//default
import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

//pages
import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import Example from '@/pages/Example'

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
            path: '/example',
            name: 'example',
            component: Example
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        }
    ]
})
