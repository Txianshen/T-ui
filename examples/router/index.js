// import { createRouter,createWebHistory } from "vue-router";
import VueRouter from "vue-router"
const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:()=>import("@/views/home.vue")
    }
]

const router = new VueRouter({
    mode:'hash',
    routes
})

export default router