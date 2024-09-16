// Передача по значению и по ссылке:

// По значению: Примитивные типы данных (числа, строки, булевы значения) копируются при передаче в функцию или переменную. Изменения в копии не влияют на оригинал.
// По ссылке: Объекты и массивы передаются по ссылке, то есть изменения в одной переменной отразятся на оригинальном объекте.
// Spread оператор (ES6):

// Позволяет "разворачивать" массивы или объекты.
// Используется для копирования или объединения массивов/объектов.
// Пример:

const arr = [1, 2, 3];
const newArr = [...arr, 4]; // [1, 2, 3, 4]
const obj = { a: 1 };
const newObj = { ...obj, b: 2 }; // { a: 1, b: 2 }

// еще примеры
const obj1 = {
    a: 5,
    b: 1,
};
const copy = obj1; // передается ссылка на объект. Передача по ссылке
copy.a = 10; // работает для обоих объектов
console.log(copy); // { a: 10, b: 1 }
console.log(obj1); // { a: 10, b: 1 }


function copying(mainObj) { // при такой функции изначальный обьект не будет переписываться
    let objCopy = {};
    let key;
    for (const key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copying(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10; // ссылка на изначальный объект , поэтому изменяется и в изначальном объекте
console.log(newNumbers);
console.log(numbers);
// { a: 10, b: 5, c: { x: 10, y: 4 } }
// { a: 2, b: 5, c: { x: 10, y: 4 } }


// object ASSIGN
const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add)); //  объекты сложились в один
// { a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 }

const clone = Object.assign({}, add);
clone.d = 20;
console.log(add); // { d: 17, e: 20 } - в изначальном объекте d не изменилось, изменяется только в копии
console.log(clone); // { d: 20, e: 20 }


// методы копирования массива
const oldArr = ['a', 'b', 'c'];
const newArray = oldArr.slice(); // через метод slice создается копия массива без привязки к oldArr

newArray[1] = 'New item';
console.log(newArray); // [ 'a', 'New item', 'c' ]
console.log(oldArr); // [ 'a', 'b', 'c' ]


// создание поверхностной копии через оператор spread
const video = ['youtube' , 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      interet = [...video, ...blogs, 'VK', 'facebook']; 
      // просто вытаскиваются элементы из других массивов

console.log(interet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);