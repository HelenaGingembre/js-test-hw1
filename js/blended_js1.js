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


/*----------------------------------------------------------------*/
//home work
// Замовлення турів:
// Пишемо реєстрацію користувача за допомогою prompt.  Окремо логін та пароль. Валідацію не потрібно робити.
// Аналогічно пишемо логінізацію: запитуємо логін та пароль, порівнюємо їх з даними, які були введені при авторизації. Якщо все вірно - виводимо в консоль, що логін успішний. Якщо ні - знову запитуємо логін та пароль.
// Запитуємо максимальну суму, яку готовий витратити користувач на тур.
// Виводимо список усіх країн в alert, які доступні по сумі для користувача.
// Вказуємо країну через prompt  і купляємо тур.
// Виводимо повідомлення, що тур оплачений і залишок на рахунку користувача.
// const countries = [
//   "Ukraine",
//   "Poland",
//   "Croatia",
//   "Montenegro",
//   "France",
//   "USA",
// ];
// const countriesPrice = [100, 200, 300, 400, 500, 600];
// let userName;
// let userPass;
// let userCredits;
// let userCountry;
// let maxPrice;