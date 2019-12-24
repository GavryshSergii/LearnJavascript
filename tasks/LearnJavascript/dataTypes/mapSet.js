/*
  Создайте функцию uniqueSet(arr), которая вернёт массив уникальных, не повторяющихся значений
  массива arr.
 */
function uniqueSet(arr) {
  const set = new Set(arr).keys()
  return Array.from(set);
}

/*
  Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
  Например:

  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

  Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
 */
function aclean(arr){

}
