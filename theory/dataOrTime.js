'use strict';

const now = new Date(); // текущая дата и время до милисекунд
const bef = new Date('2020-05-30');

console.log(now);
console.log(bef); // 2020-05-30T00:00:00.000Z

console.log(now.getTimezoneOffset()); // -120 выводит разницу в часовой зоне и UTC в минутах