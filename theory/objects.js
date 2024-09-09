// Объекты, деструктуризация объектов (ES6)
"use strict";
const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "Black",
    bg: "whire",
  },
  makeTest: function () {
    console.log("Test");
  },
};

// console.log(options.name);
// delete options.name; // убирает name
console.log(options);

let counter = 0;
for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
  }
}

options.makeTest(); // Test

console.log(counter); // кол - во параметров в объекте
// Свойство name имеет значение test
// Свойство width имеет значение 1024
// Свойство height имеет значение 1024
// Свойство border имеет значение Black
// Свойство bg имеет значение whire

// методы и свойства для Объектов
// нет свойства lenght
console.log(Object.keys(options)); // возвращает массив с ключами
// а на массив уже можно метод options.lenght = 4
const { border, bg } = options.colors; // Вытянули данные ключи в переменную
console.log(border);

// Объекты в JavaScript — это структуры данных, которые хранят значения в виде пар "ключ: значение".
// Ключами обычно являются строки или символы, а значениями могут быть любые типы данных, включая другие объекты и функции.

// Пример объекта:

// const person = {
//   name: "John",
//   age: 30,
//   profession: "developer",
// };

// Деструктуризация объектов (ES6)
// Это синтаксис, который позволяет извлекать значения из объектов и присваивать их переменным с помощью сокращённой записи. Это упрощает работу с объектами и делает код более читаемым.

// Пример деструктуризации объекта:
// const person = {
//   name: "John",
//   age: 30,
//   profession: "developer",
// };

// Деструктуризация объекта
// const { name, age } = person;
// console.log(name); // "John"
// console.log(age); // 30
// В этом примере мы извлекаем свойства name и age из объекта person и создаём переменные с такими же именами.

// Особенности:
// Переименование переменных: Если нужно создать переменную с другим именем:
// const { name: firstName } = person;
// console.log(firstName); // "John"

// Значения по умолчанию: Можно задать значения по умолчанию, если в объекте нет такого свойства:
// const { name, age, gender = "male" } = person;
// console.log(gender); // "male"

// Вложенная деструктуризация: Если объект содержит вложенные объекты:
// const person = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// const {
//   address: { city },
// } = person;
// console.log(city); // "New York"
// Деструктуризация объектов делает работу с объектами более удобной, особенно при работе с большими объектами или в функциях с множеством параметров.
