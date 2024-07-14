// task 1(m):
let str = ""
for(let i = 0 ; i<5 ; i++){
    for(let j = 5 ; j>i;j--){
        str = str + j;
    }
    str = str + "\n"
}
console.log(str);