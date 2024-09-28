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
// В JavaScript, == и === — это операторы сравнения, но они работают по-разному:
// == (нестрогое равенство) сравнивает значения после приведения типов (например, строка "5" может быть равна числу 5).
// === (строгое равенство) сравнивает значения без приведения типов (например, строка "5" не равна числу 5).

// ! - оператор обращения в противоположное
const isChecked = true,
  isClosed = !true;
console.log(isChecked && isClosed); // false , так как isClosed ОБРАЩЕН В FALSE С ПОМОЩЬЮ 1

const isBad = true,
  notGood = true;
console.log(isBad || notGood); // true

// git commit -a -m"commit text"
// git push

// Условные операторы
if (4 != 9) {
  console.log("OK!");
}

if (4 == 4) {
  console.log("OK! too");
}

if (4 == 9) {
  console.log("OK!");
} else {
  console.log("NOT OK"); // всегда not ok
}

const number = 50;
if (number < 49) {
  console.log("Error"); // не срабатывает
} else if (number > 100) {
  console.log("too much"); // это так же не срабатывает
} else {
  console.log("Success"); // срабатывает
}

number === 50 ? console.log("OK") : console.log("not true");
// тернарный оператор
// Тернарный оператор в JavaScript — это сокращенная форма условного выражения if...else. Он позволяет выполнить одно из двух выражений в зависимости от условия.

// Пример:
const age = 18;
let result = age >= 18 ? "Взрослый" : "Ребенок";
console.log(result); // Взросылый тк выражение true
// В этом примере, если age больше или равно 18, result будет "Взрослый", иначе — "Ребенок".

// switch - всегда строгое сравнение
const myAge = 23;
switch (myAge) {
  case 49:
    console.log("Много");
    break;

  case 50:
    console.log("Много!");
    break;
  case 23:
    console.log("correct");
    break;
  default:
    console.log("Не в этот раз");
    break;
}
// switch сравнивает исходное значение с каждым значением (case) с использованием строгого сравнения (===).
// Если совпадение найдено, выполняется соответствующий блок кода. break предотвращает выполнение последующих case. default блок выполняется, если ни одно совпадение не найдено.
