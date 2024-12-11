# Symbol

- 唯一值
  - 用Symbol 函数来申明
  - 给一个Symbol 函数来声明
  - 给返回值唯一值
  - 常用于对象字面量 不会，不需要担心被覆盖

  - Object.keys() 对象的键名数组 不包含Symbol 类型的键名
  - Object.values() 对象的键值数组 不包含Symbol 类型的值
  - Object.entries() 对象的键值对数组 不包含Symbol 类型的键值对
- 可迭代对象
  Object.getOwnPropertyDescriportors(classmates) 对象的属性描述符
  - 虽然 symboles emumberable 的属性为 true，但仍然是不可枚举的
    因为Symbols 独特设计，就是提供唯一值的，只能通过 getOwnPropertySymbols 来获取 

- ownProperty