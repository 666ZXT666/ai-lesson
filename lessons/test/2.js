var a = 1;
console.log(a);
var myFunction = (function () {
    var a = 2;
    console.log(a);
    var myNextFuntion = (function () {
        var a = 3;
        console.log(a);
        var myNextNextFunction = (function () {
            var a = 4;
            console.log(a);
        })();
    })();
})();