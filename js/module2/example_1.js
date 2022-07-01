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
function questionJavaScript(){
     let question = prompt("Яка офіційна назва в JavaScript?");
     console.log("answer", question);
     let normalizedInput = question.toLowerCase();
     let trueAnswer = "ECMAScript";
     if (question) {
          //перевірка alert(`введене нічого це - ${typeof question}`); 
     //message = alert('test != null!');
     if (normalizedInput === trueAnswer.toLowerCase()) {
          return alert('Правильно!');
          console.log('Відповідь правильна!', question );
     }
     else {
          return alert('Відповідь неправильна!'); 
          console.log('Відповідь неправильна!');
     }
     }

     return alert('Нічого не введено, введіть якусь відповідь!'); 
}
console.log(questionJavaScript());