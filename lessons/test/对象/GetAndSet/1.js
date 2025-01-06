obj = {
    get a(){
        return 1;
    }
}

for(var v in obj){
    console.log(v);
}
//console.log(obj.a);
//console.log(Object.getOwnPropertyDescriptor(obj, 'a'));