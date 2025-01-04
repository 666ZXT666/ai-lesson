# Vue3 组件生命周期
  - 组件类实例化
    template + css + js 结合，做好准备
    onBeforeMount  拿不到dom
  - 挂载到父组件 -> 渲染页面
- v-if
    弹窗 广告 loading... 
  - 条件渲染 true 显示 false 隐藏
  - 区别
  - v-if 切换卸载 v-show 切换更新
    - v-if 不显示，不渲染
    v-if false 销毁组件
    - v-show 不显示，渲染 display:none

  - 有的组件需要toggle 显示/隐藏
  - 响应式数据 showComponent
  - 页面状态？

- 组件是一个类 Vue.Component LifecycleComponent ...new 实例化
  template + css + js 结合，做好准备 -> 挂载到父组件 -> 渲染页面