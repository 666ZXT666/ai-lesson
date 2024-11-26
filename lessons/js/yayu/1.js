// js 造人
// 对象字面量 
let cao = {
    name : '小超'
} 
// class es6 
class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    eat(){
        console.log('吃饭');
    }
}

let wei = new Person('小王')
let guo = new Person('小郭')