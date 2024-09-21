// Замыкание (Closures) и лексическое окружение Lexical Environment в JS.
'use strict' // установка строго режима

let number = 5;

function logNumber() {
    // let number = 4; debugger - функция выведет 4, так как есть локальная переменная, которая будет использоваться
    console.log(number);
}

number = 6; // функция видит изменение в значении переменной и выведет 
logNumber(); // 6

number = 8;
logNumber();