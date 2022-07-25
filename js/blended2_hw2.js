"use strict";

//Домашка: "Delivery"
/* Ви пропонуєте користувачу список доступних ресторанів для замовлення їжі.
Користувач обирає конкретний ресторан і отримує список доступних пунктів 
в меню для замовлення із вказанням їх вартості.
 Користувач обирає своє замовлення, після чого має отримати його 
підтвердження та основну інформацію: "що замовив, вартість та час доставки".
const restaurants =[];*/
//Домашка: "Delivery"

const restaurants= [
    {
    order: [],
    brand: "KFC",
    menu: {
      chicken: 50,
      burger: 50,
    },
    deliveryTime: 60,
  },
  {
    order: [],
    brand: "mcDonalds",
    menu: {
      cola: 25,
      burger: 30,
    },
    deliveryTime: 30,
  },
  {
    order: [],
    brand: "Burger King",
    menu: {
      burgerXXL: 170,
      burger: 70,
    },
    deliveryTime: 20,
  },
];

const  torpedaDelivery = {
      
         getDelivery() { },
    
        getAvailableRestaurants() {
          return restaurants.map(restaurant => restaurant.brand);
        },
       chooseRestaurant() {
          
          let brand = '';
          let arrResto = this.getAvailableRestaurants();
          
            do {
                brand = prompt(`оберіть ресторан із списку : ${arrResto}`);
                
            } while (!arrResto.includes(brand));
          
          this.chosenRestaurant = brand;
         
          //console.log( `Pесторан ${brand} знайдено! Оберіть меню`);
          let result = alert(`Pесторан ${brand} знайдено! Зробіть замовлення`);
         
          this.chooseDishes();
          return result;
          
        },
        chooseDishes() {
         // console.log('зайшли в функцію вибору їжі chooseDishes()');
          let email = prompt('Щоб зробити замовлення, вкажіть свій email ');
          
          const resto = this.chosenRestaurant;

          let dishes = prompt(`Оберіть із списку доступне меню: ${services.showMenu(resto)}`);
          this.order.push({email: email, dish: dishes});
         
          services.addOrder({email, dishes}, resto);
          
          },
    };

    
 torpedaDelivery.chooseRestaurant();

