let str = "" , n = 11;
for(let i=0; i<n;i++){
    for(let j=0; j<n; j++){
        if(i==0||j==0 || i==n-1 || j == n-1 || i == j || i == (n-1)-j){
            str += " * "
        }else{
            str = str + "   "
        }
    }
    str = str + "\n"
}

console.log(str);