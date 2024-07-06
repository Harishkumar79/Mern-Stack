// Write a JS program to input all sides of a triangle and check whether triangle is valid or not.

let a = 10,
    b = 10,
    c = 100
if(a +b > c && a+c > b && b+c >a ){
    console.log("traingle is valid");
}else{
    console.log("traingle is not valid");
}