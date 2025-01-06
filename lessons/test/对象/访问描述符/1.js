var myObject = { 
    a:1,
    get a() { 
        return 2;  
        } ,
    set a(val) {
        console.log('setter: ' + val);
        }
    // 给a定义一个getter  
    }; 
    myObject.a = 1;
    //console.log(myObject);
    //console.log(Object.getOwnPropertyDescriptors(myObject,'a'));