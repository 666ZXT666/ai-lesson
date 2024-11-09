// 大厂语法基础题
//局部作用域
function sayHello(){
    var name="邓家俊";
    return "hello" + name;
}
//es5 
var age=10; 全局作用域
// 代码块
//块级作用域

if(age>5){
    //es6 新增的let 变量声明 2015年发布
    var name ="邓子";
    let dogYears=age*7;
    console.log("u are" + dogYears + "years old")
}


console.log(name,'name');
console.log(dogYears,'dogYears');