"use strict";
var x = 0;

var obj = {
    x:1,
    foo:function(){
        console.log(this);
        console.log(this.x);
    }
}

var foo = obj.foo;

var obj2 = {
    x : 3,
    foo:foo
}
// 区别 ： 被谁调用，调用的位置不一样
// 调用方式不一样
// 作为对象的方法被调用
obj.foo();
// 作为普通函数被调用
console.log('------');
obj2.foo.call(obj);
