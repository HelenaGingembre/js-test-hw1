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
const services = {
  menu: {},
  showMenu(brand) {
    this.getMenu(brand);
    console.log(`Pесторан ${brand} пропонує такі страви:`);
    let obj = { ...this.menu };

    let arrMenu = [];
    for (const key in obj) {
          arrMenu.push(key, obj[key]);
    }
    console.log(arrMenu);
    return arrMenu;  1
  },
  getResto(brand) {
    return restaurants.find(resto => resto.brand === brand);
  },
  getMenu(brand) {
          
        const resto = this.getResto(brand);
        //console.table(resto);
        let result = resto.menu;
        //console.log(result);
        this.menu = result;
        return result;
       
    },
    addOrder({ email, dishes }, brand) { 

        // console.log('зайшли до методу addOrder({ email, dishes }, brand) ');
          const resto = this.getResto(brand);
          let orderUser = resto.order.push({ email, dishes });
                
          alert(`Готується ваше замовлення «${dishes}» `);
          this.confirmOrder(dishes, resto);
        
          return orderUser;
    },
    confirmOrder(dish, resto) { 
      
    // console.log('зайшли до методу confirmOrder(dish) ');
          const key = dish;
          
          const price = resto.menu[key];
          let message = `Дякуємо. Ваше замовлення: ${dish} вартістю: ${price}грн,\n з ресторану " ${resto.brand}" \n доставлять через-${resto.deliveryTime} хв`
          
          console.log(message);
          alert(message);
          return message;
      },
};
const  torpedaDelivery = {
        order: [],
        chosenRestaurant: "",
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

