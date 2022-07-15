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
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
    genres: ["fiction"],
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
    genres: ["fiction"]
  },
  {
    title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94,
 genres: ["horror", "mysticism"]  },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67, genres: ['religion'] },
];
// Change code below this line

const titles = books.map(book => book.title);
console.log(titles);

console.log("/*----------------------------------------*/");
console.log("Завдання 16");
console.log("/*-------------------*/");
/*----------------------------------------*/
const genres = books.flatMap(book=> book.genres);
console.log(genres);



console.log("/*----------------------------------------*/");
console.log("Завдання 17");
console.log("/*-------------------*/");
/*----------------------------------------*/
const getUserNames = users => {
   
  return users.map(user => user.name);


  };

  const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
console.log(getUserNames(users));
//["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]



console.log("/*----------------------------------------*/");
console.log("Завдання 18");
console.log("/*-------------------*/");
/*----------------------------------------*/
const getUserEmails = users => {
    
  return users.map( user => user.email);
  };
console.log(getUserEmails(users));



console.log("/*----------------------------------------*/");
console.log("Завдання 19");
console.log("/*-------------------*/");
/*----------------------------------------*/
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number=> number%2===0);
console.log(evenNumbers);

const oddNumbers = numbers.filter(number=> number%2 !==0);
console.log(oddNumbers);




console.log("/*----------------------------------------*/");
console.log("Завдання 20");
console.log("/*-------------------*/");
/*----------------------------------------*/
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((book, index, array) => array.indexOf(book) === index);
console.log(uniqueGenres);

console.log("/*----------------------------------------*/");
console.log("Завдання 21");
console.log("/*-------------------*/");
/*----------------------------------------*/
const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books.filter(({rating})=>rating>=MIN_RATING);
console.table(topRatedBooks);

const booksByAuthor = books.filter(({author})=> author ===AUTHOR);


console.table(booksByAuthor);

console.log("/*----------------------------------------*/");
console.log("Завдання 22");
console.log("/*-------------------*/");
/*----------------------------------------*/
const getUsersWithEyeColor = (users, color) => {
 
  //return users.filter(user =>user.eyeColor=== color);
  //або деструктурований
  return users.filter(({ eyeColor }) => eyeColor === color);
  
}
 
console.table(getUsersWithEyeColor(users,'brown'));

console.log("/*----------------------------------------*/");
console.log("Завдання 23");
console.log("/*-------------------*/");
/*----------------------------------------*/
const getUsersWithAge = (users, minAge, maxAge) => {
 
 return users.filter( ({age}) => (age >= minAge && age <= maxAge));

};

console.table(getUsersWithAge(users, 20, 25));


console.log("/*----------------------------------------*/");
console.log("Завдання 24");
console.log("/*-------------------*/");
/*----------------------------------------*/
const getUsersWithFriend = (users, friendName) => {
  
  return users.filter(user => user.friends.includes(friendName)).map(user => user.name);
     
};

console.log(getUsersWithFriend (users, "Briana Decker"));
console.log();

console.log("/*----------------------------------------*/");
console.log("Завдання 25");
console.log("/*-------------------*/");
/*----------------------------------------*/
const getFriends = (users) => {
   let result;
    const friends = users.flatMap(user => user.friends);
   
   return result = friends.filter((friend, index, array) => array.indexOf(friend) === index);


};

console.log(getFriends(users));


console.log("/*----------------------------------------*/");
console.log("Завдання 26");
console.log("/*-------------------*/");
/*----------------------------------------*/
const getActiveUsers = (users) => {
   return users.filter( user => user.isActive ===true);
};

console.table(getActiveUsers(users));


console.log("/*----------------------------------------*/");
console.log("Завдання 27");
console.log("/*-------------------*/");
/*----------------------------------------*/
const getInactiveUsers = (users) => users.filter(user => user.isActive === false);
;

console.table(getInactiveUsers(users));


console.log("/*----------------------------------------*/");
console.log("Завдання 28");
console.log("/*-------------------*/");
/*----------------------------------------*/
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR28 = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR28);

console.log(bookWithTitle);
console.log(bookByAuthor);

console.log("/*----------------------------------------*/");
console.log("Завдання 29");
/*----------------------------------------*/
const getUserWithEmail = (users, email) => {
   return users.find((user)=> user.email ===email);
};

console.table(users);
console.log(getUserWithEmail(users, 'moorehensley@indexia.com'));


console.log("/*----------------------------------------*/");
console.log("Завдання 30");
console.log("/*-------------------*/");
/*----------------------------------------*/
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every((value) => value%2===0);
const eachElementInFirstIsOdd = firstArray.every((value) => value%2 !==0);

const eachElementInSecondIsEven = secondArray.every((value) => value%2===0);
const eachElementInSecondIsOdd = secondArray.every((value) => value%2!==0);

const eachElementInThirdIsEven = thirdArray.every((value) => value%2===0);

const eachElementInThirdIsOdd = thirdArray.every((value) => value%2!==0);

console.log(eachElementInThirdIsEven);
console.log(eachElementInThirdIsOdd);



console.log("/*----------------------------------------*/");
console.log("Завдання 31");
console.log("/*-------------------*/");
/*----------------------------------------*/
const isEveryUserActive = (users) => {
  return users.every(user => user.isActive === true);
};
console.log(isEveryUserActive(users));
console.log();

console.log("/*----------------------------------------*/");
console.log("Завдання 32");
console.log("/*-------------------*/");
/*----------------------------------------*/
const firstArray1 = [26, 94, 36, 18];
const secondArray1 = [17, 61, 23];
const thirdArray1 = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven1 = firstArray1.some(value=>value%2===0);
const anyElementInFirstIsOdd1 = firstArray1.some(value=>value%2!==0);

const anyElementInSecondIsEven1 = secondArray1.some(value=>value%2===0);
const anyElementInSecondIsOdd1 = secondArray1.some(value=>value%2!==0);

const anyElementInThirdIsEven1 = thirdArray1.some(value=>value%2===0);
const anyElementInThirdIsOdd1 = thirdArray1.some(value=>value%2!==0);

console.log(anyElementInThirdIsEven1);
console.log(anyElementInThirdIsOdd1);

console.log("/*----------------------------------------*/");
console.log("Завдання 33");
console.log("/*-------------------*/");
/*----------------------------------------*/
const isAnyUserActive1 = users => {
   return users.some(user => user.isActive === true);

};

console.log( isAnyUserActive1(users));
console.log();

console.log("/*----------------------------------------*/");
console.log("Завдання 34");
console.log("/*-------------------*/");
/*----------------------------------------*/
const players1 = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players1); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((acc, time)=>{
  return acc+time;
},0);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;

console.log(totalPlayTime);
console.log(averagePlayTime);

console.log("/*----------------------------------------*/");
console.log("Завдання 35");
console.log("/*-------------------*/");
/*----------------------------------------*/

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((totalTime, player)=>{
  return totalTime+player.playtime/player.gamesPlayed;

}, 0);

console.log(totalAveragePlaytimePerGame);
console.log();

console.log("/*----------------------------------------*/");
console.log("Завдання 36");
console.log("/*-------------------*/");
/*----------------------------------------*/
const calculateTotalBalance = users.reduce((sum, {balance}) => {
  return sum + balance;
}, 0);
const calculateTotalBalance2 = 
  users.reduce((previousValue, user) => previousValue + user.balance, 0);


console.log(calculateTotalBalance);
console.log(calculateTotalBalance2);
console.log("/*----------------------------------------*/");
console.log("Завдання 37");
console.log("/*-------------------*/");
/*----------------------------------------*/
const getTotalFriendCount = users.reduce((totalFriends,{friends})=>{ 
      return totalFriends + (friends.length);
      },0);


console.log(getTotalFriendCount);

console.log("/*----------------------------------------*/");
console.log("Завдання 38");
console.log("/*-------------------*/");
/*----------------------------------------*/
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();
console.log(ascendingReleaseDates);
console.log(alphabeticalAuthors);

console.log("/*----------------------------------------*/");
console.log("Завдання 39");
console.log("/*-------------------*/");
/*----------------------------------------*/
const releaseDates1 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates1 = [...releaseDates1].sort((a,b)=>a-b);

const descendingReleaseDates = [...releaseDates1].sort((a,b)=>b-a);
console.log(ascendingReleaseDates1);
console.log(descendingReleaseDates);

console.log("/*----------------------------------------*/");
console.log("Завдання 40");
console.log("/*-------------------*/");
/*------------------------------------------------------------
Онлайн бибилиотеке необходимо отображать книги отсортированные
по автору, в алфавитном и обратном алфавитном порядке.
Дополни код так, чтобы в переменной authorsInAlphabetOrder
получилась отсортированная по алфавиту копия массива authors,
а в переменной authorsInReversedOrder копия отсортированная
в обратном алфавитном порядке.--------------------------*/

const authorsInAlphabetOrder = [...authors].sort((a,b)=> a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) =>
  b.localeCompare(a));

console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);

console.log("/*----------------------------------------*/");
console.log("Завдання 41");
console.log("/*-------------------*/");
/*----------------------------------------*/

const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));

const sortedByAscendingRating = [...books].sort((firstBook, secondBook)=>firstBook.rating - secondBook.rating);

const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

console.table(sortedByAuthorName);
console.table(sortedByReversedAuthorName);
console.table(sortedByAscendingRating);
console.table(sortedByDescentingRating);


console.log("/*----------------------------------------*/");
console.log("Завдання 42");
console.log("/*-------------------*/");
/*----------------------------------------*/
const sortByAscendingBalance = [...users].sort((firstUser, secondUser)=>firstUser.balance - secondUser.balance);


console.table(sortByAscendingBalance);
console.log();

console.log("/*----------------------------------------*/");
console.log("Завдання 43");
console.log("/*-------------------*/");
/*----------------------------------------*/
const sortByDescendingFriendCount = users => {
  
 return [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);
};
console.table(sortByDescendingFriendCount(users));
console.log();

console.log("/*----------------------------------------*/");
console.log("Завдання 44");
console.log("/*-------------------*/");
/*----------------------------------------*/
const sortByName = users => {

    return [...users].sort((firstUser, secondUser)=> firstUser.name.localeCompare(secondUser.name));
   
};
console.table(sortByName(users));
console.log();

console.log("/*----------------------------------------*/");
console.log("Завдання 45");
console.log("/*-------------------*/");
/*----------------------------------------*/
// const books1 = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
const MIN_BOOK_RATING = 8;

const names = [...books]
  .filter(({ rating }) => rating > MIN_BOOK_RATING)
  .sort((firstAuthor, secondAuthor)=>firstAuthor.author.localeCompare(secondAuthor.author))
  .map(book => book.author);

console.table(books);
console.log(names);
console.log();

console.log("/*----------------------------------------*/");
console.log("Завдання 46");
console.log("/*-------------------*/");
/*---------------------------------------
Дополни функцию getNamesSortedByFriendCount(users) так, чтобы 
она возвращала массив имён пользователей отсортированный по 
возрастанию количества их друзей (свойство friends).
-----------------------------------------------*/
const getNamesSortedByFriendCount = users => {
   
   return [...users]
    .sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
   .map(user=>user.name);
};



console.log(getNamesSortedByFriendCount(users));
console.log();

console.log("/*----------------------------------------*/");
console.log("Завдання 47");
console.log("/*-------------------*/");
/*-------------
Дополни функцию getSortedFriends(users) так, 
чтобы она возвращала массив уникальных имён друзей 
(свойство friends) отсортированный по алфавиту .

---------------------------*/
const getSortedFriends = users => {
   
  return [...users]
    .flatMap(user => user.friends)
    .filter((user, index, array) => array.indexOf(user) === index)
    .sort((firstUser, secondUser) => firstUser.localeCompare(secondUser));
   
};


console.log(getSortedFriends(users));
console.log();

console.log("/*----------------------------------------*/");
console.log("Завдання 48");
console.log("/*-------------------*/");
/*------------
Дополни функцию getTotalBalanceByGender(users, gender) так,
чтобы она возвращала общий баланс пользователей (свойство balance),
пол которых (свойство gender) совпадает со значением параметра gender.
----------------------------*/

const getTotalBalanceByGender = (users, gender) => {
  
  return [...users]
    .filter(user => user.gender === gender)
    .reduce((total, user) => {
  return total + user.balance;
}, 0);
  
   
};

console.table(users);
console.table(getTotalBalanceByGender(users, 'male'));