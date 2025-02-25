# notebook 后端api服务

## egg.js 阿里的开源框架
- koa 极简
  - middlewares 洋葱模型 函数
  - http listen
  - ctx 

- 企业级开发 中大型项目
  mvc
  npm init egg --type=simple
  后台开发的模板 
  - app 目录开发的主目录
  - 约定大于配置
    - router.js 后端路由

 - URL 的构成
  params 路径参数
  http://localhost:7001/post/1/zhangsan
  query 查询参数
  http://localhost:7001/post?id=1&name=zhangsan
  body 请求体
  http://localhost:7001/post
  - 请求方法
  

- csrf 攻击
  - 拦截？ 
    apifox 不是用户 
    userAgent 

- post请求体的格式
  - application/json 复杂对象
  - application/x-www-form-urlencoded 简单键值对
  - multipart/form-data 文件上传

- get 跟 post 的区别
  
