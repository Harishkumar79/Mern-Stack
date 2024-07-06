// Write a JS program to input angles of a triangle and check whether triangle is valid or not.

let angle1=80,
angle2=60,
angle3=40
let sumofAngles = angle1+angle2+angle3;


if (sumofAngles === 180) {
    console.log("The triangle is valid.") ;
} else {
    console.log("The triangle is not valid.");
}