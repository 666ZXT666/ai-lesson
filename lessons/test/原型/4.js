const foo = function () {
    console.log(this.name);
};

const obj = {
    name: '李四'
};

console.log(foo.bind(obj).prototype);