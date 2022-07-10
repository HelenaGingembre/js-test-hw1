"use strict";


function reverseNumber() {
    let x = prompt('Введите число: ', 12345);
    let result = x.toString().split('').reverse().join('');

    alert(`Число ${x} теперь: ${result}`)
    return result;
}

console.log(reverseNumber());