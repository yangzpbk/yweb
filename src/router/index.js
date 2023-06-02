/*
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-02-16 16:17:47
 * @FilePath: \yweb\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
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
                path: '/index/uploadBigFile',
                name: 'uploadFile',
                component: UploadFileView
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
