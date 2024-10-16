'use strict';

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px"
        }
    }
}

btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     // Убираем const, чтобы использовать глобальную переменную timerId
//     timerId = setInterval(logger, 2000);
// });

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('Hi!');
//     i++;
// };

// const timerId = setTimeout(() => {
//     console.log('Hello!')
// }, 2000); // значение в милисекундах

// const newTimer = setTimeout(logger, timeout);

// clearInterval(timerId); // отмена таймера

