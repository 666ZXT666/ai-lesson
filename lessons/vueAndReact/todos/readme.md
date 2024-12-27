# 双向绑定

- title data 
  {{title}} 数据驱动的界面
  input v-model="title"
  input 输入的时候，输入框的值改变了，和数据项title不一样
- :class :value ?
  动态绑定属性业务时用：v-bind

- 数据和界面保持一致

- all 所有任务的数量
  - title todos 不一样 独立
  - all 依赖于 todos 计算
  - computed 计算属性 
    形式是函数，返回值是一个值
  - 当计算属性函数依赖项发生变化时，会重新执行函数，得到新的值
  - 关注函数体 内的数据属性
  - 计算属性也是数据的一类
  - get set两种操作 保持

- 数据和界面的一致性
  - 数据驱动界面{{}} 单项数据绑定
  - 双向绑定 v-model 
    - 先是**界面状态**发生改变
    - 数据要一致
    - v-model 修改数据
    - 状态一致
  - 联动项的一致
    allDone true/false  todos  也得变

  - vue 2.0
    data
    method
    computed
    简单 缺点是 不灵活
  - vue 3.0？
    选项式 -> setup 组合式 对应的data + method + computed 放一起 有利于大型项目 (组件代码 > 100 行) 的维护