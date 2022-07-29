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
      //let obj = { ...this.menu };
      const dishes = Object.keys(this.menu);
       //const price = Object.values(this.menu);
    // let arrMenu = [];
    // for (const key in obj) {
    //       arrMenu.push(key, obj[key]);
      
    // }
      console.log(dishes + ' - '+ this.menu[dishes]);
      console.log(this.menu[dishes]);
      return dishes + ' - '+ this.menu[dishes];
  },
  getRestaurant(brand) {
    return restaurants.find(restaurant=> restaurant.brand === brand);
  },
  getMenu(brand) {
          
        const currentRestaurant = this.getRestaurant(brand);
        let result = currentRestaurant.menu;
        //console.log(result);
        this.menu = result;
        return result;
       
    },
    addOrder({ email, dishes }, brand) { 

        // console.log('зайшли до методу addOrder({ email, dishes }, brand) ');
          const currentRestaurant = this.getRestaurant(brand);
          let orderUser = currentRestaurant.order.push({ email, dishes });
                
          alert(`Готується ваше замовлення «${dishes}» `);
          this.confirmOrder(dishes, currentRestaurant);
        
          return orderUser;
    },
    confirmOrder(dish, currentRestaurant) { 
      
    // console.log('зайшли до методу confirmOrder(dish) ');
          const key = dish;
          
          const price = currentRestaurant.menu[key];
          let message = `Дякуємо. Ваше замовлення: ${dish} вартістю: ${price}грн,\n з ресторану " ${currentRestaurant.brand}" \n доставлять через-${currentRestaurant.deliveryTime} хв`
          
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
          let arrRestaurants = this.getAvailableRestaurants();
          
            do {
                brand = prompt(`оберіть ресторан із списку : ${arrRestaurants}`);
                
            } while (!arrRestaurants.includes(brand));
          
          this.chosenRestaurant = brand;
         
          //console.log( `Pесторан ${brand} знайдено! Оберіть меню`);
          let result = alert(`Pесторан ${brand} знайдено! Зробіть замовлення`);
         
        this.chooseDishes();
        
          return result;
          
        },
        chooseDishes() {
         // console.log('зайшли в функцію вибору їжі chooseDishes()');
          let email = prompt('Щоб зробити замовлення, вкажіть свій email ');
          
          const currentRestaurant = this.chosenRestaurant;

          let dishes = prompt(`Оберіть із списку доступне меню: ${services.showMenu(currentRestaurant)}`);
          this.order.push({email: email, dish: dishes});
         
          services.addOrder({email, dishes}, currentRestaurant);
          
          },
    };

 services.showMenu("KFC");
       
//  torpedaDelivery.chooseRestaurant();

