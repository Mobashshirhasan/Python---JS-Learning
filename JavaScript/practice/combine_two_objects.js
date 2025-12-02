/* We need to combine given two object together and If they have the same key, 
   keep the value from the second object.

Example:
// Input:
// { a: 1, b: 2 }
// { b: 3, c: 4 }

// Output:
// { a: 1, b: 3, c: 4 }
*/

let myObj1 = { a: 1, b: 2 }
let myObj2 = { b: 3, c: 4 }

let myArr1 = Object.entries(myObj1)
let myArr2 = Object.entries(myObj2)

let newObj = myArr1.filter(([k]) => !myObj2.hasOwnProperty(k)).concat(myArr2)

console.log(newObj);
console.log(myArr1);
console.log(myArr2);