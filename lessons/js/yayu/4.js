// constructor
function Person(name,age){
    console.log(this);
    this.name = name;
    this.age = age; 
}
// 每个函数都有一个原型对象
Person.prototype= {
    eat: function() {
        console.log(`${this.name}在吃饭`);
    }
}

const xck = new Person('肖总',18);
xck.eat();
const xql = new Person('小秋',18);
xql.eat();
