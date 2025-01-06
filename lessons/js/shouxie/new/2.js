function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function () {
    console.log(this.name);
};

function objectFactory(){
    const obj = new Object();
    const Constructor =[].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    const res = Constructor.apply(obj,arguments);
    return typeof res === 'object' ? res : obj;
}
let awei = objectFactory(Person,'awie',20);