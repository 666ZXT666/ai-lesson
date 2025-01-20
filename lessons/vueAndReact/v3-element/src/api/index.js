import request from './request.js'
// 项目所有的向后端发请求的接口都在这管理

//登录接口
export const login = (data) => request.post('/login', data);

export const getUserInfo = () =>request.get('/userInfo');
