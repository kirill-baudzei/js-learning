"use strict";

// пример использования опции confirm На сайте - взаимодействие с пользователь. Возвращает true or false, в зависимости от выбранного пользователем.
// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18 лет?", "18"); // если перед prompt поставить + , то получим type number
// console.log(answer);
// console.log(typeof answer);

// запись данных в массив - базовое общение с пользователем через prompt
// const answers = [];
// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Ваша фамилия?", "");
// answers[2] = +prompt("Ваш возраст?", "");

// console.log(answers);
// console.log(typeof answers);

// интерполяция !!
const category = "games";
console.log(`https://mysite.com/${category}/5`); // - нужно чтобы всегда было в обратных кавычках `` = шаблонные строки в ES6 появилось
// вывод https://mysite.com/games/5
// alert(`Hi, welcome to ${category}`);

// Операторы
console.log("arr" + " - gument");
// arr - gument

console.log(4 + " Object");
// 4 Object
// console.log(4 + +"4"); - перевод аргументом УНАРНЫЙ ПЛЮС
// 8

let incr = 10,
  decr = 10;
incr++; // увеличение на единицу
decr--; // уменьшение на единицу
// плюс и минус можно ставить и до и после
++incr;
--decr;
console.log(incr); // 12
console.log(decr); // 8
// Но постфиксная форма сначала возвращает прошлое значение пример:
console.log(incr++); // 12 - то есть сначала выводит число , потом добавляет 1
console.log(--decr); // 7 -постфикс сначала уменьшает, потом выводит
console.log(5 % 2); // output 1. ТК % - Опертор вывода остатка от деления

// сравнивание
console.log(2 * 4 == "8"); // true - тк сравниваниет само значение, не типы данных
console.log(2 * 4 === "8"); // false - тк === - строгое сравнивание

// опертор && - и
// опертор || - или
// == равно
// != не равно
// !== строгое не равно

// ! - оператор обращения в противоположное
const isChecked = true,
  isClosed = !true;
console.log(isChecked && isClosed); // false , так как isClosed ОБРАЩЕН В FALSE С ПОМОЩЬЮ 1

const isBad = true,
  notGood = true;
console.log(isBad || notGood); // true

// git commit -a -m"commit text"
// git push
