// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
  if (Object.keys(obj).length !== 0) {
    return false;
  }
  return true;
}

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
function multiplyNumeric(object) {
  Object.keys(object)
    .forEach((element) => {
      if (typeof object[element] === 'number') {
        // eslint-disable-next-line no-param-reassign
        object[element] *= 2;
      }
    });
}

/*
Создайте объект calculator (калькулятор) с тремя методами:
  read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
  sum() (суммировать) возвращает сумму сохранённых значений.
  mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/

const calculator = {
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

//
// export default {
//   isEmpty,
// };
