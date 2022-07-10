"use strict";

//Домашка: "Delivery"
// Ви пропонуєте користувачу список доступних ресторанів для замовлення їжі.
// Користувач обирає конкретний ресторан і отримує список доступних пунктів 
//в меню для замовлення із вказанням їх вартості.
// Користувач обирає своє замовлення, після чого має отримати його 
//підтвердження та основну інформацію: "що замовив, вартість та час доставки".
const restaurants = [
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
const services = {
    showMenu() {
        
        return this.restaurants.menu;
  },
  getMenu() {},
  addOrder() {},
  confirmOrder() {},
};
// const torpedaDelivery = {
//   order: [],
//   chosenRestaurant: "",
//   getAvailableRestaurants() {},
//   chooseRestaurant() {},
//   chooseDishes() {},
// };
// torpedaDelivery.chooseRestaurant();


console.log(services.showMenu());