- vue3 响应式
  - ref .value 响应式对象 value Object.defineProperty 性能好
  - reactive 响应式代理 整个对象 Proxy 开销大 

- 父子组件通信
  - props 父传子 数据
  - @child-message="handleEvent" 自定义事件名称 + 处理函数
  - 子组件 一切由外界传的（props 和 emit） 都得声明 emits = defineEmits(['child-message']) 
  - emit(eventName,data)
  