// task (c)
let str = "" , n = 7;
for(let i=0; i<n;i++){
    for(let j=0; j<n; j++){
        if(i == j){
            str += "\\"
        }else if(i == (n-1)-j){
            str += "/"
        }else{
            str = str + "*"
        }
    }
    str = str + "\n"
}

console.log(str);