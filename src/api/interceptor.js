import axios from 'axios'
import store from '../store/index'

import { openLoading, closeLoading } from '@/serves/loading'

// axios.default.headers['Content-Type'] = 'application/x-www-form-urlencoded'
const request = axios.create({
    // baseURL: 'http://localhost:8000',
    timeout: 5000
})

// CancelToken.source 方法会构建一个CancelToken对象，并返回一个有两个参数的对象（token，cancel)
// token -> 构建出的 CancelToken对象
// cancel -> 取消请求需要调用的方法,需要取消请求时调用cancel方法就会取消带有与这个cancel相对应的token的所有请求
// 由于CancelToken对象是在拦截器外构建的，所有的接口中的config.cancelToken指向的都是同一个CancelToken对象，所以可以使用source.cancel方法取消所有的接口.
let CancelToken = axios.CancelToken
let source = CancelToken.source()

request.interceptors.request.use((config) => {
    config.cancelToken = source.token
    let cancelArr = store.getters.getCancelTokenList
    cancelArr.push(source.cancel)
    store.commit('setCancelTokenList', cancelArr)

    config.headers['Content-Type'] = 'application/json;charset=utf-8'
    // config.headers['token'] = '' // 设置token
    openLoading() // 请求接口时页面处于加载状态
    return config
}, (error) => {
    return Promise.reject(error)
})

request.interceptors.response.use((response) => {
    closeLoading() // 请求响应关闭加载状态
    let res = response.data
    if(response.config.responseType === 'blob')  return res
    // 兼容服务端返回字符串
    if (typeof res === 'string') {
        res = res ? JSON.parse(res) : res
    }
    return res
}, (err) => {
    closeLoading() // 请求响应关闭加载状态
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '请求错误';
                break;
            case 401:
                err.message = '未授权，请登录';
                break;
            case 403:
                err.message = '拒绝访问';
                break;
            case 404:
                err.message = `请求地址错误:${err.response.config.url}`;
                break;
            case 405:
                err.message = '请求方式错误';
                break;
            case 408:
                err.message = '请求超时';
                break;
            case 500:
                err.message = '服务器内部错误';
                break;
            case 501:
                err.message = '服务未实现';
                break;
            case 502:
                err.message = '网关错误';
                break;
            case 503:
                err.message = '服务不可用';
                break;
            case 504:
                err.message = '网关超时';
                break;
            case 505:
                err.message = 'HTTP版本不受支持';
                break;    
        }
    }
    return Promise.reject(err)
})

export default request