'use strict';
const btn = document.querySelector('button');
// btn.onclick = function () { // добавление обработчика события
//     alert('Clicked!');
// };
// события выполняются по очереди
btn.addEventListener('click', () => { // добавляем слушателя за ивентами - первый аргумент - само событие, второе - коллбек функция.
    alert('Clicked!');
});

btn.addEventListener('click', () => { // добавляем слушателя за ивентами - первый аргумент - само событие, второе - коллбек функция.
    alert('Second Click!');
});

// btn.addEventListener('click', (e) => {
//     alert('Hi from the button area!'); //  функции лучше выносить отдельно
//     console.log("click");
//     console.log(e.target); // возвращает элемент html <button id="btn">Нажми меня</button>
//     console.log(e);
//     e.target.remove(); //  после клика удаляется кнопка из html
// });

let i = 0;
const deleteElement = (e) => {
    console.log('функция вызвана');
    i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};
btn.addEventListener('click', deleteElement); // в метод addEventListener можно добавлять 3ий аргумент - опцию, например
// btn.addEventListener('click', deleteElement, once); - будет сработано только раз

// btn.addEventListener('mouseleave', (e) => {
//     alert('Bye Bye from the button area!');
//     console.log("Leaved Hover");
//     console.log(e);
// });

// важный момент: если у кнопки например есть оверлей и он есть родителем кнопки и имеет такую же функцию, 
// то при клике на него функция будет вызвана дважды. События срабатывает сначала на вложенном событии.
// Событие всплывает наверх!
// ОБРАБОТЧИК СОБЫТИЯ СРАБАТЫВАЕТ СНАЧАЛА НА САМОМ ВЛОЖЕННОМ ЭЛЕМЕНТЕ - ПОТОМ НА РОДИТЕЛЕ И ТАК ДАЛЕЕ
// но его можно отменить:
// 1) вернуть в обработчике return false - но это устаревшее
// 2) использовать метод из объекта события
const link = document.querySelector('a');
link.addEventListener('click', function (event) {
    event.preventDefault(); // останавливает дефолтное поведение в браузере. ссылка не откроется по клику
    console.log(event.target);
});


// повесить обработчики события на все элементы (или на несколько)
// нужно перебрать псевдомассив HTML collections и добавить каждому по ивенту
// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement); // будет работать на все элементы из коллекции элементов со страницы
// });
