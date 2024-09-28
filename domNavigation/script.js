'use strict'
// навигация по элементам
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.firstChild);
// console.log(document.firstElemntChild);
// console.log(document.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement); //  аналог команды выше

// DATA атрибуты  - <li data-current="3">3</li>
// console.log(document.querySelector('[data-current = "3"]')); // получаем элемент по data current
// console.log(document.querySelector('[data-current = "3"]').nextSibling); // получаем соседний элемент - текстовую ноду - перенос строки
// /* <li data-current="3">3</li>

// <li>4</li> */
// console.log(document.querySelector('[data-current = "3"]').nextElementSibling); // получаем именно следующий элемент, а не ноду 
// следующий li получили из метода выше]


// перебор всех child nodes и избавляемся от текстовых
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}