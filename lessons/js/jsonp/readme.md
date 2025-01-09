# 跨域

- 运行环境
  - 前端
    V8 引擎在浏览器里
  - 后端
    node 封装了 V8 引擎，剥离了html，借助c++调用系统服务
    http 模块 就是node 实现的

  - 为什么node有模块化需求？
    - 引入各种模块
    - 后端功能复杂
    - mvc controller model view 
  
- CORS policy
  - 安全策略
  - baidu()
  - http://127.0.0.1:3000
    仍然被block

- 保护谁？
  - 后端 制定规则
  - 前端
    JS 限制跨域请求
    JS dom 修改页面内容 跨域内容不受限制
- Corss-Origin-Resource-Sharing 跨域资源共享
 Origin > Domain + Port + Protocol

## 前后端分离
- vue 开发前端
- node 开发后端
- 开发日常 跨域是家常便饭

- 换条路走
  - script + src 
    - 不受CROS 限制
  - http 请求 将后端api数据拿到
    - src = api url
  - json 给我

- script 阻塞式加载并执行
- jsonp
  json with padding(函数)
  - 前端需要script 标签 src 执行 api url 
  - 页面上埋下一个全局方法 window.callback
  - 需要后端的配合 数据外面包 函数
- 封装一个 jsonp 函数
  - 参数 url 和 callback
