//1.  Declare variables of all primitive datatypes (string, number, boolean, null,undefined) and log their types using the `typeof` operator. 

let str = "Hello World";
let num = 100;
let bool = true;
let nullVal = null;
let undefinedVal = undefined;
console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof nullVal);
console.log(typeof undefinedVal);

// Answers:1
// string
// number
// boolean
// object
// undefined


//2. . Create an object with at least five properties of different types and a method that logs one of the properties.

let obj = {
    name:"harish",
    age: 21,
    village:"anadra",
    district:"sirohi",
    study:"computer science"
};
console.log(obj.name);

/*
harish
 */

//3. Write a program to check if a number is positive, negative, or zero using ifelse statements.

let num1 = 100;
if(num1 > 0){
    console.log("positive");
}
else if(num1 < 0){
    console.log("negative");
}
else{
    console.log("zero");
}

/*
positive
*/


//4. Write a program that categorizes a person's age into groups: child (012), teenager (1319), adult (2059), and senior (60 and above).
let age = 20;
if(age >= 60){
    console.log("senior");
}
else if(age >= 20){
    console.log("adult");
}
else if(age >= 13 && age <= 19){
    console.log("teenager");
}
else{
    console.log("child");
}

/*
adult
*/


//5. Write a function that prints the first `n` Fibonacci numbers. 
function fibonacci(n){
    let fib = [0, 1];
    for(let i = 2; i <= n; i++){
        fib.push(fib[i-1] + fib[i-2]);
    }
    console.log(fib);
}
fibonacci(10);
    
/*
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
*/  

//6. Create a program that prints the multiplication table of a given number using a for loop. 
function multiplicationTable(num){
    for(let i = 1; i <= 10; i++){
        console.log(num + " x " + i + " = " + (num * i));
    }
}
multiplicationTable(5);
    
/*
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
*/

//7. Write a function that takes an array and prints all its elements using a forof loop.
function printArray(arr){
    for(let i of arr){
        console.log(i);
    }
}
let arr = [1, 2, 3, 4, 5];
printArray(arr);

/*
1
2
3
4
5
*/  

//8. Write a program that reverses a given string using a for loop. 
function reverseString(str){
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    console.log(reversed);
}
reverseString("Hello World");

/*
dlroW olleH
*/

//9. Create a function that checks if a given number is a prime number. 
function isPrime(num){
    if(num <= 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(15));
console.log(isPrime(20));


/*
true
false
false
false
*/


/*
10.     Write a program to print the following pattern: 
* 
** 
*** 
**** 
***** 
*/

let str1 = ""
for(let i = 0 ; i<=5 ; i++){
    for(let j = 0 ; j<i;j++){
        str1 = str1 + "*"
    }
    str1 = str1 + "\n"
}
console.log(str1);


/*
11.     Write a program to print the following pattern: 

***** 
**** 
*** 
** 
* 
*/



/* 
12. Write a program to print the following pattern: 
* 
*** 
***** 
******* 
*/

let str3 = ""
for(let i = 0 ; i<=4 ; i++){
    for(let j = 0 ; j<=i;j++){
        str3 = str3 + "*"
    }
str3 = str3 + "\n"
}
console.log(str3);


//13. Write a function that takes two numbers and returns their sum.
function sum(num1, num2){
    return num1 + num2;
}
console.log(sum(10, 20));
console.log(sum(20, 10));
console.log(sum(10, 10));
console.log(sum(10, 5));
console.log(sum(5, 10));

/*
30
30
20
25
15
*/


//14. Create an IIFE (Immediately Invoked Function Expression) that logs "Hello, World!" to the console.
(function(){
    console.log("Hello, World!");
})();


//15.  Write a function that takes an array of numbers and returns the maximum number. 
function max(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(max([1, 2, 3, 4, 5]));
console.log(max([5, 4, 3, 2, 1]));
console.log(max([10, 20, 30, 40, 50]));
console.log(max([50, 40, 30, 20, 10]));

/*
5
5
50
50
*/  


//16. Write a function that returns the factorial of a number. 
function factorial(num){
    if(num === 0){
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(15));

/*
120
3628800
2432902008176640000
*/


//17. Write a higherorder function that takes a function and a number as arguments and calls the function that many times. 
function callFunction(func, num){
    for(let i = 0; i < num; i++){
        func();
    }
}
let func = function(){
    console.log("Hello, World!");
};
callFunction(func, 5);

/*
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
*/


//18. Create a class `Person` with properties for `name` and `age`, and a method `introduce` that logs a greeting message.
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let person1 = new Person("Harish", 21);
person1.introduce();

/*
Hello, my name is Harish and I am 21 years old.
*/

//19.    end the `Person` class to create a `Student` class with an additional property for `grade`, and override the `introduce` method to include the grade in the greeting. 
class Student extends Person{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }
    introduce(){
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I am in grade ${this.grade}.`);
    }
}
let student1 = new Student("Harish", 21, 10);
student1.introduce();

/*
Hello, my name is Harish, I am 21 years old, and I am in grade 10.
*/


//20. Write a class `Rectangle` with properties for width and height, and a method `getArea` that returns the area of the rectangle. 
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
}
let rect1 = new Rectangle(5, 10);
console.log(rect1.getArea());

/*
50
*/


//21. Create a class `BankAccount` with properties for `balance` and methods for `deposit` and `withdraw`. 
class BankAccount{
    constructor(balance){
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        if(this.balance >= amount){
            this.balance -= amount;
        }
    }
}
let bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.withdraw(200);
console.log(bankAccount.balance);

/*
1300
*/

//22. Write a function that uses the Fetch API to get data from a public API (e.g., JSONPlaceholder) and logs the data to the console. 
function getData(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => console.log(data));
}
getData();

/*
{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}
*/


//23. Create a function that fetches data from an API and displays the data on a webpage. 
function getDataFromApi(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => {
            let title = document.createElement("h2");
            let completed = document.createElement("p");
            title.textContent = data.title;
            completed.textContent = data.completed ? "Completed" : "Not Completed";
            document.body.appendChild(title);
            document.body.appendChild(completed);
        });
}
getDataFromApi();

/*
<h2>delectus aut autem</h2>
<p>Not Completed</p>
*/

//24. Write a function that posts data to an API and logs the response.  
function postDataToApi(){
    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "title": "foo",
            "completed": false
        })
    })
        .then(response => response.json())
        .then(data => console.log(data));
}
postDataToApi();

/*
{
    "userId": 1,
    "id": 2,
    "title": "foo",
    "completed": false
}
*/

//25. Write a program that changes the background color of a webpage when a button is clicked.
let btn1 = document.querySelector("button");
btn1.addEventListener("click", function(){
    document.body.style.backgroundColor = "green";
});

/*
<button>Click</button>
*/

//26. Create a function that adds a new list item to an unordered list when a button is clicked. 
let btn2 = document.querySelector("button");
btn2.addEventListener("click", function(){
    let list = document.querySelector("ul");
    let li = document.createElement("li");
    li.textContent = "New Item";
    list.appendChild(li);
});


//27. Write a script that counts the number of paragraphs in a webpage and displays the count in an alert box. 
let para = document.querySelectorAll("p");
console.log(para.length);
alert(para.length); 

/*
1
*/

//28. Create a form that takes user input and displays the input on the webpage when the form is submitted. 
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let input = document.querySelector("input");
    let message = document.querySelector("p");
    message.textContent = input.value;
});


//29.  Write a script that toggles the visibility of an image when a button is clicked. 
let btn3 = document.querySelector(".button1");
btn3.addEventListener("click", function(){
    let img = document.querySelector("img");    
    img.style.display = (img.style.display === "none") ? "block" : "none";
});

/*
30.  Create a simple todo list application that allows users to add, mark as 
complete, and delete tasks. Use all the concepts covered: data types, ifelse, 
loops, functions, classes, fetch method (for storing/retrieving data from a mock 
API), and DOM manipulation.
*/          
