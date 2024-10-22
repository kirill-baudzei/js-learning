'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth,
//       height = box.clientHeight;

const width = box.clientHeight,
      height = box.clientHeight;
console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect()); //  указывает координаты элементы
// DOMRect {x: 516, y: 50, width: 400, height: 350, top: 50, …}bottom: 400height: 350left: 516right: 916top: 50width: 400x: 516y: 50[[Prototype]]: DOMRect

console.log(box.getBoundingClientRect().top); // только одна координата / значение

const style = window.getComputedStyle(box);

console.log(style); // CSSStyleDeclaration {0: 'accent-color', 1: 'align-content', 2: 'align-items', 3: 'align-self', .......
// получаем большой кусок информации о всех стилях

