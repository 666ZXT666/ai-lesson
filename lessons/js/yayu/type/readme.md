# js 类型转换

- es6 之前，js有多少种类型？
  - 简单数据类型，Primitive 拷贝式赋值
  - String
  - Number
  - Boolean
  - Null
  - Undefined
  - Object 复杂数据类型，引用式赋值
  - Symbol
  - BigInt

  - 为何JS类型会改变？
  - JS 是弱类型语言
  - 变量的类型 是可以改变的
  - 搞清楚变量的确切类型  
    - Primitive 类型 ->其他类型
      Boolean 
    - Object 类型 -> 其他类型


- Boolean 显示类型转换规则
  - false
    - 空 
    - false
    - +0
    - -0
    - null
    - undefined
    - 空字符串
    - NaN

- +0 -0

-NaN
类型仍然是Number，是一个特殊的数字

- Number()
  0 1 NaN 