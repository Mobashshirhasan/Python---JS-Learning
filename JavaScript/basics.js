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

function greet(name){
    a = "hello Mobashshir"
    return a;
}

result = greet();
console.log(result);

