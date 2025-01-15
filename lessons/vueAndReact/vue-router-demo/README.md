# vue-router 路由

- vue 语法 组件(vue2 选项式/vue3 组合式 大型) 响应式 生命周期 指令(v-bind: v-model v-for v-if\v-show), 三种数据（自由数据 ref , props\computed）
  只做最核心的
- vue-router 路由 周边生态
  - 跳转到其他页面 路由
- vuex/pinia 状态管理

## vue-router
- router-link 取代a标签
  router-link 将路由对应的组件显示到相应的位置
  要启用路由，需要配置路由器
  没有生效时 无法识别的组件 -> 降级为div元素
  - 向 vue添加vue-router

- router 专门的目录
  - index.js 入口配置文件
  - router-link 是 vue-router 提供的组件 ，use(router),不用引入

- 业务熟练度
  - vue-router 语法细节
    - routes 拆分 亮点
    [
      /
      /About
      ...users  //用户模块
      ...posts  //文章模块
    ]

    展开运算符
  - path, component
    - name 有用
    - props 路由传参

- 路由历史记录 history 
  router-link 而不是 a组件
  router.push() 入栈
  栈顶是当前的路由，显示组件
  前进 后退
  导航  = url + history navigator
  
  - stylus
    npm i -d stylus 当前项目安装 stylus包
