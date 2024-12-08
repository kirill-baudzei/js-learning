'use strict'

const persone = {
    name: 'Alex',
    age: 25,

    get userAge() {
        return this.age
    },

    set userAge(number) {
        this.age = number;
    }
};

console.log(persone.userAge = 30); // 30 установить возможно только при наличии сетера!

console.log(persone.userAge); // 30