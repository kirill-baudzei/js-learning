/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

// Код возьмите из предыдущего домашнего задания
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// Добавляем использование функций (перенесли все в функции и сделали их вызов)
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Последний просмотренный фильм", ""),
      b = prompt("Оцените его баллом", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 10) {
      personalMovieDB.movies[a] = b;
      console.log("Done!");
    } else {
      console.log("Error");
      i--;
    }
  }
}

rememberMyFilms();

function detectLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Вы смотрите мало фильов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("КИноман!");
  } else {
    console.log("Произошла ошибка");
  }
}

detectLevel();

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Функция showMyDb(hidden) принимает параметр hidden, который может быть либо true, либо false.

// Если hidden — false, база данных открыта, и функция выводит объект personalMovieDB в консоль.
// Если hidden — true, база данных скрыта, и функция ничего не выводит.
function showMyDb(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDb(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш любимый жанр под номером ${i}`,
      ""
    );
  }
}

writeYourGenres();

console.log(personalMovieDB);

// let i = 0; // Инициализация счетчика

// while (i < 2) { // Условие цикла
//   const a = prompt("Последний просмотренный фильм", ""),
//         b = prompt("Оцените его баллом", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 10) {
//     personalMovieDB.movies[a] = b;
//     console.log("Done!");
//     i++; // Увеличиваем счетчик только если данные введены корректно
//   } else {
//     console.log("Error");
//   }
// }
