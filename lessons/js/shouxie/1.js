
var a ={
    name:'deng',
    fn:function(){
        console.log(this.name+'ab');
    }
}

var b = a.fn;
b.apply(a,[1,2]);
var c = a.fn;
b();
c();