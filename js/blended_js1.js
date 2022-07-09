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

const  buyingTour = {
tours :[
  { name: "Ukraine", price: 100 },
  { name: "Poland", price: 200 },
  { name: "Croatia", price: 300 },
  { name: "Montenegro", price: 400 },
  { name: "France", price: 500 },
  { name: "USA", price: 600},
] ,
 countries: [
  "Ukraine",
  "Poland",
  "Croatia",
  "Montenegro",
  "France",
  "USA",
],
  countriesPrice: [100, 200, 300, 400, 500, 600],
  userName:[],
  userPass:[],
/*

let userCredits;
let userCountry;
let maxPrice;
*/
// 1 - Пишемо реєстрацію користувача за допомогою prompt. 


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
  registration() {
  //  let userName =[];
  //  let userPass =[];
  this.userName.push(prompt('Введіть логін для реєстарції'));
  this.userPass.push(prompt('Введіть пароль для реєстарції'));

  return `Ваш логін: ${this.userName} \nВаш пароль: ${this.userPass}`;
},


//2- Аналогічно пишемо логінізацію: запитуємо логін та пароль,
// порівнюємо їх з даними, які були введені при авторизації. 
 login() {
  const loginToFind = prompt('Введіть логін, щоб увійти ');
  let message = `Користувача ${loginToFind} не знайдено.`;

  while (this.userName.includes(loginToFind)) {
    // message = `Користувач ${loginToFind} знайден.`;
    const passToFind = prompt('Введіть свій пароль ');

    if (this.userPass.includes(passToFind)) {
      message = `вітаємо ${loginToFind}, ви успішно залогінились.`
      
      break;
    } else {

      message = `Упс..., ${loginToFind}, пароль невірний.`;
      break;
      //continue;
    }
  }
  // Якщо ні - знову запитуємо логін та пароль.
    ///-------як написати???------------
   return message;
},

// maxPrice : prompt('Введіть максимальну суму, що готові витратити на тур '),

 
//3) Запитуємо максимальну суму, яку готовий витратити користувач на тур.
// 4) Виводимо список усіх країн в alert, які доступні по сумі для 
// користувача.
  toursForClients: [],
 
  affordableTour() {

  let maxPrice = prompt('Введіть максимальну суму, що готові витратити на тур ');

    //let toursForClients = [];
    let result ;
      
      for (const tour of this.tours) {

            if (tour.price <= maxPrice) {
              this.toursForClients.push(tour);
              //console.log(tour);
                 // console.log(toursForClients);
            }
      }
    
    if (this.toursForClients.length != 0) {
      console.table(this.toursForClients);
     return result = alert(`Доступні тури: ${this.toursForClients}`);
    }
    
    return result = alert(`Доступних турів немає`);
  },
// 5) Вказуємо країну через prompt  і купляємо тур.
// 6) Виводимо повідомлення, що тур оплачений і залишок на рахунку користувача.
  buyTour() {
    let userCredits = 500; //let userCredits = maxPrice;
    let userCountry = prompt ('Оберіть країну для відпочинку');
    let maxPrice;
   
    for (const tour of this.tours) {
      if (userCountry === tour.name) {
        userCredits -= tour.price; 
        return console.log(`Тур ${tour.name} оплачений і залишок на рахунку ${userCredits}`);
      }

    }
    return console.log(`Тур не вибраний, на рахунку ${userCredits}`);
 },

};

console.log(buyingTour.registration());
console.log(buyingTour.login());
console.log(buyingTour.affordableTour());
console.log(buyingTour.buyTour());

/*
let userCredits;
let userCountry;
const countries = [
  "Ukraine",
  "Poland",
  "Croatia",
  "Montenegro",
  "France",
  "USA",
];

const countriesPrice =[100, 200, 300, 400, 500, 600];
 let userName=[];
 let userPass=[];

*/

const countries = [
  "Ukraine",
  "Poland",
  "Croatia",
  "Montenegro",
  "France",
  "USA",
];

const countriesPrice = [100, 200, 300, 400, 500, 600];

const tours = [];

const newTours = {
  ...tours,
    
}

// const keys = Object.keys(tours);
// keys[0] = 'name';
// keys[1] = 'price';
// const values = Object.values(tours);

for (const tour of tours) {
  

      for (let i = 0; i < countries.length; i += 1){
            
      console.log(countries[i]);
          tour['name'] = countries[i];
           tours.push(tour['name']);
               
          //console.log(tour);
      }

      for (let i = 0; i < countriesPrice.length; i += 1) {
          

        tour.price = countriesPrice[i];
         tours.push(tour.price);
           // tours[i].price = countriesPrice[i];
            // console.log(tour);
         // tours.push(tours[i].price);
          
  }
}
console.log(tours);
console.table(tours);

