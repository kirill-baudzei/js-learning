'use strict'
// Динамическая типизация в JS

// To string
// 1) через метод String()
console.log(typeof(String(null))); // string

// 2)
console.log(typeof(5 + '')); // string - тк сложение со сторокой - всегда строка

const num = 5
console.log("https://vk.com/catalog/" + num); // строка + число = строка https://vk.com/catalog/5

const fontSize = 26 + 'px'; // 26px 

// TO NUMBER
// 1)
console.log(typeof(Number('4'))); // number - метод Number - предвращает в строку

// 2)
console.log(typeof(+'5')); // + перед данным - тоже делает числом number

// 3)
console.log(typeof(parseInt("15px", 10))); // number

let answ = +prompt("Hello", "")


// TO BOOLEAN
// 1)
// Always false: 
0, '', null, undefined, NaN; // все остальное true в логическом контексте - например пустые объекты или массивы
let switcher = null;

if (switcher) {
    console.log('Working...'); // не работает, тк switcher имеет значение null , которое всегда false
}

switcher = 1
if (switcher) {
    console.log('Working...'); // уже работает, тк возвращает true // Working
}

// 2)
console.log(typeof(Boolean('4'))); // boolean

// 3)
console.log(typeof(!!"4444")); // boolean