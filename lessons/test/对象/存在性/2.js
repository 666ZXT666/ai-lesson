obj = {
    a: 1,
    foo: function(){
        console.log(this);
    }
}
obj2 = {}
obj2.__proto__ = obj;
obj2.foo();
console.log();