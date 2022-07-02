 // lesson 1 mod 2
"use strict";

// Example 5
const string = "Welcom to the future";

const stringArray = string.split(" ");
console.log(stringArray);

let result = stringArray.slice(1, -1);

console.log(result);
//console.log(stringArray.slice(1, -1).join(" "));
console.log(result.join(" "));

// Example 6 
function invertedString(stringTest){
let invertedString = '';
    for (let i = stringTest.length-1; i >= 0; i -= 1) {
        //console.log(stringTest[i]);
        invertedString += stringTest[i];
    }
    return stringTest +'\n' + invertedString;
}
console.log(invertedString("Welcom to the future"));
console.log(invertedString("Hello world"));

function invertedStringSecond(string2){
    let invertedStringSecond = string2.split('');
    console.log(invertedStringSecond);
    return string2 +'\n' + invertedStringSecond.reverse().join('');
}
console.log(invertedStringSecond("Welcom to the future"));
console.log(invertedStringSecond("Hello world"));

// Example 7

const numbers = [2, 17, 94, 1, 23, 37];
let min = numbers[numbers.length-1];
for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log(min);
console.log(Math.min(...numbers));
