var people = {
    name: 'elaine',
    age: 28,
    sayName: (age) => {
        console.log(this.name)
        var sayAge = function (age) {
            this.age = age;
        };
        sayAge(age);
    },
};

people.sayName(5);