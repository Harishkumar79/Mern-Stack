// task (x);
let row = 5
for(let i = 0 ; i<=row;i++){
    let str = ""
    for(let k = 0 ; k<=i;k++){
        str = str + " ";
    }
    for(let j = 1 ; j<row*2-i*2;j++){
        str = str + "*" 
    }
   
    console.log(str);
}
