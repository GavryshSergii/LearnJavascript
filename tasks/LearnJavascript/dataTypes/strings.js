/*
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
*/
function ucFirst(str) {
  if (str.length !== 0) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return '';
}

/*
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она
превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо,
усечённая строка.
*/
function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return `${str.slice(0, maxLength - 1)}…`;
  }
  return str;
}

/*
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое
значение и возвращать его.
*/
function extractCurrencyValue(str) {
  return Number(str.slice(1));
}
