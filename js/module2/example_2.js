"use strict";
console.log("----------- Example 2 ---------------");
/**** Відображення часу ****/

/*
Умова завдання:
Напиши скрипт для відображення години та хвилин в консолі браузера у вигляді '19 г. 26 хв.'.
Якщо значення змінної рівно '0' то виводити речення '19 г' без хвилин.
*/

const hours = 19;
//const minutes = 0;
 const minutes = 26;
let time;

if (minutes == 0) {
  time = `Час заданий у змінній - ${hours} ч.`;
} else {
        time = `Час заданий у змінній -  ${hours} ч. ${minutes} мин.`;
}
console.log(time);



console.log("----------- Example 2 (поточна дата)---------------");
function getDate() {
    let now = new Date(); //
    
    let days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    let hours = {//console.log(result);
        13: 1,
        14: 2,
        15: 3,
        16: 4,
        17: 5,
        18: 6,
        19: 7,
        20: 8,
        21: 9,
        22: 10,
        23: 11
    };

    //Метод .getDay() возвращает порядковый номер дня недели
    //указанной даты по местному времени, где 0 соответствует воскресенью.
    
    // .getHours() возвращает часы указанной даты по местному времени.
    //getMinutes() возвращает минуты указанной даты по местному времени.
   let  result = 'Сьогодні : ' + days[now.getDay()] + '\nПоточний час: ';
    result += (now.getHours() >= 12 && now.getHours() <= 23) ?
        (hours[now.getHours() - 1] + ' PM(годин): ') : now.getHours() + ' AM(годин): ';
    result += now.getMinutes() + ' хв : ' + now.getSeconds()+ ' с.';

    //alert(result);
    return result;
}

console.log(getDate());