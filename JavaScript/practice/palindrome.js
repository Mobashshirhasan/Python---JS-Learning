/*
    We need to write a function that checks if a given string is a palindrome.

    Example:
    Input: "madam"
    Output: true

    Input: "hello"
    Output: false
*/

function palindrome(str){
    let reverse = str.split("").reverse().join("")
    return str === reverse;
}
console.log(palindrome("madam"));
console.log(palindrome("hello"));
console.log(palindrome("tiger"));
console.log(palindrome("121"));
