// Number
console.log(Number());// 0
// undefined 在数值上下文中没有转成一个特定数字的含义
console.log(Number(undefined)); //NaN
console.log(Number(null));//0
console.log(Number(false));
console.log(Number(true));
console.log(Number("-123"));
console.log(Number("0x123"))
console.log(Number(""), Number(" "));
console.log(Number("123abc"));
console.log(parseInt("123abc"));

