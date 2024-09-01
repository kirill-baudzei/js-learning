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
