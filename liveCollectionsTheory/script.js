'use strict';

const boxedQuery = document.querySelectorAll('.box'); // коллекция статична и отображает отпечаток и не отображает реальные изменения
const boxesGet = document.getElementsByClassName('box'); // коллекция отслеживаемая и отражает реальность - живая коллекция

// console.log(boxedQuery); // NodeList
// console.log(boxesGet); // HTMLCollection(3)

// boxedQuery[0].remove();
// boxesGet[0].remove(); 

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
// }

// console.log(boxedQuery); // NodeList
// console.log(boxesGet); // HTMLCollection(3)

boxedQuery.forEach(box => {
    if (box.matches('this')) console.log(box);
})

console.log(boxedQuery[0].closest('wrapper'));