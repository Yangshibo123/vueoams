
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    /*登录页*/
    {
        path: '/loginIndex',
        name: 'loginIndex',
        component: () => import('../views/admin/login.vue'),

    },
    /*主页*/
    {
        path: '/shouYeIndex',
        name: 'shouYeIndex',
        component: () => import('../views/admin/shouye.vue'),
        children:[
            {
                /*通讯录首页*/
                path: '/txl_list',
                name: 'txl_list',
                component: () => import('../views/txl/list.vue')
            }
        ]
    },
//考勤管理
    {
        path: '/attendceatt',
        name: 'attendceatt',
        component: () => import('../views/kqgl/kq_list.vue'),

    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
