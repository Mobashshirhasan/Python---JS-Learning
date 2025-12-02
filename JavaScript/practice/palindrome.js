/*
    We need to write a function that checks if a given string is a palindrome.

    Example:
    Input: "madam"
    Output: true

    Input: "hello"
    Output: false
*/

function pal(str){
    let reverse = str.split("").reverse().join("")
    return reverse === str
}
console.log(pal("madam"));
console.log(pal("abc"));
