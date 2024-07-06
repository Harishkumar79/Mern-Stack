// Write a JS program to check whether the triangle is equilateral, isosceles or scalene triangle. 

let a = 50,
    b = 40,
    c = 60

if (a === b && b === c) {
    console.log("equilateral traingle");
} else if (a === b || a === c || b === c) {
    console.log("isosceles triangle");
}else{
    console.log("scalene triangle");
}