// ways to priont in JavaScript
// console.log("hello world");
// alert("me");
// document.write("this is document write")

// Javascript console API (Application Program Interface):
// console.log("hello world", 4+6, "Another log"); 
// console.warn("this is warning");
// console.error("this is an error");

// JavaScript Variables

// what are varables :- containers to store data values

// var num1 = 20;
// var num2 = 50.02;
// console.log(num1 + num2);


// Data Types :

// 1 Numbers :
// var num1 = 20;
// var num2 = 50.02;


// Strings : 
// var str1 = "This is string."
// var str2 = "This is also a string."


// Objects : (key : value)

// var marks = {
//     ravi : 50,
//     shubham : 60,
//     harry : 70
// }


// Booleans :

// var a = true;
// var b = false;


// Primitive Data Types [Immutable]: (Srtings, Numbers, Boolean, Symbol, Null, Undefined, BigInt)
// Non Primitive Data Types [Mutable]: (Objects, Arrays, Function)

// Key Differences (Primitive vs Non-Primitive)
// Primitive	            Non-Primitive
// Stored by value	        Stored by reference
// Immutable	            Mutable
// Fast, simple data	    Complex data structures
// Size fixed	            Size variable
// 7 types	                Object, Array, Function


// Operators

// Arithmetic Operators : 
// + , - , * , / , 

// Assignment Operators : 
// = , += , -= , *= , /=

// comparison Operators : 
// == , >= , <= , < , >


// Logical AND Operators : (It will not return true until both values are true....)

// true && true    //true
// true && false   //false
// false && true   //flase
// false && false  //false


// Logical OR Operators : (It will give ture ,if any one of the value is true...)

// true || true    //true
// true || false   //true
// false || true   //true
// false || false  //false

// Logical NOT : 
// !false    //true
// !true       //false


// FUNCTIONS : 

// function avg(a, b){
//     return(a + b) / 2;
// }

// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);


//  Write a function that takes a name and prints "Hello <name>"...

// function greet(name){
//     a = "hello Mobashshir"
//     return a;
// }

// result = greet();
// console.log(result);


// // 1. Function that prints “Hello World!”
// function hello() {
//     console.log("Hello World!");
// }

// hello();

// // ✅ 2. Function that returns the square of a number
// function square(num) {
//     return num * num;
// }

// console.log(square(5));  // 25


// function N(sq){
//     return sq * sq;
// }
// // N = sq(5);
// console.log(N(5));


// Function that returns the sum of two numbers
// function sum(a , b){
//     return a + b;
// }

// console.log(sum(2,4));


// function greet(name){
//     return ("hello " + name);
// }
// console.log(greet("Mobi"))


// // LOOPS : 
// var arr = [1,2,3,4,5,6];
// for(let i =0; i<arr.length; i++){
//     console.log(arr[i]);
    
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// arr.forEach(function(element){
//     console.log(element);
// })


// let myFruits = ["apple", "banana", "pears", "guava"]

// myFruits.forEach(function(element){
//     console.log(element);
    
// })

// for (let i = 0; i<myFruits.length; i++){
//     console.log(myFruits[i]);
    
// }



// let fruits = ["apple", "banana", "orange"]

// fruits.forEach(function(items){
//     console.log(items);
    
// })

// for (let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
    
// }

// for (let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
    
// }



// find the sum of the array using for loop
// let num = [1,2,3,4,5]
// sum = 0;    //1,3,6,10,15

// for(let i=0; i<num.length; i++){
//     sum = sum + num[i];
// }
// console.log(sum);



// let a = [4,5,9,10,2,4]
// sum = 0;    //0+4+5+9+10+2+4

// for(let i=0; i<a.length; i++){
//     sum = sum + a[i];
// }
// console.log(sum);


// let numCheck = [1,2,3,4,5]

// numCheck.forEach(function(num){
//     if(num % 2 == 0){
//         console.log(num);
        
//     }
// })


// let num = [1,2,3,4,5,6,"a","b"]
// count = 0;

// for(let i=0; i<num.length; i++){
//     count++;
// }
// console.log(count);



// let i = 0;
// while(i<= 10){
//     console.log(i);
//     i++;
// }

// let i = 0;
// while(i<=20){
//     if(i % 2 == 0){
//         console.log(i);
//     }
//     i++;
// }

// let arr = ["apple", "banana", "mango"];
// count = 0;

// while(count<arr.length){
//     count++;
// }
// console.log(count);



// let num = [1,2,3,4]
// let count = 0;

// while(count < num.length){
//     count++;
// }
// console.log(count);




// let num = 0;
// sum = 0;

// while(num<=50){
//     sum = sum + num;
//     num++;
// }
// console.log(sum);



// let i = 0;
// sum = 0;

// while(i <= 50){
//     sum = sum + i;
//     i++;
// }
// console.log(sum);


// let i = 10;

// while(i>=1){
//     console.log(i);
//     i--;
// }



let arr = [5,6,7,8,9]
for(let i=0; i<arr.length; i++){
    if(i == 3){
        continue;
    }
    console.log(arr[i]);
    
}