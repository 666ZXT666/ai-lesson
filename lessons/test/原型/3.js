const myBind = function (fn, obj) {
  return function () {
    return fn.call(obj);
  };
};

obj = {
    name: '李四'
}

function foo(){
    let name = '张三';
    console.log(this.name);
}

console.log(myBind(foo,obj).prototype);