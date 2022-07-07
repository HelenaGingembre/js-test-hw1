/*---
Выполни рефакторинг методов объекта atTheOldToad
 так, чтобы они работали не с массивом строк, а с массивом объектов.------------------------------------*/
/**--------------------------------------------------------- */
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 240 },
  ],
  // Change code below this line
 
    getPotions() {
    return this.potions;
    },
  
    addPotion(newPotion) {
        
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
    
    removePotion(potionName) {
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

    updatePotionName(oldName, newName) {
        let result = `Potion ${oldName} is not in inventory!`;
        const { potions } = this;
        
        for (let i = 0; i < potions.length; i += 1) {
            
            const { name } = potions[i];
           //const { name, price } = potions[i];
           //const name = potions[i].name;
            console.log(potions[i]);
            console.log(name);
            
              if (oldName === name) {
                 console.log(` iм'я знайдено ${name}`);
                 /////////////////////////
                 /// працює лише так ????
                  
                 potions[i].name = newName;
                 //////////////////////////
                /// нижче не працює деструктуризація
                     // name = newName;
                //   price = potions[i].price;
                 
                  result = `найдена "${oldName}" змінено на "${newName}" `;
                  break;
                }
        }
        return console.log(result); 
       
    },
    // Change code above this line
};


console.table(atTheOldToad.getPotions());
atTheOldToad.removePotion("Dragon breath");

console.table(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
atTheOldToad.addPotion({ name: "Dragon breath", price: 780 })
console.table(atTheOldToad.getPotions());

atTheOldToad.updatePotionName("Dragon breath", "Polymorth");

console.table(atTheOldToad.getPotions());
 

atTheOldToad.addPotion({ name: "Stone skin", price: 520 });
   //не добавил так как уже есть в списке  Stone skin! 
   // отработала функция нормально


// console.log(atTheOldToad.getPotions());

