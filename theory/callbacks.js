"use strict";

function fisrt() {
  //  do something
  setTimeout(function () {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

fisrt();
second();
// 2
// 1
// сначала выводит 2 , тк выполняется сразу, а потом 1 , тк задержка в 500 милисекунд.

function learnJS(lang, callback) {
  console.log(`Я учу ${lang}`);
  callback(); // функция выполниться только после первой
}

function done() {
  console.log("Я прошел этот урок");
}

learnJS("JavaScript", done);

// Я учу JavaScript
// Я прошел этот урок
// То есть после выполнения первой функции запустилась коллбек вторая
