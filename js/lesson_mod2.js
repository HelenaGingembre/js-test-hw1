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
//var 1 ----------------
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
//var 2 ----------------
function invertedStringSecond(string2){
    let invertedStringSecond = string2.split('');
    console.log(invertedStringSecond);
    return string2 +'\n' + invertedStringSecond.reverse().join('');
}
console.log(invertedStringSecond("Welcom to the future"));
console.log(invertedStringSecond("Hello world"));

//var 3 ----------------
function reverseNumber() {
    let x = prompt('Введите число: ', 12345);
    let result = x.toString().split('').reverse().join('');

    alert(`Число ${x} тепер перевернуте: ${result}`)
    return `Число ${x} тепер перевернуте: ${result}`;
}
console.log(reverseNumber());
// Example 7

const numbers = [2, 17, 94, 1, 23, 37];
let min = numbers[numbers.length-1];
for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log('мінімальне число: ' + min);
console.log(Math.min(...numbers));


// Example 8 Pепета
function changeCase(string8) {
    
    const letters = string8.split('');
    let invertedString = '';
   
    for (const letter of letters) {
        
        const isInLowetCase = letter === letter.toLowerCase();
        
        invertedString += isInLowetCase
            ? letter.toUpperCase()
            : letter.toLowerCase();
    }
    
    return ` строка ${string8} в зворотньому регістрі =  ${invertedString}`;
}

console.log(changeCase('sdkDTRFc'));

// Example 9 Pепета
function fn(a, b, c, ...args) {
    console.log(`${a} ${b} ${c} `);
    console.log(args);
    
}
fn('hello', 1, 2, 3, 4, 5);
fn('hi', 1, 2, 3);


// Example 10 Pепета
function sum(...args) {
    console.log(args);
    let total = 0;

    for (const arg of args) {
        total += arg;
}
    return total;
}

console.log(sum(15, 20, 3, 4, 5));

// Example 11 Pепета
console.log("------Example 11 Pепета--------");
function filterNumbers(array, ...args) {
    console.log('array:', array);
    console.log('args:', args);
    const uniqueElements = [];

    for (const element of array) {
        if (args.includes(element)) {
            uniqueElements.push(element);

            console.log(`${element} есть везде!`);
        }
}
    return uniqueElements;
}

console.log(filterNumbers([5, 15, 30,3,20],15, 20, 3, 4, 5));