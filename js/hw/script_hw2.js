"use strict";

const name_test = "Mango";
console.log(name_test.split(""));
const message = "JavaScript это интересно";
console.log(message.split(" "));
const words = ["JavaScript", "это", "интересно"];
console.log(words.join("")); // "JavaScriptэтоинтересно"
console.log(words.join(" ")); // "JavaScript это интересно"
console.log(words.join("-")); // "JavaScript-это-интересно"


console.log("Задача 1");
console.log("__________________");
// Change code below this line
   function checkAge(age) {
  if (age >= 18 ) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
   }
let result_1 = checkAge(20);
console.log(result_1);
result_1 = checkAge(15);
console.log(result_1);


/**----------------------------------------- */
console.log("Задача 2");
console.log("__________________");
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

    if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }

    return "Access denied, wrong password!";
   // Change code above this line
}

let result_2 = checkPassword("20sfdsdf");
console.log(result_2);
result_2 = checkPassword("jqueryismyjam");
console.log(result_2);

/**----------------------------------------- */
console.log("Задача 3");
console.log("__________________");
function checkStorage(available, ordered) {
    if (ordered === 0) {
    return "Your order is empty!";
  }  if (ordered > available) {
    return  "Your order is too large, not enough goods in stock!";
  }
    return  "The order is accepted, our manager will contact you";

}

let result_3 = checkStorage(50,70);
console.log(result_3);
result_3 = checkStorage(15,5);
console.log(result_3);

/**----------------------------------------- */
console.log("Задача 4");
console.log("__________________");
const fruits = ["apple", "plum", "pear", "orange"];


console.log(fruits);


/**----------------------------------------- */
console.log("Задача 5");
console.log("__________________");



// Change code below this line
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

console.log(firstElement);
console.log(fruits[2]);

/**----------------------------------------- */
console.log("Задача 6");
console.log("__________________");
//const fruits = ["apple", "plum", "pear", "orange"];
console.log(fruits );
// Write your code under this line
fruits[1]="peach";
fruits[3]="banana";
console.log(fruits );


/**----------------------------------------- */
console.log("Задача 7");
console.log("__________________");

//const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const fruitsArrayLength = fruits.length;

console.log(fruits);
console.log(fruitsArrayLength);

/**----------------------------------------- */
console.log("Задача 8");
console.log("__________________");

const lastElementIndex = fruits.length - 1;
const lastElement_8 = fruits[lastElementIndex];

console.log(lastElement_8);


/**----------------------------------------- */
console.log("Задача 9");
console.log("__________________");

function getExtremeElements(array) {
  // Change code below this line
    const firstElement = array[0]; 
    const lastElement = array[array.length - 1];

    const arrayExtreme = [firstElement, lastElement];
    
    return arrayExtreme;
  // Change code above this line
  
}

console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log();

/**----------------------------------------- */
console.log("Задача 10");
console.log("__________________");
function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  words = message.split(delimeter);
  // Change code above this line
  return words;
}



console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_"));

/**----------------------------------------- */
console.log("Задача 11");
console.log("__________________");
function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
    const totalWords = message.split(" ");
    console.log(totalWords);
    const totalPriceEngraving = totalWords.length * pricePerWord;

    return totalPriceEngraving;
   // Change code above this line
}


console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20));

/**----------------------------------------- */
console.log("Задача 12");
console.log("__________________");

function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line

    string = array.join(delimeter);

  // Change code above this line
  return string;
}

console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));
/**----------------------------------------- */
console.log("Задача 13");
console.log("Slug это всегда строка в нижнем регистре, слова которой разделены тире.");
console.log("__________________");
function slugify(title) {
  // Change code below this line
    title = title.toLowerCase();
    const slugArray = title.split(" ");
        
    const slug = slugArray.join("-");
    console.log(slug);
   
return slug;
  // Change code above this line
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
console.log();
/**----------------------------------------- */
console.log("Задача 14");
console.log("__________________");

const fruits14 = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits14.slice(0, 2) ;
const nonExtremeEls =fruits14.slice(1, (fruits14.lenght - 1)) ;
const lastThreeEls = fruits14.slice(-3);


/**----------------------------------------- */
console.log("Задача 15");
console.log("__________________");

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line

console.log(allClients);

/**----------------------------------------- */
console.log("Задача 16");
console.log("__________________");
function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
    let newArray = firstArray.concat(secondArray);
    console.log(newArray.length);
    console.log(newArray);
   
   
if ( newArray.length >= maxLength ){
    newArray = newArray.slice(0, maxLength);
} 

return newArray;
    // Change code above this line
  }


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
/**----------------------------------------- */
console.log("Задача 17");
console.log("__________________");
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1 ) { // Change this line
  console.log(i);
}


/**----------------------------------------- */
console.log("Задача 18");
console.log("__________________");
function calculateTotal(number) {
 // Change code below this line
 let total=0;
    for (let i = 1; i <= Number(number); i += 1 ){
    total  += Number(i);
    }

return total;
  // Change code above this line
}


console.log(calculateTotal(1));
console.log(calculateTotal(2));
console.log(calculateTotal(5));
/**----------------------------------------- */
console.log("Задача 19");
console.log("__________________");
const fruits_19 = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits_19.length; i += 1) { // Change this line
    const fruit = fruits_19[i]; // Change this line
    console.log(fruit);
    
}



/**----------------------------------------- */
console.log("Задача 20");
console.log("__________________");

function calculateTotalPrice_20(order) {
  let total = 0;
  // Change code below this line
    for (let i = 0; i < order.length; i += 1){
        total += order[i];
    }
  // Change code above this line
  return total;
}



console.log(calculateTotalPrice_20([12, 85, 37, 4]));
console.log(calculateTotalPrice_20([412, 371, 94, 63, 176]));

/**----------------------------------------- */
console.log("Задача 21");
console.log("__________________");
/* функцию findLongestWord(string) которая принимает 
произвольную строку состоящую только из слов разделённых пробелом 
(параметр string) и возвращает самое длинное слово в этой строке.
*/
function findLongestWord(string) {
  // Change code below this line
    const strings = string.split(" ");
    console.log(strings);
    let longestWord = strings[0];
    

    for (const word of strings) {  // слова word из массива strings
        if (word.length > longestWord.length) {
            longestWord = word;
            //console.log(word);
            }
        
    }

 return `Самое длинное словo в массиве: ${longestWord}`;
  // Change code above this line
}


console.log(findLongestWord("do a roll"));
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

/**----------------------------------------- */
console.log("Задача 22");
console.log("__________________");
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
    for (let i = min; i <= max; i += 1){
        numbers.push(i);
    }
  // Change code above this line
  return numbers;
}



console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(29, 34));

/**----------------------------------------- */
console.log("Задача 23");
console.log("__________________");
function filterArray(numbers, value) {
   // Change code below this line
    const newNumbers = [];
    for (let i = 0; i <= numbers.length; i += 1){

        if (numbers[i] > value) {
            newNumbers.push(numbers[i]);
        }
    }
return newNumbers;

  // Change code above this line
}


console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
/**----------------------------------------- */
console.log("Задача 24");
console.log("__________________");
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}


console.log(checkFruit("mandarin"));
console.log(checkFruit("pear"));

/**----------------------------------------- */
console.log("Задача 25");
console.log("__________________");
/*функцию getCommonElements(array1, array2) которая получает
 два массива произвольной длины в параметры array1 и array2, 
 и возвращает новый массив, состоящий из тех элементов, которые
  присутствуют в обоих исходных массивах. */
function getCommonElements(array1, array2) {
  // Change code below this line
    const arrayGeneral = [];

    for (let i = 0; i < array1.length; i += 1){
        if (array2.includes(array1[i])) {
            arrayGeneral.push(array1[i]);
         }
    }
    return arrayGeneral;
 // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
/**----------------------------------------- */
console.log("Задача 26");
console.log("__________________");
/* Выполни рефакторинг кода функции calculateTotalPrice(order)
   заменив цикл for на for...of. */
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
    for (const orderPrice of order) {
        total += orderPrice;
    }
  // Change code above this line
  return total;
}

console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([]));

/**----------------------------------------- */
console.log("Задача 27");
console.log("__________________");
/**Выполни рефакторинг функции filterArray(numbers, value)
 *  заменив цикл for на for...of. */
function filterArray27(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

 /* for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (number > value) {
      filteredNumbers.push(number);
    }
  }*/
    for (const number of numbers) {
       if (number > value) {
            filteredNumbers.push(number);
        }
    }

  return filteredNumbers;
  // Change code above this line
}

console.log(filterArray27([1, 2, 3, 4, 5], 3));
console.log(filterArray27([1, 2, 3, 4, 5], 4));
console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 28");
console.log("__________________");

// Change code below this line
const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7 ;
const e = 8 % 3;


console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
/**----------------------------------------- */
console.log("Задача 29");
console.log("__________________");
/**
 * 
 *Напиши функцию getEvenNumbers(start, end) которая возвращает
  массив всех чётных чисел от start до end. Чётным считается 
  число которое делится на 2 без остатка (10 % 2 === 0).
 */
function getEvenNumbers(start, end) {
   // Change code below this line
    const evenNumbers = [];
        // console.log(start);
        // console.log(end);
    const numbers = [];
    
    for (let i = start; i <= end; i += 1) {
        numbers.push(i);
       // console.log(numbers);
    }
    for (const number of numbers) {
            if (number % 2 === 0) {
                evenNumbers.push(number);
            }
        }
    return evenNumbers;
    // Change code above this line
  }

console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 30");
console.log("__________________");
/**
 * Дополни код так, чтобы в переменную number записывалось
 *  первое число от start до end, которое делится на 5 без остатка.
 */
const start_task30 = 6;
const end_task30 = 27;
let number;

for (let i = start_task30; i < end_task30; i += 1) {
  if (i % 5 === 0) {
      number = i;
      break;
  }
}

console.log(`первое число от ${start_task30} до ${end_task30}, которое делится на 5 без остатка: ${number}`);
console.log();
console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 31");
console.log("__________________");
function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return  i;
      //number = i;
     // break;
    }
  }

  //return number;
  // Change code above this line
}

const result = findNumber(2, 6, 5);
console.log("Лог после выхода из функции");
console.log(`Результат выполнения функции ${result}`);

console.log("Результат выполнения функции " + findNumber(16, 35, 7));

/**----------------------------------------- */
console.log("Задача 32");
console.log("__________________");
function includes(array, value) {
    // Change code below this line
   
            for (const arg of array) {
                if (arg === value) {
                    console.log(arg);
                    return true;
                }
     
            }
            return false;
            // Change code above this line
        }

console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
console.log(includes([1, 2, 3, 4, 5], 17));