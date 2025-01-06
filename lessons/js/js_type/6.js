function greet(name){
    return `hello,${name}`;
}

greet.lang = 'en';
greet.greetInSpanish = function(name){
    return `hola,${name}`;
}
 
function invokeGreeting(greetingFunction,name){
return greetingFunction(name);
}

console.log(invokeGreeting(greet,'John'));