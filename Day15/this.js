let obj = {
    "int":10,
    "decimal":10.5,
    "boolean":true,
    "arr":[1,2,3,4],
    "arr":"harsh",
    "function":function() {
        return obj.int
    }
}

let strObj = {
    fname:"Harsh",
    age:20,
    "key":12345
}

console.log(obj.function())
console.log(obj.arr)
console.log(Object.keys(strObj))