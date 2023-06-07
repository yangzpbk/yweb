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
            <side-bar-menu-item :menuList="routes" />
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
            routes: []
        }
    },
    mounted() {
        this.getRoutes();
    },
    methods: {
        getRoutes() {
            this.routes = this.$router.options.routes.slice(1)[0].children;
            console.log(this.routes);
        }
    },
}
</script>

<style lang="scss" scoped></style>



                    <!-- <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <location />
                            </el-icon>
                            <span>任务总览</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/index/home">待办</el-menu-item>
                            <el-menu-item index="12">已办</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-sub-menu index="2">
                        <template #title>
                            <el-icon>
                                <location />
                            </el-icon>
                            <span>文件</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/index/uploadFile">上传文件</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <el-menu-item index="/index/uploadBigFile">上传大文件</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu> -->