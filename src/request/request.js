//拦截

import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.map.baidu.com/place/v2',
    timeout: 5000,
})

// 请求拦截

// 响应拦截
instance.interceptors.response.use(res=>{
    return res;
}, err=>{
    return Promise.reject(err)
});

export default instance;