/*
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-02-16 16:17:47
 * @FilePath: \yweb\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/login/LoginView.vue';
import IndexView from '@/views/layout/layout.vue';
import UploadFileView from '@/views/file/UploadFileView.vue';

const routes = [
    {
        path: '/',
        name: 'login',
        component: LoginView
    },
    {
        path: '/index',
        name: 'index',
        component: IndexView,
        children: [
            {
                path: "/index/home",
                name: 'home',
                component: () => import('@/views/HomeView.vue'),
                meta: { title: 'home', access: 0 }
            },
            {
                path: '/index/uploadFile',
                name: 'uploadFile',
                component: UploadFileView
            },
            {
                path: '/index/UploadBigFile',
                name: 'UploadBigFileView',
                component: () => import('@/views/file/UploadBigFileView.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
