# 字节项目学习

- VUE 纯前端项目
  VUE + TS  vue-router pinia 全家桶
- VUE + KOA + MYSQL 全栈项目
- TS 
  - TS 像写java一样写js
  -   

- vue-router
  - RouteRecordRaw 类型约束
  - redirect 重定向
- src/shims-vue.d.ts 
- vant UI 组件库
  - element-ui 不太一样 包小，更快
    按需加载 .use(list)

  - vite 工程化
    预先加载UI 组件库
    vant 
    @vant/auto-import-resolver
    Components({
      resolvers: [VantResolver()],
    })
    