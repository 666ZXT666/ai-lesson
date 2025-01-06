name:"ru"
var people = {
    name: 'elaine',
    age: 28,
    sayName: (age) => {
        console.log(this.name)
    }
};
people.sayName(5);
console.log(18);