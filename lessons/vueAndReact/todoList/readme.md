# vue 哲学

- 前端刀跟火种的年代 
  - 开发思想 
    - 底层API DOM编程 +  事件机制 
      缺点 复杂 
      性能差 （频繁访问，修改DOM）
      V8引擎（JS，单线程） + 渲染引擎（html+css）
      以快速显示也米娜为第一要务 html + css 渲染引擎 独立于JS引擎
      V8 引擎 独立的  V8引擎去到渲染引擎 犹如上了高速 较远 
      vue（登记） 批量的收集DOM更新，减少没必要的跑路

- jquery 
  js 框架， 简化DOM操作 
  $等封装简化了js开发（开发者）

- web 1.0(csdn blog) -> 2.0 (twitter,facebook)
  JS 代码量增大， 性能排在第一位

  
- 演变到VUE / REACT 现代前端框架
  更关注于业务开发（数据，响应式，组件化），不再关注JS DOM的底层，框架封装了
  
  数据思维 + vue/react 实现方式 = 前端开发
  

- data title
- vue提供给专注于业务的语法 v-model 双向绑定
  - data 
    - todos 数据项
    - title 任务
    
  - 动态绑定业务
    : 动态绑定
    : class="{}" 双引号内部是JS 运行区域
    {done:todo.done}