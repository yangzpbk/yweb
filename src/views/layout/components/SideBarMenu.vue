<!--
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-06-07 16:53:52
 * @FilePath: \yweb\src\views\layout\components\SideBarMenu.vue
-->
<template>
    <!-- background-color="#21252b" text-color="hsla(0, 0%, 100%, 0.95)" -->
    <el-menu class="menuEle" menu-trigger="hover" unique-opened router>
        <side-bar-menu-item :menuList="routesMenu" />
    </el-menu>
</template>

<script>
import SideBarMenuItem from "@/views/layout/components/SideBarMenuItem.vue";

export default {
    components: {
        SideBarMenuItem,
    },
    data() {
        return {
            routesMenu: []
        }
    },
    mounted() {
        this.getRoutes();
    },
    methods: {
        getRoutes() {
            this.routesMenu = this.$router.options.routes[1].children;
            console.log(this.routesMenu);
        }
    },
}
</script>

<style lang="scss" scoped>
.menuEle {
    min-height: 100%;
}

.el-menu-item .is-active {
    background-color: #ff335c !important;
    color: #fff;

    span {
        color: #fff !important;
    }
}
</style>