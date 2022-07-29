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
       getDelivery(delivery,food) {
           alert(`Дякуємо. Ваше замовлення: ${food} вартістю: ${delivery.menu[food]}грн,
           \n з ресторану " ${delivery.brand}" \n доставлять через-${delivery.deliveryTime} хв`
          );
        },
        getAvailableRestaurants() {
          return restaurants.map(restaurant => restaurant.brand);
        },
        chooseRestaurant() {
           const restaurantBrands = this.getAvailableRestaurants();
            
           const chooseRest = prompt(`оберіть ресторан із списку : ${restaurantBrands}`);
            if (chooseRest && restaurantBrands.includes(chooseRest)) {
               this.chooseDishes(chooseRest);
            } else {
                this.chooseRestaurant();
           }     
        },
        chooseDishes(choosen) {
          const cafe = restaurants.find(restorant => restorant.brand === choosen);
          const menu = Object.keys(cafe.menu);
          const chooseMenu = prompt(`Оберіть із списку доступне меню: ${menu}`);
          
            if (chooseMenu && menu.includes(chooseMenu)) {
                this.getDelivery(cafe, chooseMenu);
            } else {
                this.chooseDishes(choosen);
            }
          
          },
    };

 
       
 torpedaDelivery.chooseRestaurant();

