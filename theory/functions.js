// Функции в JavaScript (ES6)
// функции работают до того как созданы тоже
// Обычные функции:

// Объявляются с использованием ключевого слова function.
// Могут быть вызваны до их объявления (hoisting).
// Имеют собственное значение this, которое зависит от того, как была вызвана функция.
function sayHello(name) {
  return "Hello, " + name;
}

// Стрелочные функции:

// Введены в ES6.
// Более краткий синтаксис.
// Не имеют собственного this, а наследуют его из внешнего контекста (лексическое this).
// Не могут быть вызваны до их объявления (hoisting не работает).
// Используются, когда важен краткий синтаксис и правильное наследование this.
const sayHello = (name) => "Hello, " + name;

// Основные отличия:
// Синтаксис: стрелочные функции компактнее.
// this: в стрелочных функциях this определяется окружением, где функция была создана, а не где она была вызвана.
// Hoisting: обычные функции поднимаются вверх (hoisting), стрелочные — нет.

function showFirstMessage(text) {
  console.log(text);
}
showFirstMessage("Hello all");

// переменная создана внутри функции - локальная и существует только внутри функции!
// переменная вне функций - глобальная

function calc(a, b) {
  return a + b; // после return код не проверяется - это завершение функции
}
console.log(calc(4, 7));
console.log(calc(6, 3));

function ret() {
  let num = 50;
  //
  return num;
}
const anotherNum = ret();
console.log(anotherNum); // выводит 50

// function expresion
const logger = function (params) {
  console.log("Hello!");
};
logger();

// стрелочная функция
const calculate = (d, g) => d + g;

// аргументы функций
const eurCurr = 4.3;
const usdCurr = 3.9;
function converter(amount, currency) {
  console.log(amount * currency);
}

converter(1050, eurCurr);

// Про важность return
const expense = 2;

function pricing(price, expense) {
  return price * expense;
}

const discount = 0.5;
function promotion(result) {
  console.log(result * discount);
}
promotion(pricing(10, expense));
