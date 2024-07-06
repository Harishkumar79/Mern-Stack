// Write a JS program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. 
// Calculate percentage and grade according to following:  
// Percentage >= 90% : Grade A 
// Percentage >= 80% : Grade B  
// Percentage >= 70% : Grade C  
// Percentage >= 60% : Grade D  
// Percentage >= 40% : Grade E  
// Percentage < 40% : Grade F

let physics = 95,
    mathematics = 100,
    chemistry = 95,
    biology = 95,
    computer = 100;

let totalMarks = physics+ mathematics + chemistry + biology  + computer;
let percentage = (totalMarks / 500) * 100;

if (percentage >= 90) {
    console.log("Grade A");
} else if (percentage >= 80) {
    console.log("Grade B");
} else if (percentage >= 70) {
    console.log("Grade C");
} else if (percentage >= 60) {
    console.log("Grade D");
} else if (percentage >= 40) {
    console.log("Grade E");
} else {
    console.log("Grade F");
}
