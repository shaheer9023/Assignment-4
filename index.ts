// Question 1 (Declare a variable named greeting with the string value "Hello, World!" and print it.)

let greeting:string="hello world";
console.log(greeting);

// Question 2 (Define two variables with integer values and calculate their sum, difference, product, and quotient)

let num1:number=4;
let num2:number=6;
console.log("sum of given two numbers is :",num1+num2);
console.log("difference of given two numbers is :",num1-num2);
console.log("product of given two numbers is :",num1*num2);
console.log("quotient of given two numbers is :",num1/num2);

// Question 3 (Swap the values of two variables without using a third variable.)

let a=1;
let b=2;
a=a+b;
b=a-b;
a=a-b;
console.log("after swapping the value of a is ",a ,"and the value of b is ",b);

// Question 4 (This applies to TypeScript. Create a string variable and try changing its type.)

let message: string;
message = 'Hello, TypeScript!'; // Valid assignment
//message = 123; Error: Type 'number' is not assignable to type 'string'

// Question 5 (Use the modulus operator to find the remainder of two numbers)

let Num1=20;
let Num2=4;
console.log("the remainder of ",Num1," and ",Num2,"after division is ",Num1%Num2);

// Question 6 (Increment a variable's value by 1 using two different methods.)

let counter=0;
// method 1
counter=counter+1;
console.log("after increment tha value of counter is " , counter);
//method 2
counter+=1;
console.log("after increment tha value of counter is " , counter);

// Question 7 (Given three boolean variables, write expressions for AND, OR, and NOT gates.)

let A = true,
  B = false,
  C = true; // Write expressions using these.

  // AND GATE

  console.log(A && B);//FALSE
  console.log(A && C);//TRUE
  console.log(B && C);//FALSE

  // OR GATE

  console.log(A || B);//TRUE
  console.log(A || C);//TRUE
  console.log(C|| B);//TRUE

  // NOT GATE

  console.log(A! = B);//FALSE
  console.log(B! = C);//TRUE
  console.log(C! = A);//FALSE

// Question 8 ( Show examples of using compound assignment operator)

let num = 10;

num += 5; // num is now 15 (num = num + 5)
num -= 3; // num is now 12 (num = num - 3)
num *= 2; // num is now 24 (num = num * 2)
num /= 4; // num is now 6 (num = num / 4)

console.log(num); // Output: 6

//question 9 (Write a program to check if a number is even or odd.)

let Num:number=5;
if(Num%2==0){
  console.log("number is even");
}
else
{
  console.log("number is odd");

}

// Question 10(Check if a person is eligible to vote.)

let age: number = 18;

if (age >= 18) {
    console.log("This person is eligible to vote.");
} else {
    console.log("This person is not eligible to vote.");
}

// Question 11( assign a grade based on a numerical score using conditionals.)

let score:number=85;
if(score>=85){
  console.log("your score earned A grade");
}
if(score>=80&&score<85){
  console.log("your score earned B grade");
}
if(score>=70&&score<80){
  console.log("your score earned C grade");
}
if(score>=60&&score<70){
  console.log("your score earned D grade");
}
if(score>=60&&score<70){
  console.log("your score earned D grade");}

// Question 12 (Find the maximum of three numbers)

let x:number=10;
let y:number=20;
let z:number=30;
if(x>y&&x>z){
  console.log("the value of x is maximum");
}
else if(y>x&&y>z){
  console.log("the value of y is maximum");
}
else{
  console.log("the value of z is maximum");
}

// Question 13(check year is leap or not)
//function define
function isLeapYear(year:number):boolean{
  return(year%4==0&&year%100!=0||year%400==0)
}
let year:number=2023;
// function call
if(isLeapYear(year)){
  console.log(year,"is leap year");
}
else{
  console.log(year,"is not leap year");
}

// recheck on other year

function IsLeapYear(Year:number):boolean{
  return(Year%4==0&&Year%100!=0||Year%400==0)
}
let Year:number=2024;

if(isLeapYear(Year)){
  console.log(Year,"is leap year");
}
else{
  console.log(Year,"is not leap year");
}

// Question 14 (Write a program that converts temperature from Fahrenheit to Celsius.)

let Fahrenheittemperature:number=100;
// formula of conversion is C=5/9*(fahrenheit-32)
console.log("temperature in calcius is " ,5/9*(Fahrenheittemperature-32));

// Question 15 ( Check if a number is positive, negative, or zero.)

let number: number = 10; // You can assign any number to this variable

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Question 16 (multiplication table of any number upto 10)

let n:number=3;
for(let i=1;i<=10;i++){
  console.log(n," X ",i," = ",n*i);
}




 
  


