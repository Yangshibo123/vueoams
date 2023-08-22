
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    /*主页*/
    {
        path: '/shouYeIndex',
        name: 'shouYeIndex',
        component: () => import('../views/shouye/shouye.vue'),

    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
