"use strict";
// / Запитайте у користувача якого він року народження.
// Поточний рік візьміть за константу. // 
// Виведіть через alert повідомлення для юзера з інформацією,
// яка вказує на його вік. //
 // Наприклад: "Ваш вік - хх років" //
 // Для автоматичного визначення поточного року можете
 //використати слідуючий функціонал:
// ___ const date = new Date(); 
//console.log(date.getFullYear()); 
//const yearOfBirth = prompt("Введіть свій рік народження");
//console.log(date.getFullYear() - yearOfBirth);


// При завантажені сторінки користувачу пропонується в prompt ввести число. 
// Дані добавляются до значення змінної total.
 // Операція вводу числа продовжується до того часу,
 // поки юзер не нажме Cancel в prompt.
// Після чого потрібно показати alert з повідомленням 
//"Загальна сума введених чисел дорівнює [число]

//------------------------------------

// не працює
/* let total = 0;
do {
    const enterNumber = prompt('Введіть число');
    total += enterNumber;
    console.log('total: ', total);
    console.log('enterNumber: ', enterNumber);
    
} while (EnterNumber !== null);
*/
//------------------------------------
// працює
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


/*----------------------------------------------------------------*/
//home work
// Замовлення турів:
// 1) Пишемо реєстрацію користувача за допомогою prompt. 
// Окремо логін та пароль.Валідацію не потрібно робити.
// 2) Аналогічно пишемо логінізацію: запитуємо логін та пароль,
// порівнюємо їх з даними, які були введені при авторизації. 
 // (Репета зан 2 1: 03 - 1: 20)
// Якщо все вірно - виводимо в консоль, що логін успішний.
// Якщо ні - знову запитуємо логін та пароль.
// 3) Запитуємо максимальну суму, яку готовий витратити користувач 
// на тур.
// 4) Виводимо список усіх країн в alert, які доступні по сумі для 
// користувача.
// 5) Вказуємо країну через prompt  і купляємо тур.
// 6) Виводимо повідомлення, що тур оплачений і залишок на рахунку користувача.
const countries = [
  "Ukraine",
  "Poland",
  "Croatia",
  "Montenegro",
  "France",
  "USA",
];
const countriesPrice = [100, 200, 300, 400, 500, 600];
let userName =[];
let userPass =[];
let userCredits;
let userCountry;
let maxPrice;

// 1 - Пишемо реєстрацію користувача за допомогою prompt. 

//console.log(userName);
//console.log(userPass);
/*
// поки користувач не відмінив реєстрацію

let bool = true;
while (bool) {

  if (userName !== null) {
    userName.push(prompt('Введіть логін для реєстарції'));
      
      if (userPass !== null) {
           userPass.push(prompt('Введіть пароль для реєстарції'));

      } else {
          bool = false;
          console.log('Ви не ввели пароль. Спробуйте ще раз');
          break;
      }
    continue;
  }
  bool = false;
  console.log('Ви не пройшли реєстрацію. Спробуйте ще раз');
 }
*/
function registration() {
  userName.push(prompt('Введіть логін для реєстарції'));
  userPass.push(prompt('Введіть пароль для реєстарції'));

  return `Ваш логін: ${userName} \nВаш пароль: ${userPass}`;
}
console.log(registration());

//2- Аналогічно пишемо логінізацію: запитуємо логін та пароль,
// порівнюємо їх з даними, які були введені при авторизації. 
function login() {
  const loginToFind = prompt('Введіть логін, щоб увійти ');
  let message = `Користувача ${loginToFind} не знайдено.`;

  while (userName.includes(loginToFind)) {
    // message = `Користувач ${loginToFind} знайден.`;
    const passToFind = prompt('Введіть свій пароль ');

    if (userPass.includes(passToFind)) {
      message = `вітаємо ${loginToFind}, ви успішно залогінились.`
      
      break;
    } else {

      message = `Упс..., ${loginToFind}, пароль невірний.`;
      break;
      //continue;
    }
  }
  // Якщо ні - знову запитуємо логін та пароль.
    ///------- написати!!!------------
   return message;
}

console.log(login());


//3) Запитуємо максимальну суму, яку готовий витратити користувач 
// на тур.
// 4) Виводимо список усіх країн в alert, які доступні по сумі для 
// користувача.
// 5) Вказуємо країну через prompt  і купляємо тур.
// 6) Виводимо повідомлення, що тур оплачений і залишок на рахунку користувача.

console.log();
console.log();