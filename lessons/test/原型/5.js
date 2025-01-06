function Animal() {}
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

let myDog = Dog.bind({});
let obj = {};
console.log(obj instanceof myDog); // false
console.log(myDog instanceof Animal); // true