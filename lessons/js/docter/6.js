var a = 1;
var c = 3;
function fn(a){
    var a = 2;
    function a(){}
    var b = a;
    console.log(b);
    console.log(c);
}
fn(3);