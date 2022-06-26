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



console.log();
console.log();
console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 18");
console.log("__________________");



console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 19");
console.log("__________________");



console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 20");
console.log("__________________");



console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 21");
console.log("__________________");



console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 22");
console.log("__________________");



console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 23");
console.log("__________________");



console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 24");
console.log("__________________");


console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 25");
console.log("__________________");



console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 26");
console.log("__________________");



console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 27");
console.log("__________________");


