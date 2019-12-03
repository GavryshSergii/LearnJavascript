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
    this.a = +prompt('Введите первое число', 0);
    this.b = +prompt('Введите второе число', 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

/*
  Создайте объект ladder (лестница) с
    полем step счетчик ступенек
    тремя методами
    up() (вверх) увеличивает счетчик на 1 ступеньку
    down() (вниз) уменьшает счетчик на 1 ступеньку
    showStep() (показать) возвращает актуальный счетчик
*/
const ladder = {
  step: 0,
  up() {
    this.step += 1;
    return this;
  },
  down() {
    this.step -= 1;
    return this;
  },
  showStep() {
    // eslint-disable-next-line no-undef
    alert(this.step);
  },
};

/*
  Создать функцию-конструктор Calculator, который создаёт объекты с тремя методами:
    read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
    sum() возвращает сумму введённых свойств.
    mul() возвращает произведение введённых свойств.
 */
function Calculator() {
  this.read = () => {
    this.a = +prompt('Введите первое число', 0);
    this.b = +prompt('Введите второе число', 0);
  };
  this.sum = () => this.a + this.b;
  this.mul = () => this.a * this.b;
}

/*
  Напишите функцию-конструктор Accumulator(startingValue).
  Объект, который она создаёт, должен уметь следующее:
    Хранить «текущее значение» в свойстве value.
    Начальное значение устанавливается в аргументе конструктора startingValue.
    Метод read() использует prompt для получения числа и прибавляет его к свойству value.
    Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при
    вызовах метода read(), с учётом начального значения startingValue.
*/
function Accumulator(startingValue) {
  this.value = +startingValue;
  this.read = () => {
    let addedValue = +prompt('Введите добавляемое число', 0);
    if (Number.isNaN(addedValue)) {
      addedValue = 0;
    }
    this.value += addedValue;
  };
}

//
// export default {
//   isEmpty,
// };
