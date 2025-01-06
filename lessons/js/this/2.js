//var name = "ru";
var b ={
    name:"gong",
    foo2:function foo2(){
        console.log(this.name);
    }
}

var a ={
    name:"deng",
    fun1:function(){
        console.log(this.name);
    },
    fun2:function(){
        this.fun1();
        console.log(this.name); 
// setTimeout(function(){
//     func1();
// },1000);
}
}

a.fun2();