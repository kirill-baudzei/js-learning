"use strict";
// Циклы
// В JavaScript есть три основных способа реализации циклов:

// 1. Цикл for
// Позволяет выполнять код определённое количество раз. Удобен, когда заранее известно количество итераций.
// Пример:
for (let i = 0; i < 5; i++) {
  console.log(i); // Выведет числа от 0 до 4
}

// 2. Цикл while
// Выполняет код до тех пор, пока условие истинно. Используется, когда количество итераций заранее неизвестно.
// Пример:
let b = 0;
while (b < 5) {
  console.log(b); // Выведет числа от 0 до 4
  b++;
}

// 3. Цикл do...while
// Сначала выполняет код, а затем проверяет условие. Код выполнится как минимум один раз, даже если условие ложное с самого начала.
// Пример:
let c = 0;
do {
  console.log(c); // Выведет числа от 0 до 4
  c++;
} while (c < 5);
// Эти три цикла покрывают основные потребности в итерациях в JavaScript.

// lector example while
let sum = 50;
while (sum < 55) {
  console.log(sum);
  sum++;
}

// lector example do
let num = 49;
do {
  console.log(num);
  num++;
} while (num <= 57);

// lector example for
for (let i = 1; i < 10; i++) {
  if (i === 6) {
    break; // остановит работу цикла при срабатывании if
  }
  console.log(i);
}

// цикл в цикле и метки
for (let d = 0; d < 3; d++) {
  console.log(d);
  for (let j = 0; j < 5; j++) {
    console.log(j);
  }
}

// задача треугольник
let result = "";
const length = 7;

for (let k = 1; k < length; k++) {
  for (let m = 0; m < k; m++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);

first: for (let f = 0; f < 3; f++) {
  // first: - метка
  console.log(`First level: ${f}`);
  for (let t = 0; t < 3; t++) {
    console.log(`Second level: ${t}`);
    for (let l = 0; l < 5; l++) {
      if (l === 2) continue first;
      console.log(`Third level: ${l}`);
    }
  }
}

first: for (let f = 0; f < 3; f++) {
  // first: - метка
  console.log(`First level: ${f}`);
  for (let t = 0; t < 3; t++) {
    console.log(`Second level: ${t}`);
    for (let l = 0; l < 5; l++) {
      if (l === 2) break first; // break останавливает все при выполнении условия
      console.log(`Third level: ${l}`);
    }
  }
}
