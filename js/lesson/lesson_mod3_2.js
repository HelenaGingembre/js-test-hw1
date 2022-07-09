/**
 * Example 5 - Комплексные задачи
 * Напиши скрипт управления личным кабинетом интернет банка. 
 * Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
 */

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};
  
/*
* Каждая транзакция это объект со свойствами: id, type и amount
*/

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
    * Метод создает и возвращает объект транзакции.
    * Принимает сумму и тип транзакции.
    */
    createTransaction(amount, type) {
        return {
            id: this.transactions.length + 1,
            amount,
            type
        }
    },

    /*
    * Метод отвечающий за добавление суммы к балансу.
    * Принимает сумму танзакции.
    * Вызывает createTransaction для создания объекта транзакции
    * после чего добавляет его в историю транзакций
    */
    deposit(amount) {
        const transaction = this.createTransaction(
            amount,
            Transaction.DEPOSIT
        )

        this.transactions.push(transaction)
        this.balance += amount
    },

    /*
        * Метод отвечающий за снятие суммы с баланса.
        * Принимает сумму танзакции.
        * Вызывает createTransaction для создания объекта транзакции
        * после чего добавляет его в историю транзакций.
        *
        * Если amount больше чем текущий баланс, выводи сообщение
        * о том, что снятие такой суммы не возможно, недостаточно средств.
        */
    withdraw(amount) {
        if (amount > this.balance) return 'недостаточно средств'

        const transaction = this.createTransaction(
            amount,
            Transaction.WITHDRAW
        )

        this.transactions.push(transaction)
        this.balance -= amount
    },

    /*
        * Метод возвращает текущий баланс
        */
    getBalance() {
        return this.balance
    },

    /*
    * Метод ищет и возвращает объект транзации по id
    */
    getTransactionDetails(id) {
        let tr = null

        for (let transaction of this.transactions) {
            if (transaction.id === id) {
                tr = { ...transaction }
                break
            }
        }

        return tr
    },

    /*
    * Метод возвращает количество средств
    * определенного типа транзакции из всей истории транзакций
    */
    getTransactionTotal(type) {
        let sum = 0

        for (let transaction of this.transactions) {
            if (transaction.type === type) {
                sum += transaction.amount
            }
        }

        return sum
    },
};