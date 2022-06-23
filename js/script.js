console.log("Задача 1");
// Change code below this line
    const productName = "Droid";
    console.log(productName);
    // 'Droid'
    const pricePerItem = 2000;
   console.log(pricePerItem);
    // 2000

// Change code below this line
console.log("Задача 2");
let productName2 = "Droid";
let pricePerItem2 = 2000;

// Change code below this line
productName2 = "Repair droid";
pricePerItem2 = pricePerItem2 + 1500;
console.log(`изменили переменную со значением ${productName} на значение ${ productName2 }`);
console.log(pricePerItem2);

console.log("Задача 3");
// Change code below this line
let topSpeed = 160;
let distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false;

console.log("Задача 4");
const pricePerItem4 = 3500;
const orderedQuantity4 = 4;

// Change code below this line
const totalPrice = pricePerItem4 * orderedQuantity4;
console.log(`Общая цена заказа = ${totalPrice}`);

console.log("Задача 5");
const productName5 = "Droid";
const pricePerItem5 = 3500;

// Change code below this line
const message = `You picked ${productName5}, price per item is ${pricePerItem5} credits`;
console.log(message);

console.log("Задача 6");
// Change code below this line
let pricePerDroid = 800;
let orderedQuantity = 6;
let deliveryFee = 50;
let totalPrice6 = pricePerDroid * orderedQuantity + deliveryFee;
const message6 = `You ordered droids worth ${totalPrice6} credits. Delivery (${deliveryFee} credits) is included in total price.`;

console.log(message6);

console.log("Задача 7");
// Change code below this line
function sayHi(){
    console.log("Hello, this is my first function!");
}
sayHi();


console.log("Задача 8");
// 1. Объявление параметров x, y, z
function multiply(x, y, z) {
  console.log(`Результат умножения равен ${x * y * z}`);
}

// 2. Передача аргументов
multiply(2, 3, 5); // Результат умножения равен 30
multiply(4, 8, 12); // Результат умножения равен 384
multiply(17, 6, 25); // Результат умножения равен 2550

// Change code below this line
function add(a8, b8, c8) {
  console.log(`Addition result equals ${a8 + b8 + c8}`);
  // Change code above this line
}

add(15, 27, 10); //Addition result equals 52
add(10, 20, 30); //Addition result equals 60
add(5, 10, 15); //Addition result equals 30


//----------------------------
console.log("Задача 9");
function multiply9(x9, y9, z9) {
  console.log("Код до return выполняется как обычно");

  // Возвращаем результат выражения умножения
  return x9 * y9 * z9;

  console.log("Этот лог никогда не выполнится, он стоит после return");
}

// Результат работы функции можно сохранить в переменную
let result9 = multiply9(2, 3, 5);
console.log(result9); // 30

result9 = multiply(4, 8, 12);
console.log(result9); // 384

result9 = multiply9(17, 6, 25);
console.log(result9); // 2550

//-------------------------//
function add9(a9, b9, c9) {
  // Change code below this line
return a9 + b9 + c9 ;
  // Change code above this line
}

add9(2, 5, 8); // 15

console.log(add9(15, 27, 10));
console.log(add9(10, 20, 30));
console.log(add9(5, 10, 15));
console.log(add9(22, 16, 24));



//----------------------------
console.log("Задача 10");

function makeMessage (name10, price10) {
  // Change code below this line
    
   const message = `You picked ${name10}, price per item is ${price10} credits`;
  
   // Change code above this line
  return message;
};
console.log(makeMessage('Radar', 6150));
console.log(makeMessage('Scanner', 3500));
console.log(makeMessage('Reactor', 8000));
console.log(makeMessage ('Engine', 4070));

//----------------------------
console.log("Задача 11");
function calculateTotalPrice (orderedQuantity11, pricePerItem11) {
  // Change code below this line
  const totalPrice11 = orderedQuantity11 * pricePerItem11 ;

  // Change code above this line
  return totalPrice11;
};
console.log(calculateTotalPrice(5, 100));


//----------------------------
console.log("Задача 12");

function makeOrderMessage12(orderedQuantity12, pricePerDroid12, deliveryFee12) {
  // Change code below this line

let totalPrice12 = orderedQuantity12 * pricePerDroid12 + deliveryFee12;
const message12 = `You ordered droids worth ${totalPrice12} credits. Delivery (${deliveryFee12} credits) is included in total price.`

  // Change code above this line
  return message12;
}
console.log(makeOrderMessage12(2, 100, 50));
//----------------------------
console.log("Задача 13");

function isAdult(age13) {
  // Change code below this line
  const passed = age13 >= 18;

  // Change code above this line
  return passed;
}
console.log(isAdult(35));

//----------------------------
console.log("Задача 14");
// ❌ Плохо, выполняется приведение типов
console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false
// ✅ Хорошо, приведение типов не выполняется
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true

/*Функция isValidPassword(password) проверяет 
равенство сохранённого и введённого паролей и
 возвращает результат проверки - буль true или false.*/

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = password === SAVED_PASSWORD;

  // Change code above this line
  return isMatch;
}
console.log(isValidPassword("mangodab3st"));
console.log(isValidPassword("kiwirul3z"));
console.log(isValidPassword("jqueryismyjam"));

//----------------------------
console.log("Задача 15");
function checkAge(age) {
  let message;
  
  if (age >= 18 ) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

console.log(checkAge(20) );
//----------------------------
console.log("Задача 16");
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (available < ordered){
message = "Not enough goods in stock!"
}
else{
message = "Order is processed, our manager will contact you."
}
  // Change code above this line
  return message;
}
console.log(checkStorage( 20, 15) );

//----------------------------
console.log("Задача 17");

let a_ = 5;
let b_ = 10;
let c_ = 15;
let d_ = 20;

// Change code below this line
a_ += 2;
b_ -= 4;
c_ *= 3;
d_ /= 10;

console.log(`5+2 = ${a_}`);
console.log(`10-4 = ${b_}`);
console.log(`15*3 = ${c_}`);
console.log(`20/10 = ${d_}`);


//----------------------------
console.log("Задача 18");

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  let totalPrice = pricePerDroid * orderedQuantity;
 
  if(customerCredits < totalPrice){
   
    message = "Insufficient funds!";

  }
    else {
     customerCredits -= totalPrice;
     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
    }
  // Change code above this line
  return message;
}

console.log(makeTransaction18(500, 10, 5000));
//----------------------------
console.log("Задача 19");
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD ) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}
console.log(checkPassword('Canceled'));


//----------------------------
console.log("Задача 20");

function checkStorage20(available, ordered) {
  let message;
  // Change code below this line
 if(ordered === 0){
   message = "There are no products in the order!";
 }
 else if(ordered > available ){
   message = "Your order is too large, there are not enough items in stock!";
 }
 else{
   message = "The order is accepted, our manager will contact you";
 }
  // Change code above this line
  return message;
}

console.log(checkStorage20(70, 0));
console.log(checkStorage20(200, 20));
console.log(checkStorage20(200, 250));



//----------------------------
console.log("Задача 21");
function isNumberInRange(start, end, number) {
  const isInRange = (number >= start  && number <= end); // Change this line
  return isInRange;
} 


console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 50));
//----------------------------
console.log("Задача 22");
/*Функция checkIfCanAccessContent(subType) проверяет,
 может ли пользователь получить доступ к контенту. 
 Проверка происходит по типу подписки. Получить доступ
 могут только пользователи с подпиской pro или vip.*/
function checkIfCanAccessContent(subType) {
  const canAccessContent = (subType == "pro" || subType == "vip") ; // Change this line

  return canAccessContent;
}
console.log(checkIfCanAccessContent("starter"));
console.log(checkIfCanAccessContent("vip"));
console.log(checkIfCanAccessContent("pro"));


//----------------------------
console.log("Задача 23");
/*Функция isNumberNotInRange(start, end, number) проверяет,
 не входит ли число в промежуток. То есть число должно быть 
 меньше либо равно start и больше либо равно end.
Результатом выражения проверки будет буль true или false. */
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}

console.log(isNumberNotInRange(10, 30, 17));
console.log(isNumberNotInRange(10, 30, 5));

//----------------------------
console.log("Задача 24");
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if (totalSpent >= 50000){
  discount = GOLD_DISCOUNT;
}
else if( totalSpent >= 20000 && totalSpent <= 50000){
 discount = SILVER_DISCOUNT;
}
else if(totalSpent >= 5000 && totalSpent <= 20000){
  discount = BRONZE_DISCOUNT;
}
else {
  discount = BASE_DISCOUNT;
}

  // Change code above this line
  return discount;
}
console.log(getDiscount(8250));
console.log(getDiscount(46900));
console.log(getDiscount(137000));
console.log(getDiscount(1300));


//----------------------------
console.log("Задача 25");
function checkStorage25(available, ordered) {
  let message;
  // Change code below this line
  
    message = (ordered > available) ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
   // Change code above this line
  return message;
}


console.log(checkStorage25(100, 50));
console.log(checkStorage25(100, 130));

//----------------------------
console.log("Задача 26");

function checkPassword26(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
  message = password === ADMIN_PASSWORD?"Access is allowed" : "Access denied, wrong password!"; 
  // Change code above this line
  return message;
}


console.log(checkPassword26("jqueryismyjam"));
console.log(checkPassword26("angul4r1sl1f3"));



//----------------------------
console.log("Задача 27");
function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case "organization": // Change this line
      price = 50; // Change this line
      break;

    case "professional": // Change this line
      price = 20; // Change this line
      break;

    case "starter": // Change this line
      price = 0; // Change this line
      break;
  }

  // Change code above this line
  return price;
}
console.log(getSubscriptionPrice('_stаrter_'));
console.log(getSubscriptionPrice('professional'));
console.log(getSubscriptionPrice('starter'));



//----------------------------
console.log("Задача 28");
function checkPassword28(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

  switch (password) {
    case null:
    message = "Canceled by user!";
    break;

    case ADMIN_PASSWORD:
    message = "Welcome!";
    break;
 
    default:
    message = "Access denied, wrong password!";
    
  }

  // Change code above this line
  return message;
}

console.log(checkPassword28("mangohackzor"));
console.log(checkPassword28(null));
console.log(checkPassword("jqueryismyjam"));


//----------------------------
console.log("Задача 29");

function getShippingCost(country) {
  let message;
  // Change code below this line
  let price;
switch(country){

  case "China":
  price = 100;
  message = `Shipping to ${country} will cost ${price} credits`;
  break;

  case "Chile":
  price = 250;
  message = `Shipping to ${country} will cost ${price} credits`;
  break;

  case  "Australia":
  price = 170;
  message = `Shipping to ${country} will cost ${price} credits`;
  break;

  case  "Jamaica":
  price = 120;
  message = `Shipping to ${country} will cost ${price} credits`;
  break;
        
        
  default:
  message = "Sorry, there is no delivery to your country";

}
    
  // Change code above this line
  return message;
}
console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));

//----------------------------
console.log("Задача 30");
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}

console.log(getNameLength("Billy"));
console.log(getNameLength("Joe"));



//----------------------------
console.log("Задача 31");
const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopicLength -1];


console.log( `Значение переменной courseTopicLength это число ${courseTopicLength}`);
console.log(`Значение переменной firstElement это строка ${firstElement}`);
console.log(`Значение переменной lastElement ${lastElement}`);


//----------------------------
console.log("Задача 32");
/*Функция getSubstring(string, length) принимает строку
 и возвращает подстроку от начала и до length символов.  */
function getSubstring(string, length) {
  const substring =string.slice(0, length) ; // Change this line
/*переменной substring выражение создания подстроки 
длинной length символов (от начала) из строки string. */
  return substring;
}

console.log(getSubstring("Hello world", 6));
console.log(getSubstring("Hello world", 8));

//----------------------------
console.log("Задача 33");
/*Функция formatMessage(message, maxLength) 
принимает строку (параметр message) и форматирует её,
 если длина превышает значение в параметре maxLength.*/
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
if( message.length <= maxLength){
  result = message;
}
else{
  result = message.slice(0, maxLength) + '...';
}
  /// Change code above this line
  return result;
}




console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));


//----------------------------
console.log("Задача 34");
function normalizeInput(input) {
  const normalizedInput =input.toLowerCase() ; // Change this line

  return normalizedInput;
}


console.log(normalizeInput("This ISN'T SpaM"));
console.log(normalizeInput("Big SALE"));

//----------------------------
console.log("Задача 35");
/*Присвой переменной result выражение проверки вхождения 
имени (параметр name), в полное имя (параметр fullname). 
Пусть функция строго относится к регистру букв, 
то есть «Петя» и «петя» для неё разные имена. */
function checkForName(fullName, name) {
 const result = fullName.includes(name) ; // Change this line
  return result;
}

console.log(checkForName("Egor Kolbasov", "egOr"));
console.log(checkForName("Egor Kolbasov", "Egor"));

//----------------------------
console.log("Задача 36");

  function checkForSpam(message) {
  let result;
  // Change code below this line
  let param1 = "spam";
  let param2 = "sale";
  let normalizedMsg = message.toLowerCase();

message = message.toLowerCase(message);
  
    if (normalizedMsg.includes(param1) || normalizedMsg.includes(param2)) {

      return true;
    } 
    else {
      return false;
     }

  return result;
}



console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
