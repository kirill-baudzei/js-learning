// мобильные ивенты браузера
// touchstart
// touchleave
// touchend
// touchenter
// touchleave
// touchcancel

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();

        console.log('start');
    })
});