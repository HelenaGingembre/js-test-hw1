//"use strict";
console.log('Завдання 1 ______________________ ');
// Створи функцію, яка проводить пошук обєкта 
//в масиві по id та виводить його в консоль. 
const users = [ 
    { id: 1, name: "John" },
    { id: 2, name: "Pete" }, 
    { id: 3, name: "Mary" }, 
]; 
const foo = (id) => {
    return users.find(({ id }) => id===id);
}; 

console.log(foo(1));
console.log('Завдання 2 ______________________ ');
//  Виведи в консоль стрічку для кожного єлемента масива 
//слідуючого типу: "Имя - позиция в массиве Х и сам массив"
// 
const robots = ["Bender", "Awesom-O", "Johnny 5"];
 const check =(robots)=> {
    robots.forEach((robot, index, array)=>
    console.log(`Имя ${robot}- позиция в массиве ${index} и сам массив${array}`)
);
};
check(robots);
console.log('Завдання 3 ______________________ ');
// Напиши ф-цію positiveSum, яка приймає масив чисел та повертає їх суму. 
// Але рахуватись мають лише позитивні числа!!! 
const positiveSum1 = (arr) =>
    arr.reduce((acc, number) => {
        if(number>0){
            return (acc + number);
        }
        return acc;
}, 0);

const callback = (acc, number) => {
    return number > 0 ? acc + number : 0;
};
const positiveSum = (arr) => arr.reduce(callback, 0);
console.log(positiveSum([2, 4, 6, 8])); // 20 
console.log(positiveSum([0, -3, 5, 7])); // 12 

console.log('Завдання 4 ______________________ ');
// Відсортуй обєкти по збільшеню та зменшеню score 
const users1 = [ 
    { name: "Victor", score: 20 },
    { name: "Mario", score: 10 },
    { name: "Tatiana", score: 30 },
];
   
const usersSortedByScoreDesc =(users1)=> [...users1].sort(
    (firstStudent, secondStudent) =>
        firstStudent.score - secondStudent.score
);

const usersSortedByScoreAsc =(users1)=> [...users1].sort(
    (firstStudent, secondStudent) =>
        secondStudent.score - firstStudent.score
);

    console.log(usersSortedByScoreAsc(users1));
    // [{name: "Tatiana", score: 30}, {name: "Victor", score: 20}, {name: "Mario", score: 10}]
  console.log(usersSortedByScoreDesc(users1));
    // [{name: "Mario", score: 10}, {name: "Victor", score: 20}, {name: "Tatiana", score: 30}]

console.log('Завдання 5 ______________________ ');
// Напиши ф-цію, яка фільтрує масив та повертає 
//елементи, окрім того, що був переданий в дану
// функцію в якості аргумента. // 
     const animals = ["pigs", "goats", "sheep"];
     
const foo5 = (animalCurrent) =>
    animals.filter(animal =>animal !== animalCurrent );


console.log(foo5("pigs")); //  ["goats", "sheep"]
 
console.log('Завдання 6 ______________________ ');
// Створи функції, які: // 
// - знайдуть обєкт по найкращим score. // 
// - виведуть масив всіх score. // 
// - виведуть суму всіх score. // 
const users2 = [ 
    { name: "Victor", score: 20 },
    { name: "Mario", score: 10 },
    { name: "Tatiana", score: 30 },
    ];
const foo1 = () =>[...users2].sort((a, b) => b.score - a.score)[0];

const foo2 =()=> [...users2].map(user => user.score);

const foo3 = () =>foo2().reduce((total, number) => total + number, 0);
         
console.log(foo1()); // foo1(); // { name: "Tatiana", score: 30 }
console.log(foo2());  // foo2(); // [20, 10, 30]
console.log(foo3()); // foo3(); // 60 

console.log('Завдання 7 ______________________ '); 








console.log('Lesson this ______________________ '); 

function foo7(){
    console.log(this);
}
const arrowFoo =()=>{console.log(this)}
const obj = {
    name: "DDDD",
    foo7,
    info: {
        work: "GoIt",
        getInfo() {
            console.log(this);
        }
    },
    arrowFoo,
    changeArrowFooThis() {
        const arrowFunc = () => { console.log(this) };
        arrowFunc();
    }
};
foo7();//=>window
console.log(obj.foo7());//=>obj
obj.info.getInfo(); //=> info

arrowFoo();//=>window
obj.arrowFoo();//=>window
obj.changeArrowFooThis();

const student = {
    tag: 'Mando',
    showTag() {
        console.log('showTag -> this', this);
        console.log('showTag -> this.tag', this);
    },
};

const invokeAction = function (action) {
    console.log(action); // виведе саму функцію а не результат

    action(); // визвали callback функцію
}

invokeAction(student.showTag); // undefined - т.к це посилання на функцію
invokeAction(student.showTag()); // showTag() - це визов функції
// showTag -> this {tag: 'Mando', showTag: ƒ}
 //showTag -> this.tag {tag: 'Mando', showTag: ƒ}                     