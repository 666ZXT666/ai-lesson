function Person(name,age){
    console.log(this);
    this.name = name;
    this.age = age; 
}

const cy = {
    name: '陈炎',
    str : '123',
    playBasketball: function(){
        console.log(`${this.name}在打篮球`);
    }
}
Person.prototype= cy;
const wu = new Person('吴总',18);

wu.playBasketball();
console.log(cy.str);
console.log(wu.__proto__ == cy)
// 任何一个函数对象都有一个prototype属性指向原型是谁，任何一个实例都有