function People(){}
People.prototype.say = function(){
    console.log("我是张三");
}

let People1 = People.bind();
let p1 = new People1();
let p = new People();
p1.say(); // 我是张三
console.log(p instanceof People1); // true

