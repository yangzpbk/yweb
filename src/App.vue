<!--
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-02-16 16:17:47
 * @FilePath: \yweb\src\App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Layout from "@/views/layout/layout.vue"
export default {
  name: 'App',
  components: {
    Layout,
  },
}
</script>

<style lang="scss">
// 引入初始化样式
@import '@/style/main.scss';
@import '@/style/base.scss';
@import '@/style/mobile.scss';

#app {
  background: rgb(255, 255, 255);
  height: 100vh;
  overflow: hidden;
  font-weight: 400 !important;
}

html,
body {
  margin: 0;
  height: 100%;
}

.el-button {
  font-weight: 400 !important;
}
</style>