let obj = Object.create(null);
obj.name = "sanjay";
console.log(obj);
let obj1 = new Object();
console.log('toString' in obj1);
console.log(obj1.hasOwnProperty('toString'));
for (let key in obj) {
    console.log(key); // 输出 "a" 和 "b"
  }