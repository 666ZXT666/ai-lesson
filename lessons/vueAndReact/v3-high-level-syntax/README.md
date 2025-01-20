- vue3 高级语法

- watch & watchEffect
  - 监听数据变化，执行相关操作
    watch 第一个参数 可以是一个响应式的数据源
    第二个参数是一个回调函数，可以拿到新旧值
    第三个参数，选项 immediate 先执行回调函数 默认是false
    deep 深度
    watchEffect 默认执行一次，不需要配置deep 默认深度
  - effect 副作用 相关的响应式对象发生改变后，会自动执行的副作用
  - v-model.number 双向绑定类型，特别适合表单

- slot 插槽
  - 插在组件的开和关之间
    组件的开关之间可以有个插槽
  - 业务？ 提升组件的定制性
    props  ref/reactive
    组件一部分的UI 由父组件决定
    父组件通过 组件开关之间来传递