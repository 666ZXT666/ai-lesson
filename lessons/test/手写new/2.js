object1 = {
    name:'ru'
}
function Person(name,age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log('sayName'+this.name);
    }
}
let p1 = new Person('deng',18);
console.log(p1);
const obb = myNew(Person,'deng',18);
obb.sayName();
function myNew(){
let obj = {};
let con = [].shift.apply(arguments);
obj.this = con;
const res = con.apply(obj,arguments);
return res instanceof Object ? res : obj;
}