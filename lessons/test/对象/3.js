obj1 ={
}
obj2 ={
    obj:obj1
}
obj1.obj = obj2

console.log(obj1);
console.log(obj1.obj);
console.log(obj1.obj.obj);
console.log(obj1.obj.obj.obj);