"use strict";

/**** Взаємодія з користувачем та обробка відповіді ****/

/*
Умова завдання:
Використовуючи конструкцію if...else і prompt, написати код, який буде запитувати 'Яка офіційна назва в JavaScript?'.
Якщо користувач ввів ECMAScript, то відображати alert з реченням 'Правильно!', якщо ні 'Це ECMAScript!'.
*/

let question = prompt("Яка офіційна назва в JavaScript?", "");
let message;
let normalizedInput = question.toLowerCase();
let trueAnswer = "ECMAScript";
if (question != NaN) {
    message = alert(`введене нічого це - ${typeof question}`);
     message = alert('test != null!');
    if (normalizedInput === trueAnswer.toLowerCase()) {
    message = alert('Правильно!');
    }
    else {
    message = alert('Відповідь неправильна!'); 
    }
}
else { //не працю
   
     message = alert('Нічого не введено, введіть якусь відповідь!'); 
    
}