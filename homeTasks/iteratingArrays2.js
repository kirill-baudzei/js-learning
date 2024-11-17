const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

// Задачи:
// 1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, 
// которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)
// Пример:
// getPositiveIncomeAmount(funds) => 13300
const getPositiveIncomeAmount = (data) => {
    const positiveAmounts = data.filter(element => element.amount >= 0);
    return positiveAmounts.reduce((acc, num) => acc + num.amount, 0); 
};
console.log(getPositiveIncomeAmount(funds)); // 13300

// 2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. 
// Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) 
// Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.
// Пример:
// getTotalIncomeAmount(funds) => -500

const getTotalIncomeAmount = (data) => {
    if (data.some(element => element.amount < 0)) {
        return data.reduce((acc, item) => acc + item.amount, 0);
    } else {
        return getPositiveIncomeAmount(data);
    }
};
console.log(getTotalIncomeAmount(funds)); // -500

// короткое решение
// const getTotalIncomeAmount = (data) => {
//     return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
// }