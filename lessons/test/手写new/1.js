Object1 = {
    name:'deng',
    age:18
}
Object2 ={
    name:'ru',
    age:18
}
const Person = function(){}
const Person2 = function(){}
Obj = Person.prototype;
console.log(Obj)
//Person2.prototype = Object2;
const p1 = new Person();
console.log(p1.__proto__);
//Person.prototype.name = 'dengru';
//Person.prototype = null;
//console.log(p1.name);
// 对象跟类没有任何关系了，他跟原型链有关系
//console.log(p1.name);
p1.__proto__ = Object2;
p1.constructor = Person2;
console.log(p1);
console.log(Object.getPrototypeOf(p1));