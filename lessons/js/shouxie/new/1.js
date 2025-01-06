function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function () {
    console.log(this.name);
};

// new 实例化运算符
// 1.创建一个空对象  和Person没有血缘关系
// {} __proto__ 指向 Person.prototype
// 2.将这个空对象的__proto__指向构造函数的prototype
// 3.将构造函数的this{} 执行，给{} 赋值
// 4.执行构造函数的代码（为这个新对象添加属性）

const awei = new Person('awei',20)
