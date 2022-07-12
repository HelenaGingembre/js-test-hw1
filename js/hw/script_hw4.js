"use strict";
console.log("Завдання 1");
console.log("/*-------------------*/");
/*---*/

function makePizza1() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line

const result = makePizza1();
const pointer = makePizza1;

console.log(result);
console.log(pointer);

/*----------------------------------------*/


console.log("Завдання 2");
console.log("/*-------------------*/");
/*--------------
Дополни функцию makeMessage так, чтобы она ожидала 
вторым параметром (параметр callback) колбэк-функцию 
и возвращала ее вызов. Функция deliverPizza или makePizza 
будет передаваться как колбэк и ожидать аргументом
 имя готовой доставляемой пиццы.---------------------*/
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  
  return callback(pizzaName);

}



console.log(makeMessage("Royal Grand", makePizza));
console.log(makeMessage("Ultracheese", deliverPizza));

/*----------------------------------------*/


console.log("Завдання 3");
console.log("/*-------------------*/");
/*------------------
Дополни второй вызов функции makePizza(pizzaName, callback), 
передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), 
которая логирует строку "Eating pizza <имя пиццы>".----------------------*/

function makePizza3(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza3("Royal Grand", function deliverPizza3(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza3("Ultracheese", function eatPizza3(pizzaName) {
  console.log(`Eating pizza ${pizzaName}.`);
});


console.log("/*----------------------------------------*/");
/*----------------------------------------*/
function processCall(recipient) {
  // Имитируем доступность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
    // Логика активации автоответчика
  } else {
    console.log(`Соединяем с ${recipient}, ожидайте...`);
    // Логика принятия звонка
  }
}
processCall("Mango");

/**рефакторинг
 * рефакторинг функции так, чтобы она принимала два колбэка 
 * onAvailable и onNotAvailable, и вызывала их по условию.
 */
function processCallNew(recipient, onAvailable, onNotAvailable) {
  // Имитируем доступеность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Соединяем с ${name}, ожидайте...`);
  // Логика принятия звонка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
  // Логика активации автоответчика
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступен, записываем голограмму.`);
  // Логика записи голограммы
}

processCallNew("Mango", takeCall, activateAnsweringMachine);
processCallNew("Poly", takeCall, leaveHoloMessage);


console.log("/*----------------------------------------*/");

console.log("Завдання 4");
console.log("/*-------------------*/");
/*-------------------------------------------------------
Необходимо написать логику обработки заказа пиццы.
 Выполни рефакторинг метода order так, чтобы он принимал 
 вторым и третим параметрами два колбэка onSuccess и onError.
1)Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, 
метод order должен возвращать результат вызова колбэка onError, 
передавая ему аргументом строку "There is no pizza with a name 
<имя пиццы> in the assortment."
2)Если в свойстве pizzas есть пицца с названием из параметра pizzaName, 
метод order должен возвращать результат вызова колбэка onSuccess, 
передавая ему аргументом имя заказанной пиццы.
 ---------------------------------------------------------*/
const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {

    if (this.pizzas.includes(pizzaName)) {
      //console.log(this.pizzas.includes(pizzaName));
      return onSuccess(pizzaName);
     }
    
     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
  
  },
};
// Change code above this line - Изменить код над этой строкой
// Callback for onSuccess
function makePizza4(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
   return `Error! ${error}`; 
}

// Method calls with callbacks
console.log(pizzaPalace.order('Smoked', makePizza4, onOrderError));
console.log( pizzaPalace.order('Four meats', makePizza4, onOrderError));
console.log(pizzaPalace.order('Big Mike', makePizza4, onOrderError));
console.log(pizzaPalace.order('Vienna', makePizza4, onOrderError));


/*----------------------------------------*/

console.log("/*----------------------------------------*/");
console.log("Завдання 5");
console.log("/*-------------------*/");
/*----------------------------------------*/
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  // for (let i = 0; i < orderedItems.length; i += 1) {
  //   totalPrice += orderedItems[i];
  // }
   orderedItems.forEach(function (item, index){
     totalPrice += item;
   });

  // Change code above this line
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); //138
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));//1116

/*----------------------------------------*/

console.log("/*----------------------------------------*/");
console.log("Завдання 6");
console.log("/*-------------------*/");
/*-----
Функция filterArray(numbers, value) принимает массив чисел numbers
 и возвращает новый массив, в котором будут только те элементы 
 оригинального массива, которые больше чем значение параметра value.
 -----------------------------------*/
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] > value) {
  //     filteredNumbers.push(numbers[i]);
  //   }
  // }
numbers.forEach(function (number, index){
  if (number > value) {
      filteredNumbers.push(number);
    }
});

  // Change code above this line
  return filteredNumbers;
}


console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log();

/*----------------------------------------*/

console.log("/*----------------------------------------*/");
console.log("Завдання 7");
console.log("/*-------------------*/");
/*----
Функция getCommonElements(firstArray, secondArray) 
принимает два массива произвольной длины в параметры 
firstArray и secondArray, и возвращает новый массив
 их общих элементов, то есть тех которые есть в обоих 
 массивах.------------------------------------*/

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }

  firstArray.forEach(function (item, index){
  if (secondArray.includes(item)) {
      commonElements.push(item);
    }
});

  return commonElements;
  // Change code above this line
}


console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));


/*----------------------------------------*/

console.log("/*----------------------------------------*/");
console.log("Завдання 8-9");
console.log("/*-------------------*/");
/*----------------------------------------*/
// Change code below this line

//function calculateTotalPrice8(quantity, pricePerItem) {
   // return quantity * pricePerItem;
//}

const calculateTotalPrice8 = (quantity, pricePerItem) => quantity * pricePerItem;

console.log(calculateTotalPrice8(8, 60));


console.log("/*----------------------------------------*/");
console.log("Завдання 10");
console.log("/*-------------------*/");
/*----------------------------------------*/
const numbers10 = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
};

numbers10.forEach(logMessage);
/**--------------------------------- */
// Change code below this line
function calculateTotalPrice10(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
}

const calculateTotalPrice10_2 = (orderedItems) => {
  let totalPrice = 0;
  // Анонимная стрелочная функция
  orderedItems.forEach((item)=> {
    totalPrice += item;
  });
  return totalPrice;
};
//orderedItems.forEach(calculateTotalPrice10_2);

console.log(calculateTotalPrice10_2([12, 85, 37, 4]));


console.log("/*----------------------------------------*/");
console.log("Завдання 11");
console.log("/*-------------------*/");
/*---------
Замени объявление функции filterArray() и коллбек
 для метода forEach() на стрелочные функции.-----
 --------------------------*/
const filterArray11=(numbers, value)=> {
  const filteredNumbers = [];

  numbers.forEach( (number)=> {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log();
console.log("/*----------------------------------------*/");
console.log("Завдання 12");
console.log("/*-------------------*/");
/*----------------------------------------*/
const getCommonElements12=(firstArray, secondArray)=> {
  const commonElements = [];

  firstArray.forEach( (element)=> {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
}

console.log(getCommonElements12([1, 2, 3], [2, 1, 17, 19]));

console.log("/*----------------------------------------*/");


console.log("Завдання 13");
console.log("/*-------------------*/");
/*--------------------------------------
Функция changeEven(numbers, value) принимает массив 
чисел numbers и обновляет каждый элемент, значение 
которого это чётное число, добавляя к нему значение 
параметра value.
----------------------------------*/
const changeEven = (numbers, value) => {
  
  // Change code below this line
  const newArray = [];
  numbers.forEach((number)=> {
  
      if (number % 2 === 0) {
        newArray.push(number + value);
      }else{
         newArray.push(number);
         }
  });
  return newArray; 
  // Change code above this line
}

console.log(changeEven([1, 2, 3, 4, 5], 10));

console.log("/*----------------------------------------*/");
console.log("Завдання 14");
console.log("/*-------------------*/");
/*-------
Дополни код так, чтобы в переменной planetsLengths
 получился массив длин названий планет. 
 Обязательно используй метод map().
---------------------------------*/
const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// Change code below this line
//const planetsLengths = planets;

const planetsLengths = planets.map(planet => planet.length);


console.log(planetsLengths);
console.log();
console.log("/*----------------------------------------*/");
console.log("Завдання 15");
console.log("/*-------------------*/");
/*----------------------------------------*/

console.log();
console.log();
console.log("/*----------------------------------------*/");
console.log("Завдання 16");
console.log("/*-------------------*/");
/*----------------------------------------*/

console.log();
console.log();
console.log("/*----------------------------------------*/");
console.log("Завдання 17");
console.log("/*-------------------*/");
/*----------------------------------------*/

console.log();
console.log();
console.log("/*----------------------------------------*/");
console.log("Завдання 18");
console.log("/*-------------------*/");
/*----------------------------------------*/

console.log();
console.log();
console.log("/*----------------------------------------*/");
console.log("Завдання 19");
console.log("/*-------------------*/");
/*----------------------------------------*/

console.log();
console.log();
console.log("/*----------------------------------------*/");
console.log("Завдання 20");
console.log("/*-------------------*/");
/*----------------------------------------*/

console.log("/*----------------------------------------*/");
console.log("Завдання 21");
console.log("/*-------------------*/");
/*----------------------------------------*/

console.log();
console.log();