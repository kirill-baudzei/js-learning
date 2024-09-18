// ООП по курсу
'use strict';

let str = 'some';
let strObj = new String(str); // так можно создать новую строку

console.log(typeof(str)); // string
console.log(typeof(strObj)); // object

// прототипное наследование
const soldier = {
    health: 400,
    armor: 100,
    sayHi: function() {
        console.log("Hi!")
    }
};
const john = {
    health: 100,
};

john.__proto__ = soldier; // но метод устаревший!
console.log(john.armor); // 100 - john получил свойство от прототипа soldier

// современная работа с прототипами и наследованием
Object.setPrototypeOf(john, soldier); // для john будет прототип от soldier
const sam = Object.create(soldier); // создаем новый объект sam , который наследуется от soldier объекта
sam.sayHi();