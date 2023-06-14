/*
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-02-16 16:17:47
 * @FilePath: \yweb\src\main.js
 */
import { createApp } from 'vue';
import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';
import store from './store';
import service from "@/utils/service.js";
import yangzpApi from "@/api/yangzpApi.js";
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

// 引入初始化样式
import '@/style/main.scss' // global css

const app = createApp(App);
app.config.globalProperties.$service = service;
app.config.globalProperties.yangzpApi = yangzpApi
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(store).use(router).use(ElementPlus).mount('#app');
