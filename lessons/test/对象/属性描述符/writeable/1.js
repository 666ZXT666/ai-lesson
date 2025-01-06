var obj = {};
Object.defineProperty(obj, 
    'a',{
        value: 1,
        writable: false,
        enumerable: true,
        configurable: false
    });
    obj.a = 2;
console.log(obj.a);