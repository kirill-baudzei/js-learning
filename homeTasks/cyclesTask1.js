// Задачи:

// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//  Цикл, который нужно переписать:

//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }
// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// Место для первой задачи.
function firstTask() {
  for (let i = 5; i <= 10; i++) {
    console.log(i);
  }
}

// Место для второй задачи
function secondTask() {
  for (let j = 20; j >= 10; j--) {
    console.log(j);
    if (j === 13) break;
  }
}

// Место для третьей задачи
function thirdTask() {
  let k = 2;
  while (k <= 10) {
    if (k % 2 === 0) {
      console.log(k);
    }
    k++;
  }
}

// Место для четвертой задачи
// переписать цикл используя while
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue; // продолжает цикл если условие истина
//     } else {
//         console.log(i);
//     }
// }
let i = 2;
while (i <= 16) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

function fourthTask() {
  // Пишем решение вот тут
}

// Место для пятой задачи

function fifthTask() {
  const arrayOfNumbers = [];
  let m = 0;
  let n = 5;
  while (n <= 10) {
    arrayOfNumbers[m] = n;
    m++;
    n++;
  }
  console.log(arrayOfNumbers);
  return arrayOfNumbers;
}
