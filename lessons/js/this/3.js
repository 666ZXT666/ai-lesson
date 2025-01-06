var people = {
    name: 'elaine',
    age: 28,
    sayName: function (age) {
        var sayAge = function (age) {
            this.age = age;
        };
        sayAge(age);
    },
};
people.sayName(5);
people.age; // 28
age; // 5