var obj = {
    name:'deng',
    fn:bar
}
var obj2 = {
    name:'deng2',
    fn:bar
}

function bind(fn,o){
    return function(){
        fn.call(o);
    }
}

function fun(){
    console.log(this.name);
}

var bar =bind(fun,obj);


bar.call(obj2);
