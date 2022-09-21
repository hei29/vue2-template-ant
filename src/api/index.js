import axios from './interceptor'

import Qs from 'qs' 

export const requestA = (params) => axios({
    method: 'get',
    url: '',
    params
})

// content-type 常见三种数据格式
// 1.application/json; 默认格式
// 2.application/x-www-form-urlencoded
// 3.multipart/form-data

// 后端需要接受的数据类型为：application/x-www-form-urlencoded
export const requestB = (data) => axios({
    Headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    url: '',
    data: Qs.stringify(data)
})

// 后端需要接受的数据类型为：multipart/form-data
let dataC = new FormData()
dataC.append('qq', '243...')
dataC.append('tel', '150...')

export const requestC = () => axios({
    Headers: {
        'Content-Type': 'multipart/form-data'
    },
    method: 'post',
    url: '',
    data: dataC
})

export const demoRequest = () => axios({
    method: 'get',
    url: '/basic/alertRule/findAlertTypeTree'
})