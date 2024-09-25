'use strict';

const box = document.getElementById(('box')),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

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

// document.body.append(div); // берем тег body и в его конец добавляем div
// wrapper.append(div); // элемент div появляется внутрі wrapper
wrapper.appendChild(div); // такая же , но устарвшая команда
// // обратный метод prepend
// wrapper.prepend(div);

// hearts[0].after(div); // before / after тоже позволяют вставлять элементы до или после другого элемента

// удаление элемента через REMOVE
// circles[0].remove;

// REPLACE WITH - заменяет элемент страницы
hearts[0].replaceWith(circles[0]);

// изменение содержимого элемента
div.innerHTML = "<h1>Hello World!</h1>";  // возволяет добавлять html структуры
// div.innerText = "new text"; // позволяет добавлять только текст

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // вставиили html код перед div элементом