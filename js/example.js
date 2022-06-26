"use strict";

/**** Взаємодія з користувачем та обробка відповіді ****/

/*
Умова завдання:
Використовуючи конструкцію if...else і prompt, написати код,
 який буде запитувати 'Яка офіційна назва в JavaScript?'.
Якщо користувач ввів ECMAScript, то відображати alert з 
реченням 'Правильно!', якщо ні 'Це ECMAScript!'.
*/

let question = prompt("Яка офіційна назва в JavaScript?");
console.log("question", question);
let message;
let normalizedInput = question.toLowerCase();
let trueAnswer = "E'CMAScript";
if (question) {
    
   // message = alert(`введене нічого це - ${typeof question}`); 
    //message = alert('test != null!');
    if (normalizedInput === trueAnswer.toLowerCase()) {
    message = alert('Правильно!');
    }
    else {
    message = alert('Відповідь неправильна!'); 
    }
}
else { //не працює
   
     message = alert('Нічого не введено, введіть якусь відповідь!'); 
    
}


// / Запитайте у користувача якого він року народження. Поточний рік візьміть за константу. // // Виведіть через alert повідомлення для юзера з інформацією, яка вказує на його вік. // // Наприклад: "Ваш вік - хх років" // // Для автоматичного визначення поточного року можете використати слідуючий функціонал: ___ const date = new Date(); console.log(date.getFullYear()); const yearOfBirth = prompt("Введіть свій рік народження"); console.log(date.getFullYear() - yearOfBirth); 


// При завантажені сторінки користувачу пропонується в prompt ввести число. 
// Дані добавляются до значення змінної total.
 // Операція вводу числа продовжується до того часу,
 // поки юзер не нажме Cancel в prompt.
// Після чого потрібно показати alert з повідомленням 
//"Загальна сума введених чисел дорівнює [число]
let total = 0;

do {
    const enterNumber = prompt('Введуть число');
    total += enterNumber;
    console.log('total', total);
    console.log('enterNumber', enterNumber);
    
} while (EnterNumber !== null);

/*
let total = 0;
let bool = true;
while (bool) {
  const number = prompt('введіть число');
  if (number !== null) {
    total += Number(number);
    continue;
  }
  bool = false;
}
console.log(total);
*/