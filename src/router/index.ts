import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: () => import("../components/Home/index.vue")
    },
    {
        path: '/leibie/:index',
        name: 'leibie',
        component: () => import("../components/leibie/index.vue")
    },
    {
        path: '/leibie/:index/page/:page',
        name: 'leibiePage',
        component: () => import("../components/leibie/index.vue")
    },
    {
        path: '/leibie/:index/id/:id',
        name: 'leibiexiangxi',
        component: () => import("../components/detailed/index.vue")
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
