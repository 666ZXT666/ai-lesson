obj = {
    a:'1'
}

Object.defineProperty(obj,
    'a',{
        configurable: false
    });
    obj.a = 2;
    Object.defineProperty(obj,
        'a',{
            enumerable: false
        });
        obj.a = 2;
    console.log(Object.getOwnPropertyDescriptor(obj, "a" ));
