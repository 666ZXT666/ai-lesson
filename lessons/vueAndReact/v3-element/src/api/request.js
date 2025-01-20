// react vue http 请求标配
import axios from 'axios'
// ./ ../ 相对路径 查找
// fs http 内置模块 node_modules/ 安装的第三方package
const request = axios.create({
    baseURL: '/',//基础路径
    timeout: 5000, //请求超时时间
})

// 请求拦截器
//axios 为前端工程化而生
request.interceptors.request.use(config=>{
    console.log('请求拦截器')
    const token = localStorage.getItem('token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default request