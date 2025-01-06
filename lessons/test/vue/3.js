let answer = 1;
let name = "kim";
let age = 20;
obj = {
    answer,
    name,
    age,
    getName(){
        return this.name;
    }
}
console.log(obj.name);