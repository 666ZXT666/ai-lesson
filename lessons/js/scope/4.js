var a = 1;
var b = 4;
function foo(){
    console.log(a);
    var a=2;
    var a =3;
    function bar(){
        return a + b;
    }

}