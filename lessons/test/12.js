var people = {
    name: 'elaine',
    age: 28,
    sayName: function () {
        console.log(this.name);
    },
};
people.sayName(); // elaine