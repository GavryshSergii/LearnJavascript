/*
  Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
  Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода
  Object.values и цикла for..of.
  Если объект salaries пуст, то результат должен быть 0.
 */
function sumSalaries(salaries) {
  let sum = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const item of Object.values(salaries)) {
    sum += item;
  }
  return sum;
}

/*
  Напишите функцию count(obj), которая возвращает количество свойств объекта:
  Постарайтесь сделать код как можно короче.
  P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
 */
function count(obj) {
  return Object.keys(obj).length;
}
