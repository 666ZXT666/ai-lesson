# js数据类型

- js有多少种数据类型？
  **内存分配机制**
  **拷贝，引用式**
  - 高手会将八种
  - 高高手会讲7种
  - 简单数据类型
    number,string,boolean,null,undefined,symbol,numberic(bigint+number)
  - 复杂数据类型
    object

  - null?
    没有？
    显示回收内存
    null 表示一个空值或不存在的对象，是一个可以赋给变量的特殊值。
    复杂对象是引用
    
  - undefined 未定义（类型）
  - Symbol 唯一值
    - 以函数的形式创建，简单值
    - 打个标签，哪怕标签一样，值绝对不一样
  - bigint 大整数

- 简单数据类型 Primitive
  一眼就能看出其值的类型


  函数，数组等有很多特性无法表达

## 对象
  - 丰富，复杂，笼统
  - 函数？ 函数对象，一等对象？可执行对象
  - 函数有属性，方法
  - 函数可以作为形参

- ECMAScript 是js的标准

- 区分这么多种的对象？
- 得到变量的确切类型 
  typeof 除了null之外的primitive类型都可以正确判断 null 是object 当初设计时的bug
  前三位是表示类型的描述 nul object 000