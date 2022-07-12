"use strict";

//Домашка: "Delivery"
// Ви пропонуєте користувачу список доступних ресторанів для замовлення їжі.
// Користувач обирає конкретний ресторан і отримує список доступних пунктів 
//в меню для замовлення із вказанням їх вартості.
// Користувач обирає своє замовлення, після чого має отримати його 
//підтвердження та основну інформацію: "що замовив, вартість та час доставки".
//const restaurants =[];

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
const services = {
    
    showMenu(brand) {
       
        //getMenu(brand);
       
        let result = console.table(this.getMenu(brand));
        // Перебирающий forEach
    //      restaurants.forEach(function (restaurant, index) {
    //    result = console.table(`Индекс ${index}, значение ${restaurant}`);
    //     });
       // return result;
        return  result;
           //щось в цьому дусі - можливо тндекс передати і по ундексу шукати
    },
    getMenu(brand) {
        let result=`Pесторан ${brand} не знайдено.. спробуйте ще раз`;
       
        torpedaDelivery.chooseRestaurant();
       
        for (const restaurant of restaurants) {
            if (brand === restaurant.brand){
                result = restaurant.menu;
                break;
            }
        }
        return result;
    },
    addOrder() { },
    confirmOrder() { 

        return `Дякуємо. Ваше замовлення доставлять через ${restaurants.deliveryTime} хв`
    },
};
const  torpedaDelivery = {
        order: [],
        chosenRestaurant: "",
        getAvailableRestaurants() { },
    
        chooseRestaurant() {
            let brand = prompt('введіть ресторан: "KFC","mcDonalds","Burger King" ');
            let result = console.log(`Pесторан ${brand} не знайдено`);
            for (const restaurant of restaurants) {
                if (brand === restaurant.brand) {
                    console.log('зайшли в цикл вибору ресторану');
                    result = restaurant.brand;
                    break;
                }
            }
            return result;
                
        },
        chooseDishes() { },
    };

torpedaDelivery.chooseRestaurant();
//console.table(services.getMenu);
// console.table(services.getMenu("mcDonalds"));
// console.table(services.showMenu("mcDonalds"));
//services.getMenu("mcDonalds");
//services.showMenu("mcDonalds");