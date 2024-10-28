'use strict'
// классы в ES6

class Rectangle {
    constructor(height, weight) {
        this.height = height,
        this.weight = weight; // this - экзепляр класса
    }

    calcArea() {
        return this.height * this.weight;
    }
}

const square1 = new Rectangle(10, 10);
console.log(square1.calcArea()); // 100

const long = new Rectangle(20, 100);
console.log(long.calcArea()); // 2000

// more example

class ColoredRectangleWithText extends Rectangle {
    constructor(height, weight, text, bgColor) {
        super(height, weight); // вызывает то, что было у класса родителя. не нужно повторять строки. Super - всегда первая строка в конструкторе
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст = ${this.text} and color : ${this.bgColor}`)
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hi', 'red');
div.showMyProps(); // Текст = Hi and color : red
console.log(div.calcArea()); // 250
