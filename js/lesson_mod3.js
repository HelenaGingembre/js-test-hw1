const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значение свойства
  console.log(book[key]);
}

/******** */
console.log("module 3 lesson 2 - Repeta");
/* корзина товаров */
const cart = {
    items: [],
    getItems() { 
        return this.items;
    },
    add(product) {

        for (const item  of this.items) {
            
            if (item.name === product.name) {
                console.log(` такой продукт уже есть ${product.name}`)
                item.quantity += 1;
                return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        };

        this.items.push(newProduct);
     },
    remove(productName) { 
        const { items } = this;
         for (let i = 0; i < items.length; i += 1) {
             const { name }= items[i] ;
            if (productName === name) {
                console.log(`знайшли такий продукт ${productName}`);
                console.log('індекс', i);
                items.splice(i, 1);
            } 
        }
    },
    clear() { 
        this.items = [];
    },
    countTotalPrice() { 
        const { items } = this;
        let total = 0;

        for (const {price, quantity} of items) {
            total += price * quantity; 
            
        }
        return total;
    },
    increaseQuantity(productName) { 
        for (const item  of this.items) {
            
           
            if (item.name === productName) {
                console.log(` такой продукт уже есть ${item.name} + увеличим его на +1`)
                item.quantity += 1;
                
                return;
            }
        }
    },
    decreaseQuantity(productName) { 

         for (const item  of this.items) {
            
            if (item.name === productName) {
                console.log(` продукт найден  ${item.name} и уменьшаем его на -1`)
                item.quantity -= 1;
                return;
            }
        }
    },
};

console.log(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'orange', price: 70 });
cart.add({ name: 'peach', price: 80 });
cart.add({ name: 'raspberry', price: 30 });

cart.add({ name: 'apple', price: 50 });

console.table(cart.getItems());

cart.remove('peach');
console.table(cart.getItems());

cart.clear();
console.log(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'orange', price: 70 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'raspberry', price: 30 });
cart.add({ name: 'raspberry', price: 30 });


console.table(cart.getItems());

console.log('Total: ',cart.countTotalPrice());

cart.increaseQuantity('apple');
cart.increaseQuantity('raspberry');
cart.decreaseQuantity('raspberry');
console.table(cart.getItems());