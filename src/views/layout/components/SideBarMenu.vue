<!--
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-06-07 16:53:52
 * @FilePath: \yweb\src\views\layout\components\SideBarMenu.vue
-->
<template>
    <div>
        <el-menu background-color="#21252b" text-color="hsla(0, 0%, 100%, 0.95)" active-text-color="hsla(0, 0%, 100%, 0.95)"
            router>
            <side-bar-menu-item :menuList="routesMenu" />
        </el-menu>
    </div>
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
            this.routesMenu = this.$router.options.routes;
            console.log(this.routesMenu);
        }
    },
}
</script>

<style lang="scss" scoped></style>