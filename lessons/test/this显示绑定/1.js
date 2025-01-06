function fn(){
    console.log(this.name);
}
var a ={
    name:'deng',
    fn:fn
}

