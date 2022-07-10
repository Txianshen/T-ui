import VueRouter from "vue-router"
const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:()=>import("@/views/home.vue")
    },
    {
        path:"/components",
        component:()=>import("@/views/container/container.vue"),
        children:[
            {
                path:'/components/Button',
                component:()=>import('@/views/button/button.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode:'hash',
    routes
})

export default router