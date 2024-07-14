// task 1(f):
let startNO = 1 ;
for(let i = 1 ; i<=5;i++){
    let str = ""
    for(let j=0 ; j<i;j++){
        str = str + startNO + " ";
        startNO++;
    }
    console.log(str)
}