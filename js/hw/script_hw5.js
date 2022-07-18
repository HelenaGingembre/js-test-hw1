"use strict";

console.log("Завдання 1");
console.log("/*-------------------*/");
/*---------------------------------------
Выполни рефакторинг методов объекта pizzaPalace, расставив
 отсутствующие this в местах обращения к свойствам и методам объекта.
 -------------------------------------------*/
const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
 
};


//console.log(pizzaPalace.checkPizza("Smoked")); // true  - функція колбек
console.log(pizzaPalace.order("Smoked"));
console.log("Завдання 2");
console.log("/*-------------------*/");
/*---------------------------------------*/
const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


console.log();


console.log("Завдання 3");
console.log("/*-------------------*/");
/*----------------------------------------------------
баги в коде сервиса хранения истории заказов еды. Тебе необходимо 
исправить их, правильно расставив this в методах объекта historyService,
 чтобы методы начали работать правильно.---------------*/
const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
  // Change code above this line
};


console.table(historyService.getOrdersByEmail("solomon@topmail.net"));

console.log("Завдання 4");
console.log("/*-------------------*/");
/*---------------------------------------*/
const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: 'Mango', __proto__: animal }

console.log(animal.isPrototypeOf(dog)); // true
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.name); // 'Mango'

console.log(dog.hasOwnProperty("legs")); // false
console.log(dog.legs); // 4
/**------------------------
 * Измени код так, чтобы объект parent стал прототипом 
 * для объекта в переменной сhild.
 */
const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line

const child = Object.create(parent);

// Change code above this line
child.name = "Jason";
child.age = 27;

console.table(child);

console.log("Завдання 5");
console.log("/*-------------------*/");
/*---------------------------------------*/
const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

const parent1 = Object.create(ancestor);
parent1.name = "Stacey";
parent1.surname = "Moore";
parent1.age = 54;

const child1 = Object.create(parent1);
child1.name = "Jason";
child1.age = 27;


console.table(parent1);
console.table(child1);


console.log();
console.log("Завдання 6-7");
console.log("/*-------------------*/");
/*---------------------------------------*/
class Car {
  // Change code below this line
constructor(brand, model, price){
  this.brand = brand;
  this.model = model;
  this.price = price;
}


  // Change code above this line
}
const audi = new Car("Audi", "Q3", 36000);

console.log(audi);


console.log();
console.log("Завдання 8");
console.log("/*-------------------*/");
/*---------------------------------------*/
class Car2 {
  // Change code below this line
  constructor({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}

const audi2 = new Car2({
    brand: "Audi",
    model: "Q3",
    price: 36000
}) 

console.log(audi2);
console.log("Завдання 9");
console.log("/*-------------------*/");
/*---------------------------------------*/
class Car3 {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line
    getPrice() {
        return this.price;
   }
    changePrice(newPrice) {
        this.price = newPrice;
   }

  // Change code above this line
}
const audi3= new Car3({
    brand: "Audi",
    model: "Q3",
    price: 36000
}) 


console.log(audi3.getPrice());
console.log("Завдання 10");
console.log("/*-------------------*/");
/*---------------------------------------
Напиши класс Storage, который будет создавать
 объекты для управления складом товаров. 
 Класс ожидает только один аргумент - начальный
  массив товаров, который записывается на создаваемый 
  объект в свойство items.-------------------------------*/


class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(newItem) {
       return  this.items.push(newItem);
    }
    removeItem(itemToRemove) {
      let index = this.items.indexOf(itemToRemove);
            if (index !== -1) { //eсли значение есть в массиве, его индекс не равно  -1
            return this.items.splice(index, 1);
            }        
  }
    
   
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



console.log();