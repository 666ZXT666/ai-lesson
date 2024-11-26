function Person(name,age){
    console.log(this);
    this.name = name;
    this.age = age;
}
Person('小超',18) // 以普通函数来运行
const dys = new Person('昌总',19)// 以构造函数来运行
const dyf = new Person('阿威',19)