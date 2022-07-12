"use strict";
//  Реалізуйте result
const a = ['a', 'b', 'c'];
const b = [1, [2, 3]]; 
const c = 0;
//let arr = b.slice(1, 1);
const arr = [];

for (const key of b) {
    if (Array.isArray(key)) {
        arr.push(...key);
         
    } else arr.push(key);
}

// const result = [...a, c,  ...arr];
// console.log(result); //['a', 'b', 'c', 0, 1, 2, 3] 

// array = [1, 2, [3, 4], [5, 6], 7];
// const newArr = [];
// //  Реалізуйте result
// for (const key of array) {
//     Aray.isArray(key) ? newArr.push(...key) : newArr.push(key);
// }
// console.log(array);

// Реалізуй функцію, яка приймає тип String або Number і 
//повертає масив з протилежним типом даних:
function convert(...args) {
    let newArg = [];
    for (const arg of args) {
       
            typeof arg !== 'number'
            ? newArg.push(Number(arg))
            : newArg.push(String(arg));
  }
    return newArg;
}

console.log(convert('1', 2, 3, '4')); // [1, '2', '3', 4]

// Напиши функцію, яка приймає рядок text, та повертає масив
// усіх великих літер, які є в text
//  в такому ж порядку. 


function getCapitals(string) {
    const newArr = [];

    const normString = string.split(' ').join('');
    
    for (let i = 0; i < normString.length; i += 1){
       
        if (isNaN(normString[i])) {
            
                normString[i] === normString[i].toUpperCase()
                ? newArr.push(normString[i].toUpperCase())
                : false;
            }
    }
    return newArr;
}
  
console.log(getCapitals('Ukraine Everywhere')); //['U', 'E'] 
console.log(getCapitals('UkraiNe EveRywherE')); // ['U', 'N', 'E', 'R', 'E'] 
console.log(getCapitals("1234M5678A9")); // ['M', 'A'] 
