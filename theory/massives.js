// массивы и всевдомассивы
'use strict';

const arr = [1, 2, 3, 6, 8]

arr.pop() // удаляет последний элемент массива
console.log(arr); // [ 1, 2, 3, 6 ]

arr.push(10); // добавляет новый элемент в конце
console.log(arr); // [ 1, 2, 3, 6, 10 ]

for (let i = 0; i < arr.length; i++) { // перебирает элементы массива
    console.log(arr[i]);
}

for (let value of arr) { // как и обычный цикл, но работает для массивов / строк / сетов и тд (не для объектов!)
    console.log(value); // выводит каждый элемент
}

// arr[99] = 0; // если сделать arr.length - то будет 100. ТК length - последний порядковый ЭЛЕМЕНТ + 1

// метод for each

arr.forEach(function(item, j, arr) { // forEach проходітся по всем элементам массива и применяет на них описанную функцию item - элемент, 
    // j - номер по порядку, arr - ссылка на массив
    console.log(`${j}: ${item} внутри массива ${arr}`);
});
// 0: 1 внутри массива 1,2,3,6,10
// 1: 2 внутри массива 1,2,3,6,10
// 2: 3 внутри массива 1,2,3,6,10
// 3: 6 внутри массива 1,2,3,6,10
// 4: 10 внутри массива 1,2,3,6,10

const str = prompt("", "");
const products = str.split("", ""); // получаем массив по разделителю запятая + пробел
console.log(products);

console.log(products.join("; ")) // массив объедениться с разделителем ; в СТРОКУ

products.sort(); // сортирует массив из элементов по алфавитному порядку. 
// числа воспринимает как строки и сортирует как строку. например [2, 13, 26] - будет [13, 2, 26]

let newArr = [2, 13, 46, 8, 10];
function compareNum(a, b) {
    return a - b
}
newArr.sort(compareNum);
console.log(newArr) // [ 2, 8, 10, 13, 46 ] отсортировалось правильно - по возрастанию чисел
// compareNum функция сравнивает два числа a и b.
// Если результат меньше 0 (то есть a < b), то a ставится перед b.
// Если результат больше 0 (то есть a > b), то b ставится перед a.
// Если результат 0, их порядок не меняется.

// Псевдомассивы