"use strict";
console.log("- --------------------example 1 - reverseNumber()---------------" );

function reverseNumber(number) {
   // let x = prompt('Введите число: ', 12345);
    let x = number;
    let result = x.toString().split('').reverse().join('');

    console.log(`Число ${x} теперь: ${result}`);
    return result;
}

console.log(reverseNumber(12345));


console.log("- --------------------example 2 - ------------------------" );
// Напишіть функцію camelize(str), яка перетворює такі рядки “my-short-string” в “myShortString”.
// Тобто дефіси видаляються, а всі слова після них починаються з великої літери.
const camelize = (str)=>{
    return str.split('-') // розбиваємо 'my-short-string”' на масив елементів ['my', 'short', 'string']
        .map(
        // робимо першу літеру велику для всіх елементів масиву, крім першого
      // конвертуємо ['my', 'long', 'word'] в ['my', 'Long', 'Word']
            // .slice(1) - копіює масив починаючи з 1 єлементу
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
         )
        .join('');
};

 console.log( camelize("background-color"));// == 'backgroundColor';
console.log( camelize("list-style-image"));// == 'listStyleImage';
console.log(camelize("-webkit-transition"));// == 'WebkitTransition';

console.log("- --------------------example 3 - ------------------------");

// Напишіть функцію filterRange(arr, a, b), яка приймає масив arr,
//     шукає в ньому елементи більші - рівні a та менші - рівні b і 
// віддає масив цих елементів.

// Функція повинна повертати новий масив і не змінювати вихідний.

let arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
    return arr.filter(arg=> (arg >= a && arg <= b)) +'(відфільтровані значення)';
}

let filtered = filterRange(arr, 1, 4);
console.log(filtered); // 3,1 (відфільтровані значення)

console.log(arr); // 5,3,8,1 (не змінюється)

let filtered2 = filterRange(arr, 3, 5);
console.log(filtered2); // 5,3 (відфільтровані значення)

console.log("- --------------------example 4 - -замикання-----------------------");

// Напишіть функцію sum яка працює ось так: sum(a)(b) = a+b.

// Саме так, використовуючи подвійні дужки (це не друкарська помилка).
// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(a) {

  return function(b) {
    return a + b; // Бере "a" із зовнішнього лексичного середовища
  };

}
console.log( sum(1)(2) ); // 3
console.log( sum(5)(-1) ); // 4

console.log("- --------------------example 4 - -методи функцій-----------------------");


//Напишіть функцію filterRangeInPlace(arr, a, b), яка приймає масив arr 
//і видаляє з нього всі значення крім тих, які знаходяться між a і b.
//Тобто, перевірка має вигляд a ≤ arr[i] ≤ b.
// Функція повинна змінювати поточний масив і нічого не повертати.