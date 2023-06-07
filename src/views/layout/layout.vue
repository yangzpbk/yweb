<!--
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-02-28 15:20:24
 * @FilePath: \yweb\src\views\layout\layout.vue
-->
<template>
    <div class="vue-admin-beautiful-wrapper">
        <el-container>
            <el-aside class="aside">
                <side-bar-menu></side-bar-menu>
            </el-aside>
            <el-main class="main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import SideBarMenu from "@/views/layout/components/SideBarMenu.vue";
export default {
    components: {
        SideBarMenu,
    },
}
</script>

<style lang="scss" scoped>
.vue-admin-beautiful-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.main {
    position: relative;
    min-height: 100%;
    margin-left: 256px;
    // background: #f6f8f9;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border 0s, background 0s, color 0s, font-size 0s;
}

.aside {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 256px;
    height: 100vh;
    overflow: hidden;
    background: #21252b;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    transition: width 0.3s;
}
</style>