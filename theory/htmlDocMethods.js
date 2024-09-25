// работа с элементами html страницы

// Методы получения элементов со страницы в document:

// document.getElementById(id):
// Возвращает элемент по его уникальному атрибуту id.
// Пример:
let element = document.getElementById('header');

// document.getElementsByClassName(class):
// Возвращает живую HTML-коллекцию элементов, которые имеют указанный класс.
// Пример:
let elements = document.getElementsByClassName('item');


// document.getElementsByTagName(tag):
// Возвращает все элементы с указанным тегом (например, div, p).
// Пример:
let elementic1 = document.getElementsByTagName('p');

// document.querySelector(selector):
// Возвращает первый элемент, который соответствует CSS-селектору.
// Пример:
let elementic2 = document.querySelector('.item');

// document.querySelectorAll(selector):
// Возвращает статическую коллекцию всех элементов, соответствующих селектору.
// Пример:
let elementic3 = document.querySelectorAll('.item');
// Отличия:
// getElementById — только один элемент по ID.
// getElementsByClassName и getElementsByTagName — возвращают живую коллекцию.
// querySelector и querySelectorAll — поддерживают любые CSS-селекторы.

'use strict';

const box = document.getElementById(('box')); // получение элемента по id

console.log(box);

const btns = document.getElementsByTagName('button');// [1]; // [1] - указывает, какой элемент массива (кнопку) получить
console.log(btns); // получаем всевдомассив из элементов

const circles = document.getElementsByClassName('circle') // собирает все элементы с index.html по определнному классу

// более современные методы

const hearts = document.querySelectorAll('.heart'); // получение по css селектору
console.log(hearts); // получаем html коллекцию - псевдомассив

hearts.forEach(item => {
    console.log(item)
});

// работа с элементами со страницы
const oneHeart = document.querySelector('.heart');
console.log(oneHeart); // один первый элемент из селектора

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px'; // cssText позволяет просто записывать CSS код и задавать стили

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'black'
// }

hearts.forEach( item => {
    item.style.backgroundColor = 'black';
});

// создание элементов страницы 
const div = document.createElement('div'); // элемент создан только внутри JavaScript
// const text = document.createTextNode('Тут был я');
div.classList.add('black'); // элемент создан

document.body.append(div); // берем тег body и в его конец добавляем div
// // обратный метод prepend
wrapper.prepend(div);

hearts[0].after(div); // before / after тоже позволяют вставлять элементы до или после другого элемента

// удаление элемента через REMOVE
circles[0].remove;

// REPLACE WITH - заменяет элемент страницы
hearts[0].replaceWith(circles[0]);