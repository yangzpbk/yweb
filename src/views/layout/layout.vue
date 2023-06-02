<!--
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-02-28 15:20:24
 * @FilePath: \yweb\src\views\layout\layout.vue
-->
<template>
    <div>
        <el-container style="height: 1000px; border: 1px solid #eee">
            <el-aside width="200px">
                <Menu></Menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Menu from "@/views/layout/components/menu.vue"
export default {
    components: {
        Menu,
    },
}
</script>

<style lang="scss" scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>