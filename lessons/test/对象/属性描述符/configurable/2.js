var myObject = {}
Object.defineProperty( myObject, "a", { 
    value: 2, 
    writable: true, 
    configurable: false, 
    enumerable: true } ); 
    console.log(myObject.a); // 2 
    delete myObject.a; 
    console.log(myObject.a); // 2