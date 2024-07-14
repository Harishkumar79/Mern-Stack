// task 1(k):
let str = ""
for(let i = 0 ; i<=5 ; i++){
    for(let j = 1 ; j<=5-i;j++){
        str = str + j;
    }
    str = str + "\n"
}
console.log(str);