function People(){
    this.name = "张三";
}

People.prototype.say = function(){
    console.log("我是张三");
}

Object.defineProperty(People.prototype,"say",{
    writable:false
});

var p = new People();

p.say = function(){
    console.log("我是李四");
}
p.say();

People.prototype.say();