"use strict";
console.log("----------- Example 10 ---------------");
/**** Введення користувача та розгалуження ****/

/*
Умова завдання:
Напиши скрипт, який буде запитувати логін за допомогою
 prompt і логуватиме результат у консоль браузера.
1- Якщо відвідувач вводить "Адмін", 
то prompt запитує пароль
2- Якщо нічого не введено або натиснуто клавішу Esc
 - вивести рядок "Скасовано"
3- В іншому випадку вивести рядок "Я вас не знаю"
Пароль перевіряти так:
- Якщо введено пароль "Я адмін", то вивести рядок "Вітаю!"
- Інакше виводити рядок "Невірний пароль"
*/
function loginAdmin(){
let userName = prompt("Хто відвідувач?");
 
if (userName == "Admin") {
    const pass = prompt("Введіть пароль адміна?");
    if (pass == 'Я адмін') {
           return   alert(`Вітаю! ${userName}`);
    } else {
       return  alert("Невірний пароль");
    }
}
else if (userName == null) {
    return  alert("Скасовано вхід користувачем або нічого не введено");
}

   return  alert("Я вас не знаю");

}
console.log(loginAdmin());