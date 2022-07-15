const cars = [
    { make: 'honda', model: 'CR-v', type: 'suv', amount: 14, price: 24045, onSale: true },
    { make: 'mazda', model: 'CX-9', type: 'sedan', amount: 24, price: 19045, onSale: true },
    { make: 'bmw', model: 'CR-v', type: 'suv', amount: 19, price: 44045, onSale: false },
    { make: 'reno', model: 'CR-v', type: 'suv', amount: 14, price: 10045, onSale: true },
];

const models = cars.map(({ model }) => model);
console.log(models);
 

const makeCarsDiscount = (cars, discount) => {
    
    return cars.map((car ) => {
        const newPrice = car.price - (car.price * discount);
        console.log(newPrice);
        car.price = newPrice;
        return car;
    });
};

console.table(makeCarsDiscount(cars, 0.2));

const carsDiscount = makeCarsDiscount(cars, 0.2);
console.table(carsDiscount);
console.table(cars);
console.log(carsDiscount[0] === cars[0]);
// true т.к. объект передается как ссылка в массиве объектовтак как 
 
const makeCarsWithDiscount = (cars, discount) => {
    
    return cars.map((car) => {
        const carCopy = {...car};
        const newPrice = carCopy.price - (carCopy.price * discount);
        console.log(newPrice);
        carCopy.price = newPrice;
        return car;
    });
};

const makeCarsWithDiscount2 = (cars, discount) => {
    return cars.map(({price, ...car}) => {
       return {
            ...car,  
         price: price - (price * discount),  
        } 
    });
};


const carsWithDiscount = makeCarsWithDiscount2(cars, 0.2);
console.table(carsWithDiscount);
console.table(cars);
console.log(carsWithDiscount[0] === cars[0]); //false 