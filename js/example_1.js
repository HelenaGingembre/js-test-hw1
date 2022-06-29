"use strict";

/**** Взаємодія з користувачем та обробка відповіді ****/

/*
Умова завдання:
Використовуючи конструкцію if...else і prompt, написати код,
 який буде запитувати 'Яка офіційна назва в JavaScript?'.
Якщо користувач ввів ECMAScript, то відображати alert з 
реченням 'Правильно!', якщо ні 'Це ECMAScript!'.
*/
console.log("----------- Example 1 ---------------");
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

