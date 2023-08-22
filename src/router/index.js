
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    /*主页*/
    {
        path: '/shouYeIndex',
        name: 'shouYeIndex',
        component: () => import('../views/shouye/shouye.vue'),
        children:[
            {
                /*通讯录首页*/
                path: '/txl_list',
                name: 'txl_list',
                component: () => import('../views/txl/list.vue')
            }
        ]
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
