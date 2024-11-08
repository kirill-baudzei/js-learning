// тип данных символ
'use strict'

const obj = {
    'name': "test"
}

let id = Symbol("id");
obj[id] = 1;

console.log(obj); // { name: 'test', [Symbol(id)]: 1 }