/*
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-02-16 16:17:47
 * @FilePath: \yweb\vue.config.js
 */
// const { defineConfig } = require('@vue/cli-service')
//在vue中使用proxy进行跨域的原理是：
//将域名发送给本地的服务器（启动vue项目的服务,loclahost:8080），
//再由本地的服务器去请求真正的服务器。
module.exports = {
    devServer: {
        port: 2000,
        proxy: {
            '/yangzp': {//表示拦截以/api开头的请求路径
                target: 'http://192.168.159.128:15000',
                changOrigin: true,//是否开启跨域
                ws: false, // 修改这里
                autoRewrite: true
            }
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }
}