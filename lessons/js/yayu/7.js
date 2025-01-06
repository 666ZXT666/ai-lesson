let obj={

}

function Person(){   
}

function Animal(){
}

Person.prototype.name = obj;

let p = new Person();
let a = new Animal();
console.log(p.name);
console.log(a.name);
console.log(Person.prototype.constructor == Person);
