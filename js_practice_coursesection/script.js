'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
console.log(btns[0].classList.item(0)); // получаем класс blue
console.log(btns[1].classList.add('red')); // к элементу добавился класс red 
// console.log(btns[0].classList.remove('blue')); // удаляем класс blue
// console.log(btns[0].classList.toggle('blue')); // переключает классы

if (btns[1].classList.contains('red')) { // метод contains проверяет наличие класса у элемента
    console.log('red');
};

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log("HELLO!");
    };
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

