<!--
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-02-28 10:07:47
 * @FilePath: \yweb\src\views\layout\components\menu.vue
-->
<template>
    <div>
        <div>
            <el-row>
                <el-col>
                    <el-menu background-color="#21252b" text-color="hsla(0, 0%, 100%, 0.95)"
                        active-text-color="hsla(0, 0%, 100%, 0.95)" router>
                        <el-sub-menu index="1">
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
                        </el-sub-menu></el-menu>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="scss" scoped>
.top-bar-container {
    display: flex;
    align-items: center;
    justify-items: flex-end;

    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border 0s,
        background 0s, color 0s, font-size 0s;
    height: 100%;
    background: #21252b;

    .vab-main {
        background: #21252b;

        ::v-deep {
            .el-menu {
                &.el-menu--horizontal {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    height: 65px;
                    border-bottom: 0 solid transparent !important;

                    .el-menu-item,
                    .el-submenu__title {
                        padding: 0 15px;
                    }

                    @media only screen and (max-width: 767px) {

                        .el-menu-item,
                        .el-submenu__title {
                            padding: 0 8px;
                        }

                        li:nth-child(4),
                        li:nth-child(5) {
                            display: none !important;
                        }
                    }

                    >.el-menu-item {
                        height: 65px;
                        line-height: 65px;
                    }

                    >.el-submenu {
                        .el-submenu__title {
                            height: 65px;
                            line-height: 65px;
                        }
                    }
                }

                svg {
                    width: 1rem;
                    margin-right: 3px;
                }

                &--horizontal {
                    .el-menu {

                        .el-menu-item,
                        .el-submenu__title {
                            height: 50px;
                            line-height: 50px;
                        }
                    }

                    .el-submenu,
                    .el-menu-item {
                        &.is-active {
                            background-color: #409eff !important;
                            border-bottom: 0 solid transparent !important;

                            .el-submenu__title {
                                border-bottom: 0 solid transparent !important;
                            }
                        }
                    }

                    >.el-menu-item {
                        .el-tag {
                            margin-top: calc(65px / 2 - 7.5px);
                            margin-left: 5px;
                        }

                        @media only screen and (max-width: 1199px) {
                            .el-tag {
                                display: none;
                            }
                        }

                        &.is-active {
                            background-color: transparent !important;
                            border-bottom: 3px solid #409eff !important;
                        }
                    }
                }
            }
        }
    }
}
</style>