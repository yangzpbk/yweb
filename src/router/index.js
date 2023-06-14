/*
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-02-16 16:17:47
 * @FilePath: \yweb\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/login/LoginView.vue';
import Layout from '@/views/layout/layout.vue';

const constantRoutes = [
    {
        path: '/',
        name: 'login',
        component: LoginView,
        meta: { title: '登录', noCache: true, affix: true }
    },
    {
        path: '/index',
        name: 'index',
        component: Layout,
        meta: { title: '首页', noCache: true, affix: true },
        children: [
            {
                name: 'backlog',
                path: "/index/backlog",
                meta: { title: '任务处理', noCache: true, affix: true },
                children: [
                    {
                        path: "/index/backlog/MyAllBacklog",
                        name: 'MyAllBacklog',
                        component: () => import('@/views/backlog/MyAllBacklog.vue'),
                        meta: { title: '我的所有待办', noCache: true, affix: true },
                    },
                ]
            },
            {
                name: 'file',
                path: "/index/file",
                meta: { title: '文件管理', noCache: true, affix: true },
                children: [
                    {
                        path: '/index/file/uploadFile',
                        name: 'uploadFile',
                        component: () => import('@/views/file/UploadFileView.vue'),
                        meta: { title: '上传文件5m', noCache: true, affix: true }
                    },
                    {
                        path: '/index/file/UploadBigFile',
                        name: 'UploadBigFileView',
                        component: () => import('@/views/file/UploadBigFileView.vue'),
                        meta: { title: '上传文件大文件', noCache: true, affix: true }
                    }
                ]
            },
            {
                name: 'form',
                path: "/index/form",
                meta: { title: '表单管理', noCache: true, affix: true },
                children: [
                    {
                        path: '/index/form/moreStepForm',
                        name: 'moreStepForm',
                        component: () => import('@/views/form/moreStepForm.vue'),
                        meta: { title: '分步表单', noCache: true, affix: true }
                    }
                ]
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: constantRoutes
})

export default router
