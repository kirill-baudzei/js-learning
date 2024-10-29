// rest operator (остаточные)
// ...rest - rest оператор пропісывается всегда в конце

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'setting');
// basic rest [ 'operator', 'setting' ] 
// все от rest оператора передается в массиве элементами

function calcOrDouble(number, basis = 2) { // через = задается значение по умолчанию
    console.log(number * basis);
}

calcOrDouble(5, 3);
calcOrDouble(5);