// react vue http 请求标配
import axios from 'axios'
// ./ ../ 相对路径 查找
// fs http 内置模块 node_modules/ 安装的第三方package
const request = axios.create({
    baseURL: '/',//基础路径
    timeout: 5000, //请求超时时间

})

export default request