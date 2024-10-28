'use strict'

// 1 и 2
// function showThis() {
//     console.log(this);
// }
// showThis(); // undefined из-за strict . window - если use strcit нет. (глобальный объект)
// 3
// function User(name, id,) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}! You are ${this.id}!!!`) // this везде ссылается на объект 
//     };
// }

// const kirill = new User('Kirill', 22);

// 4
function sayName(surname) {
    console.log(this); // выводит кон
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, 'Smith');

function count(num) {
    return this*num;
}

const double = count.bind(2); // определяет что будет передаваться в this - определяем контекст

// 1)  Обычная функция - this = window, но если use strict - undefined
// 2) Контекст у объектов метода - всегда сам объект
// 3) This в конструкторах и классах - это новый экземпляр объекта 
// 4) Ручная привязка this: через call , apply , bind