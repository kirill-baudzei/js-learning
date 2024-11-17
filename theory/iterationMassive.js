'use strict'

// методы переборов массивов

// filter (можно перезаписать существующий массив)

// const names = ["Akex", 'Ali', 'Konan', 'Voldemart'];
// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });
// console.log(shortNames); // [ 'Akex', 'Ali' ]


// map (можно перезаписать существующий массив)

const answers = ['IvaN', 'Anna', 'HELLo'];
const result = answers.map(item => item.toLowerCase());
console.log(result); // [ 'ivan', 'anna', 'hello' ]


// every / some (проверяет элементы массив и возвращает булиновое значение)
const some = [4, 'String', 'aefgaw'];
console.log(some.some(item => typeof(item) === 'number')); // true - хотя бы один элемент соответствует условию
console.log(some.every(item => typeof(item) === 'number')); // false - все элементы НЕ цифры


// reduce (собирает массив в одно целое)
const arr = [4, 5, 1, 3, 2, 6];

const sum = arr.reduce((sum, current) => sum + current);
console.log(sum); // 21

const strings = ["A", "P", "P", "L", "e"];
const word = strings.reduce((sum, current) => `${sum} ${current}`);
console.log(word); // A P P L e


// практический пример

const obj = {
    ivan: "persone",
    ann: "persone",
    dog: "annimal",
    cat: "annimal"
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(newArr); // [ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ] после операции с filter 



