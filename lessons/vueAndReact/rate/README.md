![](https://static001.geekbang.org/resource/image/0e/39/0e922d413eeeac4378233baa254dd039.png?wh=1406x544)  

# Vue 组件设计，提供API支持

- 页面的Layout 和 设计稿
- 组件树 
- 页面由组件构成，组件是开发的基本单位
  - 组件设计 最重要
  - 组件可以复用，提高开发效率

- Vue 为组件设计提供了哪些聚焦业务的API？
  - style scoped
    - 不会污染全局样式 
    - 当前组件生成一个随机数，属性选择器
    - 写的代码，会被添加这个随机选择属性
  - 父子 组件通信，v-bind:value="score"  传参 props
    子组件内部要用到score 应该和父组件的score 数据绑定


