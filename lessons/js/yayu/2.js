// 普通函数的区别在哪？
// 构造对象的过程 构造函数 constructor
function Person(name,age){
    this.name = name
    this.age = age
}

const wen = new Person('小王',20)
console.log(wen.age);
const chen = new Person('小陈',20)
console.log(chen.name,chen.age);
