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

const fruits_mas = ["apple", "plum", "pear", "orange"];

// Change code below this line
const firstElement = fruits_mas[0];
const secondElement = fruits_mas[1];
const lastElement = fruits_mas[3];

console.log(firstElement);
console.log(fruits_mas[2]);

/**----------------------------------------- */
console.log("Задача 6");
console.log("__________________");
const fruits_6 = ["apple", "plum", "pear", "orange"];
console.log(fruits_6 );
// Write your code under this line
fruits_6[1]="peach";
fruits_6[3]="banana";
console.log(fruits_6 );


/**----------------------------------------- */
console.log("Задача 7");
console.log("__________________");

const fruits_7 = ["apple", "peach", "pear", "banana"];

// Change code below this line
const fruitsArrayLength = fruits_7.length;

console.log(fruits_7);
console.log(fruitsArrayLength);

/**----------------------------------------- */
console.log("Задача 8");
console.log("__________________");



console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 9");
console.log("__________________");


console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 10");
console.log("__________________");



console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 11");
console.log("__________________");



console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 12");
console.log("__________________");



console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 13");
console.log("__________________");


console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 14");
console.log("__________________");



console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 15");
console.log("__________________");



console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 16");
console.log("__________________");



console.log();
console.log();

/**----------------------------------------- */
console.log("Задача 17");
console.log("__________________");


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


