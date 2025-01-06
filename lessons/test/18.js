/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = new Map();
    map.set(')','(');
    map.set(']','[');
    map.set('}','{');
    let stack = [];
    for(let i = 0;i<s.length;i++){
        if(stack[stack.length-1] == map.get(s[i])){
            stack.pop();
        }
        else{
            stack.push(s[i]);
        }
    }
    console.log(stack);
    return stack.length == 0;
};