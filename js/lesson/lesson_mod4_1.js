/*
function foo(collback) {  // collback - > undefined 
    collback(10);  //undefined 
}
function logger(value) {
    console.log(value);
}

foo(logger(5)); // logger(5) - > undefined - т.к. немає return
*/

const createObj = (name, age) => ({ name, age });
console.log(createObj('Denis', 33));

/** цункція яка создає id в обєкті зв допомогою колбєк функції */
function createProduct(obj, callback) {
    const product = {
        id: Math.random(),
        ...obj,
    }

    callback(product);
}

function logProduct(product) {
    console.log(product);
}

function logTotalPrice({price, count}) {
    console.log('sum', price * count);
}

const p = {
    name: 'iPhone',
    price: 1000,
    count: 10
}
createProduct(p, logProduct);
createProduct(p, logTotalPrice);
logProduct(p);


const users = [
    { name: 'denis' },
    { name: 'Dima' }
]

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i+=1) {
        callback(arr[i], i, arr);
        
    }
}
function forEachCallback(user, index, arr) {
    console.log('user:', user);
    console.log('index:', index);
    console.table( arr);
}

forEach(users, forEachCallback);

console.log('example Each ----------------');

const userS = [
    { name: 'Denis', age: 33 },
    { name: 'Dima' , age: 47}
]


function each(arr, callback) {
    const newArray = [];
    
    for (let i = 0; i < arr.length; i += 1) {
        const callbackResult = callback(arr[i], i, arr);
        newArray.push(callbackResult);
    }
    return newArray;
}
 function getName(user) {
     return user.name;
 }

 function getNameAge(user) {
     return `${user.name} is ${user.age} old`;
 }

 function modifyUser(user) {
     return {
         ...user,
         isOld: user.age < 60
     }
 }

console.log(each(userS, modifyUser));
console.table(each(userS, modifyUser));

each(userS, (user) => user.name);
each(userS, (user) => `${user.name} is ${user.age} old`);
