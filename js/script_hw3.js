const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
console.log(ownerName);

const ownerPhone = apartment.owner.phone;
console.log(ownerPhone);

const ownerEmail = apartment.owner.email;
console.log(ownerEmail);

const numberOfTags = apartment.tags.length;
console.log(numberOfTags);

const firstTag = apartment.tags[0];
console.log(firstTag);

const lastTag = apartment.tags[apartment.tags.length - 1];
console.log(lastTag);
// Change code above this line

console.log("Завдання 6");
// Change code below this line
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");

console.log(apartment.price);
console.log(apartment.rating);
console.log(apartment.owner.name);
console.log(apartment.tags);

console.log("Завдання 7");
console.log("/*-------------------*/");
// Change code below this line
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country="Jamaica";
apartment.location.city="Kingston";

console.log(apartment);


console.log("Завдання 8");
console.log("/*-------------------*/");

console.log("Завдання 9");
console.log("/*-------------------*/");


console.log("Завдання 10");
console.log("/*-------------------*/");
const apartment10 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment10) {
  keys.push(key);
  values.push(apartment10[key]);
}
console.log(apartment10);
console.log(keys);
console.log(values);


console.log("Завдання 11");
console.log("/*-------------------*/");


const keys11 = [];
const values11 = [];
const advert11 = {
  service: "apt",
};
const apartment11 = Object.create(advert11);
apartment11.descr = "Spacious apartment in the city center";
apartment11.rating = 4;
apartment11.price = 2153;

for (const key in apartment11) {
  // Change code below this line
if (apartment11.hasOwnProperty(key)) {
  keys11.push(key);
  values11.push(apartment11[key]);
}
  // Change code above this line
}
console.log(apartment11);
console.log(keys11);
console.log(values11);


console.log("Завдання 12");
console.log("/*-------------------*/");
function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (const key in object) {
      if (object.hasOwnProperty(key)) {
        propCount+=1;
      }
  }
  // Change code above this line
    return `В обєкті ${object} власних властивостей = ${propCount}`;
}

console.log(countProps(apartment11));
console.log(countProps({}));



console.log("Завдання 13");
console.log("/*-------------------*/");

const apartment13 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values13 = [];
// Change code below this line
const keys13 = Object.keys(apartment13);
    for (const key of keys13) {
        // Ключ
    console.log(key);
    // Значение свойства
    values13.push(apartment13[key]);
    }

console.log(apartment13);
console.log(keys13);
console.log(values13);



console.log("Завдання 14");
console.log("/*-------------------*/");

function countProps14(object) {
  // Change code below this line
  let propCount = 0;
  const keys = Object.keys(object);
  
  for (const key of keys) {
          propCount += 1;
  }

  return propCount;
  // Change code above this line
}


console.log(countProps14(apartment13));
 console.log(countProps14({ name: "Mango", age: 2 }));
// console.log(values13);




console.log("Завдання 16");
console.log("/*-------------------*/");

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const values = Object.values(salaries);

  for( const value of values){
    totalSalary += value;
  }

  // Change code above this line
  return totalSalary;
}

console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


console.log("Завдання 17");
console.log("/*-------------------*/");

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const color of colors){
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
console.log(hexColors);
console.log(rgbColors);


console.log("Завдання 18");
console.log("/*-------------------*/");

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
    for (const product of products) {
        if (product.name === productName) {
            return `Ціна ${product.name} = ${product.price} `;
        }
        
  }
    return null;

  // Change code above this line
}

console.log(getProductPrice("Radar"));
console.log(getProductPrice("Engine"));

console.log("Завдання 19");
console.log("/*-------------------*/");

const products19 = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
    const arrayAllPropValues = [];
    
    for (const product of products19) {

        if (Object.keys(product).includes(propName)) {
            
            arrayAllPropValues.push(product[propName]);
        }
          
    }
return arrayAllPropValues;

  // Change code above this line
}

console.log(getAllPropValues("name"));
console.log(getAllPropValues("color"));

/**--------------------------------------------------------- */


console.log("Завдання 20");
console.log("/*-------------------*/");
/**
 * calculateTotalPrice(productName) которая принимает
 *  один параметр productName - название товара. Функция
 *  должна вернуть общую стоимость (цена * количество) товара
 *  с таким именем из массива products.
 */
const products20 = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
let totalPrice = 0;
    
    for (const product of products20) {

        if (product.name === productName) {
            //console.log(typeof(product.price));
           // console.log(typeof(product.quantity));
            totalPrice = product.price * product.quantity;
            break;
        }
    }
 
    return totalPrice ? totalPrice : `Вказаного продукту - ${productName}- не існує`;

  // Пиши код выше этой строки
}

console.log(calculateTotalPrice("Blaster"));
console.log(calculateTotalPrice("Droid"));


/**--------------------------------------------------------- */


console.log("Завдання 21-22");
console.log("/*-------------------*/");
/*---------------------------------------*/


const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
/****************************
    const yesterday = highTemperatures.yesterday;
    const today = highTemperatures.today;
    const tomorrow = highTemperatures.tomorrow;
 *************/
//ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
// const { yesterday, today , tomorrow} = highTemperatures;
const { 
  yesterday,
  today ,
  tomorrow,
  icon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  } = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;


console.log(meanTemperature);


/**--------------------------------------------------------- */


console.log("Завдання 23");
console.log("/*-------------------*/");
/*---------------------------------------*/
const highTemperatures23 = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
/*
const highYesterday = highTemperatures23.yesterday;
const highToday = highTemperatures23.today;
const highTomorrow = highTemperatures23.tomorrow;
const highIcon = highTemperatures23.icon;
*/
const  {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures23;

// Change code above this line
const meanTemperature23 = (highYesterday + highToday + highTomorrow) / 3;



console.log(meanTemperature23);
console.log(highIcon);

/**--------------------------------------------------------- */


console.log("Завдання 24");
console.log("/*-------------------*/");
/*---------------------------------------*/
const colors24 = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors24 = [];
const rgbColors24 = [];
// Change code below this line

for (const {hex, rgb} of colors24) {
  hexColors24.push(hex);
  rgbColors24.push(rgb);
}

console.log(hexColors24);
console.log(rgbColors24);

/**--------------------------------------------------------- */


console.log("Завдання 25");
console.log("/*-------------------*/");
/*---------------------------------------*/
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
/*
const highToday = forecast.today.high;
const lowToday = forecast.today.low;
const todayIcon = forecast.today.icon;

const highTomorrow = forecast.tomorrow.high;
const lowTomorrow = forecast.tomorrow.low;
const tomorrowIcon = forecast.tomorrow.icon;
*/
      const {
    today: { low: lowToday, high: highToday25, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", },
    tomorrow: { low: lowTomorrow, high: highTomorrow25, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", }, 
} = forecast;

console.log(forecast);
console.log(tomorrowIcon);
console.log();

/**--------------------------------------------------------- */


console.log("Завдання 26");
console.log("/*-------------------*/");
/*---------------------------------------*/
// Change code below this line
function calculateMeanTemperature(forecast) {

  const { today: { low: todayLow, high: todayHigh,}, tomorrow: { low: tomorrowLow, high: tomorrowHigh, }   } = forecast;
  
 /* const todayLow = forecast.today.low;
  const todayHigh = forecast.today.high;
  const tomorrowLow = forecast.tomorrow.low;
  const tomorrowHigh = forecast.tomorrow.high;
*/
  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}


console.log(calculateMeanTemperature({
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
}));
console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));

/**--------------------------------------------------------- */


console.log("Завдання 27");
console.log("/*-------------------*/");
/*-----------------------------------
Синтаксис ... (spread) позволяет распылить 
коллекцию элементов (массив, строку или объект)
 в место, где ожидается набор отдельных значений.
 ----------------------------------*/
const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

console.log(scores);
console.log(bestScore);
console.log(worstScore);

/**--------------------------------------------------------- */


console.log("Завдання 28");
console.log("/*-------------------*/");
/*---------------------------------------*/
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore28 = Math.max(...allScores);
const worstScore28 = Math.min(...allScores);

console.log(allScores);
console.log(bestScore28);
console.log(worstScore28);

/**--------------------------------------------------------- */


console.log("Завдання 29");
console.log("/*-------------------*/");
/*---------------------------------------*/
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};

console.log(defaultSettings);
console.log(finalSettings);
console.log();
/*---------------------------------------*/



console.log("Завдання 30");
console.log("/*-------------------*/");
/**--------------------------------------
 * Напиши функцию makeTask(data) которая принимает 
 * один параметр data - объект со следующими 
 * свойствами.

text - текст задачи.
category - категория задачи.
priority - приоритет задачи.
Функция должна составить и вернуть новый объект 
задачи, не изменяя напрямую параметр data.
 В новом объекте должно быть свойство completed,
  значение которого хранится в одноимённой локальной
   переменной.

В параметре data гарантированно будет только свойство 
text, а остальные два, category и priority, могут 
отсутствовать. Тогда, в новом объекте задачи,
 в свойствах category и priority должны быть значения
  по умолчанию, хранящиеся в одноимённых локальных 
  переменных.------------------- */

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
   return { ...{ category, priority, completed }, ...data };
  // Change code above this line
}

console.log(makeTask({}));
console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
/*---------------------------------------*/

console.log("Завдання text lesson ");
console.log("/*-------------------*/");
/*---------------------------------------*/
/**--------------------------------------------------------- */
function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значение первого аргумента
  console.log(secondNumber); // Значение второго аргумента
  console.log(otherArgs); // Массив остальных аргументов
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
console.log();
console.log();
console.log("Завдання 31 ");
console.log("/*-------------------*/");
/*---------------------------------------*/

function add(...args) {
  let sum = 0;
  for (const arg of args){

    sum += Number(arg);
  
  }
  return sum;
  // Change code above this line
}
/*---------------------------------------*/

console.log("Завдання 32");
console.log("/*-------------------*/");
/*---------------------------------------*/
// Change code below this line
function addOverNum(moreThanNumber,...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > moreThanNumber) {
      total += arg;
    }
  }

  return total;
  // Change code above this line
}


console.log(addOverNum(50, 15, 27)); //0
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //218
/*---------------------------------------*/

console.log("Завдання 33");
console.log("/*-------------------*/");
/*-------
Функция findMatches() принимает произвольное количество
 аргументов. Первым аргументом всегда будет массив чисел,
  а остальные аргументы будут просто числами.
Дополни код функции так, чтобы она возвращала новый массив 
matches, в котором будут только те аргументы, 
начиная со второго, которые есть в массиве первого 
аргумента.
Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) 
должна вернуть массив [1, 2], потому что только они 
есть в массиве первого аргумента.
--------------------------------*/

function findMatches(numbers,...args) {
const matches = []; // Don't change this line
    for (const number of numbers) {
        
        if (args.includes(number)) {
            matches.push(number);
        }
    }
     
return matches;
}
/**--------------------------------------------------------- */

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
/*---------------------------------------*/

console.log("Завдання 34");
console.log("/*-------------------*/");
/*---------------------------------------*/
const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName){
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName){
    return `Updating book ${oldName} to ${newName}`;
  },
  // Change code above this line
};


console.log(bookShelf.addBook("Haze"));
console.log(bookShelf.removeBook("Red sunset"));
console.log(bookShelf.updateBook("Sands of dune", "Dune"));
/*---------------------------------------*/

console.log("Завдання 35");
console.log("/*-------------------*/");
/*---------------------------------------*/
/**--------------------------------------------------------- */
const bookShelf35 = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    // Change code above this line
  },
};

console.log(bookShelf35.books);
bookShelf35.updateBook("Haze", "Dungeon chronicles");
console.log(bookShelf35.books);
/*---------------------------------------*/

/*-------------------*/

console.log("Завдання 36-37-38-39-40");
console.log("/*-------------------*/");
/*---------------------------------------*/
/**--------------------------------------------------------- */
const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
  
    getPotions(){
        return this.potions;
    },

    addPotion(potionName) {
        if (this.potions.includes(potionName)) {
            return `Error! Potion ${potionName} is already in your inventory!`;
        }
      return this.potions.push(potionName);
    },

    removePotion(potionName) {
        const potionIndex = this.potions.indexOf(potionName);
             if (potionIndex === -1) {
                return `Potion ${potionName} is not in inventory!`;
             }
        this.potions.splice(potionIndex, 1);
    
    },
    
    updatePotionName(oldName, newName) {
        const potionIndex = this.potions.indexOf(oldName);
             if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }
        this.potions.splice(potionIndex, 1, newName);
           
  },
 
};

console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion("Invisibility"));
console.log(atTheOldToad.potions);
atTheOldToad.removePotion("Speed potion");
console.log(atTheOldToad.potions);
atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
console.log(atTheOldToad.potions);
/*---------------------------------------*/


console.log("Завдання 41");
console.log("/*-------------------*/");
/*---
Выполни рефакторинг методов объекта atTheOldToad
 так, чтобы они работали не с массивом строк, а с массивом объектов.------------------------------------*/
/**--------------------------------------------------------- */
const atTheOldToad41 = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 240 },
  ],
  // Change code below this line
 
    getPotions41() {
    return this.potions;
    },
  
    addPotion41(newPotion) {
        
        for (const potion of this.potions) {
            if (potion.name === newPotion.name) {
                 console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
                return;
            }
        }
      //распыление свойств обекта Potions
        const addNewPotion = {
            ...newPotion
        };

            this.potions.push(addNewPotion);
        
    },
    
    removePotion41(potionName) {
        //деструктуризация свойства potions
        const { potions } = this;
        

        for (let i = 0; i < potions.length; i += 1) {
            // (1var)   
            // const potion = this.potions[i];
            // 2 var - деструктуризация name и раньше деструктурировали potions
            const { name } = potions[i];
            if (potionName === name) {
                potions.splice(i, 1);
                break;
            }
        }
       return `Potion ${potionName} is not in inventory!`;
        
        /* const potionIndex = this.potions.indexOf(potionName);
 
         if (potionIndex === -1) {
         return `Potion ${potionName} is not in inventory!`;
         }*/
    },

    updatePotionName41(oldName, newName) {
        let result = `Potion ${oldName} is not in inventory!`;
        
    // const { potions } = this;
        for (let i = 0; i < this.potions.length; i += 1) {
         let { name } = this.potions[i];
           
              if (oldName === name) {
                 console.log(` iм'я знайдено ${name}`);
                               
                  this.potions[i].name = newName;
                 
                  result = `найдена "${oldName}" змінено на "${newName}" `;
                  break;
                }
            
        }
        return console.log(result); 
       
    },
    // Change code above this line
};

console.log(atTheOldToad41.potions);
// atTheOldToad41.removePotion41("Dragon breath");
 //console.log(atTheOldToad41(...potions ));

atTheOldToad41.updatePotionName41("Dragon breath", "Polymorth");
console.log(atTheOldToad41.getPotions41());
// atTheOldToad41.updatePotionName41("Dragon breath", "Polymorth");
//  console.log(atTheOldToad41.getPotions41());
// atTheOldToad41.addPotion41({ name: "Stone skin", price: 520 });
//     atTheOldToad41.addPotion41({ name: "Invisibility", price: 620 })
// console.log(atTheOldToad41.getPotions41());

