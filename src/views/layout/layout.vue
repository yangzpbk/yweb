<!--
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-02-28 15:20:24
 * @FilePath: \yweb\src\views\layout\layout.vue
-->
<template>
    <div class="vue-admin-beautiful-wrapper">
        <el-row style="padding: 0 !important;">
            <el-container>
                <el-aside>
                    <side-bar-menu class="aside"></side-bar-menu>
                </el-aside>
                <el-main><router-view></router-view></el-main>
            </el-container>
            <!-- <el-col :span="4" class="aside">
                <side-bar-menu></side-bar-menu>
            </el-col>
            <el-col :span="20" justify="center">
                <router-view></router-view>
            </el-col> -->
        </el-row>
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
    display: inline-block;
}

.aside {
    height: 100vh;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.1);
    transition: width 0.3s;
}
</style>