
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
                path: '/addrmanage',
                name: 'addrmanage',
                component: () => import('../views/txl/list.vue'),
                children:[
                    {//内部通讯录页面
                        path:'/nbList',
                        name:'nbList',
                        component: () => import('../views/txl/txlChildren/nbList.vue')
                    }
                ]
            },
            //考勤管理
            {
                path: '/attendceatt',
                name: 'attendceatt',
                component: () => import('../views/kqgl/kq_list.vue'),
            },
            {
                path: '/newaddliucheng',
                name: 'newaddliucheng',
                component: () => import('../views/liuchengguanli/xinjianliucheng/newLiuCheng.vue'),

            },
            {
                path: '/feiYong',
                name: 'feiYong',
                component: () => import('../views/liuchengguanli/xinjianliucheng/feiYong.vue'),

            },
            {
                path: '/chuChai',
                name: 'chuChai',
                component: () => import('../views/liuchengguanli/xinjianliucheng/chuChai.vue'),

            },
            {//加班申请页面
                path: '/workOver',
                name: 'workOver',
                component: () => import('../views/liuchengguanli/xinjianliucheng/workOver.vue'),
            },
            {//我的申请
                path: '/flowmanage',
                name: 'flowmanage',
                component: () => import('../views/liuchengguanli/myRequest/myRequest_index.vue'),
            },
            {//我的申请详情
                path: '/myRequestDetail',
                name: 'myRequestDetail',
                component: () => import('../views/liuchengguanli/myRequest/myRequestDetail.vue'),
            },
        ]
    },

]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
