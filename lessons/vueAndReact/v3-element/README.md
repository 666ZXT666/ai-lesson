- 如何开发一个vue项目
  - vite 工程化
    npm init vite
  - 安装element3
    npm install element3
  - 安装vue
    npm install vue
  - 安装pinia
    npm install pinia
  - 安装vue-router
    npm install vue-router
  - stylus
    npm install stylus
  - axios
    npm install axios
- app.use
  向vue实例中注册element3
  element3 提供的组件可以全局使用
  - 注意问题 性能
    首页打开就会变慢, 按需加载
  - element3 组件 以el- 开头
  - 不要重复造轮子 70% 常见组件需求


## 项目亮点
- 项目全面使用es6+ 风格
  代码简洁 易读 易维护
- 良好的注释
- 良好的git 提交记录和习惯

- 按需加载vue组件库element3，性能优化，页面加载速度
- 路由
  - 多级路由
     二级路由 path 前面不要/
  - path, component ,name,meta 
  - 路由懒加载
    最佳用户体验就是快
    按需加载页面级别组件 函数引入方式 ()=>import('')
  - 路由守卫
- 表单组件
  - 看文档
  - :model 收集数据
  - ref 获取表单对象
    - 要获取DOM元素，组件对象
    - 调用相应的方法
    - template 用ref标记DOM
    - const formRef = ref(null)
  - 表单的校验
    - rules
    - items prop
    - valid 方法 boolean

- 布局组件
  - ElContainer
  - ElHeader
  - ElAside
  - ElMain
  - ElRow
  - ElCol
  - ElMenu
  

- 登录流程
  - 前端提交登录
    - login.vue 组件化表单
    - 调用api/login接口
      - 项目多了一层目录 api 目录会管理应用的所有接口
    -  统一配置 axios 管理请求
- 后端验证
  - mock 模拟后端
    apifox 跳过前端 模拟get/post 等请求
    前端 mock 跳过后端 模拟后端请求 

- jwt 登录
  - npm install jsonwebtoken
  - sign 签名
  - token -> veryfy 方法 

- mock 后端模拟
  - vitejs 启用 mock 插件
    - npm install vite-plugin-mock --save-dev
    - 在vite.config.js 中启用插件
    - 在src/mock 目录下创建 mock.js 文件
    - 在main.js 中引入 mock.js 文件

- 需要验证用户