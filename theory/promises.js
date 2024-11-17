'use strict';

// callback hell

console.log('Запрос данных..');

setTimeout(() => {
    console.log('Подготовка данных...');
    const product = {
        name: 'TV',
        price: '2000'
    };
}, 2000);

// с помощью промисов - этого можно избежать
const req = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Подготовка данных...');
    
        const product = {
            name: 'TV',
            price: '2000'
        };
        resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            // Здесь вызывается resolve, значит код не должен переходить в catch
            resolve(product);
        }, 2000);
    });
})
.then(data => {
    data.modify = true;
    return data;
})
.then((data) => {
    console.log(data);
})
.catch(() => {
    console.error('Ошибка'); // Этот блок выполнится только если был вызван reject() выше или произошло исключение.
})
.finally(() => {
    console.log('Операция Finally'); // Выполняется всегда, независимо от того, был ли промис выполнен успешно или с ошибкой.
});


const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });

}

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('Все промисы выполнились ALL')
});

