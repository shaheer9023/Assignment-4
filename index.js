// Question 1 (Declare a variable named greeting with the string value "Hello, World!" and print it.)
var greeting = "hello world";
console.log(greeting);
// Question 2 (Define two variables with integer values and calculate their sum, difference, product, and quotient)
var num1 = 4;
var num2 = 6;
console.log("sum of given two numbers is :", num1 + num2);
console.log("difference of given two numbers is :", num1 - num2);
console.log("product of given two numbers is :", num1 * num2);
console.log("quotient of given two numbers is :", num1 / num2);
// Question 3 (Swap the values of two variables without using a third variable.)
var a = 1;
var b = 2;
a = a + b;
b = a - b;
a = a - b;
console.log("after swapping the value of a is ", a, "and the value of b is ", b);
// Question 4 (This applies to TypeScript. Create a string variable and try changing its type.)
var message;
message = 'Hello, TypeScript!'; // Valid assignment
//message = 123; Error: Type 'number' is not assignable to type 'string'
// Question 5 (Use the modulus operator to find the remainder of two numbers)
var Num1 = 20;
var Num2 = 4;
console.log("the remainder of ", Num1, " and ", Num2, "after division is ", Num1 % Num2);
// Question 6 (Increment a variable's value by 1 using two different methods.)
var counter = 0;
// method 1
counter = counter + 1;
console.log("after increment tha value of counter is ", counter);
//method 2
counter += 1;
console.log("after increment tha value of counter is ", counter);
// Question 7 (Given three boolean variables, write expressions for AND, OR, and NOT gates.)
var A = true, B = false, C = true; // Write expressions using these.
// AND GATE
console.log(A && B); //FALSE
console.log(A && C); //TRUE
console.log(B && C); //FALSE
// OR GATE
console.log(A || B); //TRUE
console.log(A || C); //TRUE
console.log(C || B); //TRUE
// NOT GATE
console.log(A = B); //FALSE
console.log(B = C); //TRUE
console.log(C = A); //FALSE
// Question 8 ( Show examples of using compound assignment operator)
var num = 10;
num += 5; // num is now 15 (num = num + 5)
num -= 3; // num is now 12 (num = num - 3)
num *= 2; // num is now 24 (num = num * 2)
num /= 4; // num is now 6 (num = num / 4)
console.log(num); // Output: 6
//question 9 (Write a program to check if a number is even or odd.)
var Num = 5;
if (Num % 2 == 0) {
    console.log("number is even");
}
else {
    console.log("number is odd");
}
// Question 10(Check if a person is eligible to vote.)
var age = 18;
if (age >= 18) {
    console.log("This person is eligible to vote.");
}
else {
    console.log("This person is not eligible to vote.");
}
// Question 11( assign a grade based on a numerical score using conditionals.)
var score = 85;
if (score >= 85) {
    console.log("your score earned A grade");
}
if (score >= 80 && score < 85) {
    console.log("your score earned B grade");
}
if (score >= 70 && score < 80) {
    console.log("your score earned C grade");
}
if (score >= 60 && score < 70) {
    console.log("your score earned D grade");
}
if(score>=60&&score<70){
    console.log("your score earned D grade");}
    
// Question 12 (Find the maximum of three numbers)
var x = 10;
var y = 20;
var z = 30;
if (x > y && x > z) {
    console.log("the value of x is maximum");
}
else if (y > x && y > z) {
    console.log("the value of y is maximum");
}
else {
    console.log("the value of z is maximum");
}
// Question 13(check year is leap or not)
//function define
function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0 || year % 400 == 0);
}
var year = 2023;
// function call
if (isLeapYear(year)) {
    console.log(year, "is leap year");
}
else {
    console.log(year, "is not leap year");
}
// recheck on other year
function IsLeapYear(Year) {
    return (Year % 4 == 0 && Year % 100 != 0 || Year % 400 == 0);
}
var Year = 2024;
if (isLeapYear(Year)) {
    console.log(Year, "is leap year");
}
else {
    console.log(Year, "is not leap year");
}
// Question 14 (Write a program that converts temperature from Fahrenheit to Celsius.)
var Fahrenheittemperature = 100;
// formula of conversion is C=5/9*(fahrenheit-32)
console.log("temperature in calcius is ", 5 / 9 * (Fahrenheittemperature - 32));
// Question 15 ( Check if a number is positive, negative, or zero.)
var number = 10; // You can assign any number to this variable
if (number > 0) {
    console.log("Positive");
}
else if (number < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}
// Question 16 (multiplication table of any number upto 10)
var n = 3;
for (var i = 1; i <= 10; i++) {
    console.log(n, " X ", i, " = ", n * i);
}
