/*
 * @Author: yangzp
 * @Description: 
 * @Date: 2023-02-24 11:56:26
 * @FilePath: \yweb\src\utils\service.js
 */
import axios from 'axios'
// import { ElMessage } from 'element-plus'
// import store from '@/store'
// import { getToken } from '@/utils/auth'
// import qs from 'qs'
// import cookieStore from '@/utils/common';
// Vue.prototype.$cookieStore = cookieStore;
// create an axios instance
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 10000 // request timeout
})
// request interceptor
// service.interceptors.request.use(
//     config => {
//         // do something before request is sent
//         if (config.requestType === 'form') {
//             config.headers = { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' }
//             console.log('form')
//             config.data = qs.stringify(config.data, { indices: false })
//         } else if (config.requestType === 'json' || !config.requestType) {
//             console.log('json')
//             config.headers = { 'content-type': 'application/json;charset=UTF-8' }
//         }

//         if (store.getters.token) {
//             config.headers['Authorization'] = getToken()
//         }
//         //加请求头
//         config.headers['userId'] = "1036465471609819137"; //1
//         return config
//     },
//     error => {
//         // do something with request error
//         console.log(error) // for debug
//         return Promise.reject(error)
//     }
// )

// response interceptor
// service.interceptors.response.use(
//     response => {
//         const res = response.data
//         if (res.code == 200) {
//             return Promise.resolve(res)
//         } else if (res.code == 0) {
//             return Promise.resolve(res)
//         } else if (res.code == 401) {
//             ElMessage.error(res.msg)
//             store.dispatch('user/resetToken').then(() => {
//                 location.reload()
//             })
//         } else if (res.code == 20000) {
//             return Promise.resolve(res)
//         } else {
//             ElMessage({
//                 message: res.msg,
//                 type: 'error'
//             })
//             return Promise.reject(res)
//         }
//     },
//     error => {
//         console.log('err' + error) // for debug
//         console.log(error.response)
//         ElMessage({
//             message: error.response.data.data ? error.response.data.data : error.response.data.msg,
//             type: 'error',
//             duration: 5 * 1000
//         })
//         return Promise.reject(error.response)//此操作，可以直接拿到报错的信息error.response
//     }
// )

export default service
