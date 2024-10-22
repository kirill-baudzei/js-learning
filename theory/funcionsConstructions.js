'use strict';

function User(name, id,) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}! You are ${this.id}!!!`)
    };
}

const kirill = new User('Kirill', 22);
console.log(kirill); // User { name: 'Kirill', id: 22, human: true }

const alex = new User('Alex', 25);
console.log(alex); // User { name: 'Alex', id: 25, human: true }

kirill.hello(); // Hello Kirill! You are 22!!!

User.prototype.exit = function(name) { // это будет общий метод для конструктора User
    console.log(`User ${this.name} left`)
};

alex.exit(); // User Alex left
kirill.exit(); // User Kirill left
