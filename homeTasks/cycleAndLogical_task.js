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
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

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

if (personalMovieDB.count < 10) {
  console.log("Вы смотрите мало фильов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Классический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("КИноман!");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);

let i = 0; // Инициализация счетчика

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
