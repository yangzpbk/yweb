<!--
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-02-16 16:20:27
 * @FilePath: \yweb\src\views\login\LoginView.vue
-->
<template>
    <div class="userLayout">
        <div class="login_panel">
            <div class="login_panel_form">
                <div class="login_panel_form_title">
                    <img class="login_panel_form_title_logo" :src="'https://www.gin-vue-admin.com/img/logo.png'" alt>
                    <p class="login_panel_form_title_p">Yweb-Vue-Admin</p>
                </div>
                <!-- <el-form ref="loginForm" :model="loginFormData" :rules="rules">
                    <el-form-item prop="username">
                        <el-input v-model="loginFormData.username" placeholder="请输入用户名" />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="loginFormData.password" show-password type="password" placeholder="请输入密码" />
                    </el-form-item>
                </el-form> -->
                <el-button type="primary" style="width: 46%" size="large" @click="checkInit">注册</el-button>
                <el-button type="primary" size="large" style="width: 46%; margin-left: 8%" @click="handleLogin">登
                    录</el-button>
            </div>
            <div class="login_panel_right"></div>
        </div>
</div>
</template>

<script>

export default {
    data() {
        return {
            loginFormData: {

            },
            rules: {},
            uploadUrl: process.env.VUE_APP_BASE_API,
        }
    },
    created() {
        // console.log(this.uploadUrl);
    },
    methods: {
        handleLogin() {
            this.$router.push({
                path:"/index"
            })
            
        }
    },
}
</script>

<style lang="scss" scoped>@import "@/style/newLogin.scss";</style>