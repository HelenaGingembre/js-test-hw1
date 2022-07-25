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




console.log("Завдання 11");
console.log("/*-------------------*/");
/*-------------------------------------------------
Напиши класс StringBuilder, который принимает один параметр initialValue -
 произвольную строку, которая записывается на создаваемый объект в свойство value.

Объяви следующие методы класса:

getValue() - возвращает текущее значение свойства value.
padEnd(str) - получает парметр str (строку) и добавляет её в 
конец значения свойства value объекта который вызывает этот 
метод.
padStart(str) - получает парметр str (строку) и добавляет
 её в начало значения свойства value объекта который вызывает 
 этот метод.
padBoth(str) - получает парметр str (строку) и добавляет её 
в начало и в конец значения свойства value объекта который 
вызывает этот метод.
-------------------------------------------------*/

class StringBuilder{
    constructor(initialValue) {
        this.value = initialValue;
    }
  getValue() {
    return this.value;
  }
  padEnd(str) {

    // console.log(this.value);
    // console.log(this.value.push(str));
    // return this.value.push(str);
    this.value += str;
    
  }
  padStart(str) {
     this.value = str +this.value;
  }
  padBoth(str) {
     //this.value = this.value+str +this.value;
    this.padStart(str);
    this.padEnd(str);
  }
  
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
 builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


console.log();


console.log("Завдання 12");
console.log("/*-------------------*/");
/*--------------------
Выполни рефакторинг класса Car так, чтобы свойство brand
 было приватным и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.-----------------------------*/
class Car12 {
  // Change code below this line
  #brand;


  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand(){
    return this.#brand;
  }
  changeBrand(newBrand){
    this.#brand = newBrand;

  }

  // Change code above this line
}

const carBrand= new Car12({ brand: "Audi", model: "Q3", price: 36000 });

console.log(carBrand);
//console.log(new Car12({ brand: "Audi", model: "Q3", price: 36000 }));
console.log(carBrand.getBrand());
carBrand.changeBrand("Honda");
console.log(carBrand);


console.log("Завдання 13");
console.log("/*-------------------*/");
/*-------------------------------------------------*/
class Storage13 {
  // Change code below this line
 #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// Change code above this line
const storage13 = new Storage13(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage13.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage13.addItem("Droid");
console.log(storage13.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage13.removeItem("Prolonger");
console.log(storage13.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]



console.log("Завдання 14");
console.log("/*-------------------*/");
/*-------------------------------------------------*/
class StringBuilder14 {
  // Change code below this line
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
const builder14 = new StringBuilder14(".");
console.log(builder14.getValue()); // "."
builder14.padStart("^");
console.log(builder14.getValue()); // "^."
builder14.padEnd("^");
console.log(builder14.getValue()); // "^.^"
builder14.padBoth("=");
console.log(builder14.getValue()); // "=^.^="


console.log();
console.log("Завдання 15");
console.log("/*-------------------*/");
/*--------------------------------
Выполни рефакторинг класса Car. Сделай свойства model 
и price приватными, также как #brand. Стандартизируй 
публичный интерфейс класса заменив уже объявленные 
методы на геттеры и сеттеры brand, model и price для
 взаимодействия с приватными свойствами.-----------------*/
class Car15 {
  // Change code below this line
 #brand;
  #model;
  #price;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
}

const carBrand15= new Car15({ brand: "Audi", model: "Q3", price: 36000 });

console.log(carBrand15);
carBrand15.brand="Honda";
console.log(carBrand15.brand);
console.log(carBrand15);
console.log("Завдання 16");
console.log("/*-------------------*/");
/*-------------------------------------------------*/
class Car16 {
  // Change code below this line
  static MAX_PRICE = 50000;
  
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if(newPrice > Car16.MAX_PRICE){
      this.#price;
      console.log('ціна вища за max');
      return;
    }
    this.#price = newPrice;
    
    }
  
  // Change code above this line
}

const audi16 = new Car16({ price: 35000 });
console.log(audi16.price); // 35000

audi16.price = 49000;
console.log(audi16.price); // 49000

audi16.price = 51000;
console.log(audi16.price); // 49000

console.log();
console.log("Завдання 17");
console.log("/*-------------------*/");
/*-------------------------------------------
Добавь классу Car публичный статический метод 
checkPrice(price), принимающий цену автомобиля. 
Метод должен сравнить значения параметра price 
и приватного статического свойства MAX_PRICE--
---------------------------------------------*/
class Car17 {
  static #MAX_PRICE = 50000;
  // Change code below this line
  static checkPrice(price) {
    if (price > Car17.#MAX_PRICE) {
      return 'Error! Price exceeds the maximum';
    }
    return `Success! Price is within acceptable limits`;
  }
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi17 = new Car17({ price: 36000 });
const bmw = new Car17({ price: 64000 });

console.log(Car17.checkPrice(audi17.price)); // "Success! Price is within acceptable limits"
console.log(Car17.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

console.log();
console.log("Завдання 18");
console.log("/*-------------------*/");
/*-------------------------------------------------*/
class User18{
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Change code below this line
class Admin extends User18 {
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser"
  }
}

console.log(Admin.AccessLevel.BASIC);
console.log(Admin.AccessLevel.SUPERUSER);
console.log();

console.log("Завдання 19");
console.log("/*-------------------*/");
/*-------------------------------------------------*/
class User19 {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin19 extends User19 {
  // Change code below this line
  constructor({email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
    }
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  // Change code above this line
}

const mango19 = new Admin19({
  email: "mango@mail.com",
  accessLevel: Admin19.AccessLevel.SUPERUSER,
});

console.log(mango19.email); // "mango@mail.com"
console.log(mango19.accessLevel); // "superuser"


console.log();
console.log();
console.log();
console.log("Завдання 20");
console.log("/*-------------------*/");
/*-------------------------------------------------*/
class User20 {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin20 extends User20 {
  // Change code below this line
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [];
  }

  
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    //должен проверять наличие значения параметра email
    // в массиве хранящемся в свойстве blacklistedEmails
    //и возвращать true или false.

    if (this.blacklistedEmails.includes(email)) {
      return true;
    }
    return false;
  }

  // Change code above this line
}

const mango20 = new Admin20({
  email: "mango@mail.com",
  accessLevel: Admin20.AccessLevel.SUPERUSER,
});

console.log(mango20.email); // "mango@mail.com"
console.log(mango20.accessLevel); // "superuser"

mango20.blacklist("poly@mail.com");
console.log(mango20.blacklistedEmails); // ["poly@mail.com"]
console.log(mango20.isBlacklisted("mango@mail.com")); // false
console.log(mango20.isBlacklisted("poly@mail.com")); // true


console.log();