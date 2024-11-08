'use strict'

const persone = {
    name: 'alex',
    tel: '+134112312',
    parents: {
        mom: 'mom',
        dad: 'dad'
    }
};

console.log(JSON.stringify(persone)); // {"name":"alex","tel":"+134112312"} - получаем json

// если получаем json
const weReceiveJson = JSON.stringify(persone);
console.log(JSON.parse(weReceiveJson)); // снова получаем объект { name: 'alex', tel: '+134112312' }

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'ANN';
console.log(persone);
//  {
//   name: 'alex',
//   tel: '+134112312',
//   parents: { mom: 'mom', dad: 'dad' }
// }
console.log(clone);
// {
//     name: 'alex',
//     tel: '+134112312',
//     parents: { mom: 'ANN', dad: 'dad' }
//   }