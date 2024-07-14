// task 1(i):
let str = ""
for(let i = 1 ; i<=5 ; i++){
    for(let j = 0 ; j<=5-i;j++){
        str = str + " * ";
    }
    str = str + "\n"
}
console.log(str);