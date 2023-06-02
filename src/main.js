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
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


const app = createApp(App);
app.config.globalProperties.$service = service;
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(store).use(router).use(ElementPlus).use(Antd).mount('#app');
