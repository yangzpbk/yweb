<!--
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-06-07 16:53:52
 * @FilePath: \yweb\src\views\layout\components\SideBarMenu.vue
-->
<template>
    <el-menu :default-active="activeMenu" :collapse="isCollapse" background-color="#304156" text-color="#bfcbd9"
        :unique-opened="true" :active-text-color="variables.menuActiveText" router mode="vertical">
       
        <!-- <logo :collapse="isCollapse" /> -->
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <side-bar-menu-item :menuList="routesMenu" />
        </el-scrollbar>
    </el-menu>
</template>

<script>
import variables from '@/style/variables.scss';
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
    computed: {
        // isCollapse() {
        //     return !this.sidebar.opened
        // },
        variables() {
            return variables
        },
    },
}
</script>

<style lang="scss" scoped>
.menuEle {
    min-height: 100%;
}
</style>