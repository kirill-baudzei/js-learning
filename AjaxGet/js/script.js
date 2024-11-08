'use strict'

const inputPln = document.querySelector('#pln'),
      inputEur = document.querySelector('#eur');

inputPln.addEventListener('change', () => { // событие change - когда инпут уходит из фокуса
    const request = new XMLHttpRequest();
    request.open('GET', 'js/current.json')
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputEur.value = (+inputPln.value / data.current.eur).toFixed(2);

        } else {
            inputEur.value = "Что-то пошло не так, попробуйте позже";
        }
    });

    // status - сама цифра ответа по запросу
    // statusText - текст ответа сервера
    // response - само тело ответа сервера
    // readyState - текущее состояние запроса 
}); 


