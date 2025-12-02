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


let newObj = { ...myObj1, ...myObj2 }

console.log(newObj);
