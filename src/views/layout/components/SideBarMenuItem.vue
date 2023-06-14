<!--
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-02-28 10:07:47
 * @FilePath: \yweb\src\views\layout\components\SideBarMenuItem.vue
-->
<template>
    <div v-for="item of menuList">
        <el-sub-menu v-if="(item.children && item.children.length > 0)" :key="item.path" :value="item.path"
            :index="item.path">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>{{ item.meta.title }}</span>
            </template>
            <side-bar-menu-item :menuList="item.children"></side-bar-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="item.path"  class="submenu-title-noDropdown">
            <el-icon>
                <MagicStick />
            </el-icon>
            <span>{{ item.meta.title }}</span></el-menu-item>
    </div>
</template>

<script>
export default {
    name: "SideBarMenuItem",
    props: {
        menuList: {
            type: Array,
            default: []
        },
        isNest: {
            type: Boolean,
            default: false
        },
    },
}
</script>
<style  scoped>
.el-menu-item .is-active {
    background-color: #13f4e5 !important;
    color: #fff;

    /* span {
        color: #fff !important;
    } */
}
</style>