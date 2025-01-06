
function foo(x,n){
    if(n==0){
        return 1
    }
    return foo(x,n-1)*x
}
console.log(foo(2));