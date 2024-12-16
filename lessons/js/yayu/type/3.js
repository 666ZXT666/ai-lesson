console.log(1 / +0); // Infinity
console.log(1 / -0); // -Infinity
console.log(Object.is(+0, -0));
console.log(Object.is(5, 5));
//隐式类型转换
// Not A Number => 
console.log(2*'a',2+'a')//NaN
console.log(typeof NaN);
console.log(parseInt("abc"));
console.log(parseInt("12abc"));
console.log(NaN === NaN); // 不代表确切值
//不能通过===NaN 去判断，所以isNaN
console.log(isNaN(NaN),isNaN(parseInt("abc")));