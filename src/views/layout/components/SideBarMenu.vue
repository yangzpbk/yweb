<!--
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-06-07 16:53:52
 * @FilePath: \yweb\src\views\layout\components\SideBarMenu.vue
-->
<template>
    <el-menu class="menuEle" active-text-color="#ffd04b" text-color="#fff" background-color="#545c64" menu-trigger="hover" unique-opened
        router>
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
            // console.log(this.routesMenu);
        }
    },
}
</script>

<style lang="scss" scoped>
.menuEle {
    min-height: 100%;
}
</style>