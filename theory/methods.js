// Методы и свойства строк и функций
"use strict";
console.dir(Number); // Выведет в консоли все методы для типа данных Number

// В JavaScript строки (strings) и числа (numbers) обладают различными методами и свойствами, которые позволяют удобно работать с ними.
// пример

// length — свойство, возвращающее длину строки.

"Hello".length; // 5

const test = "Test";
console.log(test.toLowerCase()); // test

const logg = "Hello World fasf fawf w";
console.log(logg.slice(6, 11)); // World
console.log(logg.slice(" ")); // Hello World fasf fawf w
// аргумент отображает разделитель

console.log(logg.substring(6, 15)); // World fas так же по ренжу индексов выводит часть текста

console.log(logg.substr(1, 5)); // начинает с первого символа и выводит следующие 5\

// Для чисел
// Есть встроенная библиотека Math с методами для работы с числами
const num = 12.2;
console.log(Math.round(num)); // близжайшее целое число - 12
// Из строки получаем Number
console.log(parseInt(num)); // 12
console.log(parseFloat(num)); // 12.2
