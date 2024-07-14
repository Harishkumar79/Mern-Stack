// task (r);
let row = 5
for(let i = 0 ; i<=row;i++){
    let str = ""
    for(let j = 1 ; j<=row-i;j++){
        str = str + " ";
    }
    for(let k = 0 ; k< 2*i-1;k++){
       str = str + "*"
    }
    console.log(str);
}