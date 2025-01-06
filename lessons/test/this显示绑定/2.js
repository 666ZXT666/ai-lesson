function foo() {  
    console.log( this.a ); 
} 
var obj = {  
a: 2, 
foo: foo  
}; 
var a = "oops, global"; // a是全局对象的属性 
setTimeout(foo, 100 ); // "oops, global