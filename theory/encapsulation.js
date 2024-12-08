'use strict'

function User(name, age) {
    this.name = name;
    this.age = age;

    this.say = function () {
        console.log(`Имя пользователя ${this.name}. Возраст: ${this.age}`);
    };
}

const kirill = new User('Kirill', 22);
console.log(kirill.name); // Kirill
console.log(kirill.age); // 22

kirill.age = 23;
kirill.name = 'alex';

kirill.say(); // Имя пользователя alex. Возраст: 23

// Без инкапсуляции можно вмешиваться.
// с инкапсуляцией

'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Petrychenko';

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}

const ivan = new User('Ivan', 27);
