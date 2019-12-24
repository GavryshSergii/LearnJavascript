/*
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
*/
function getMaxSubSum(arr) {
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    currentSum += arr[i];
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum < 0) currentSum = 0;
  }
  return maxSum;
}

/*
  Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в
  «myShortString».
  То есть дефисы удаляются, а все слова после них получают заглавную букву.
 */
function camelize(str) {
  const words = str.split('-');
  const wordsUppercase = words.map((item, index) => {
    if ((index !== 0) && (item.length !== 0)) {
      return item[0].toUpperCase() + item.slice(1);
    }
    return item;
  });
  return wordsUppercase.join('');
}

function camelize2(str) {
  return str
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
    // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
    // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)),
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

/*
  Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между
  a и b и отдаёт массив этих элементов.
  Функция должна возвращать новый массив и не изменять исходный.
 */
function filterRange(arr, a, b) {
  return arr.filter((item) => (item >= a) && (item <= b));
}

/*
  Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него
  все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
  Функция должна изменять принимаемый массив и ничего не возвращать.
 */
function filterRangeInPlace(arr, a, b) {
  arr.forEach((item, index) => {
    if ((item < a) || (item > b)) {
      arr.splice(index, 1);
    }
  });
}

/*
  Нужно получить отсортированную копию, но оставить arr неизменённым.
  Создайте функцию copySorted(arr), которая будет возвращать такую копию.
*/
function copySorted(arr) {
  return arr.slice().sort();
}

/*
  Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
  Задание состоит из двух частей.
  Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате
  «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать
  плюс + и минус -.
  Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
  Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
  Например, давайте добавим умножение *, деление / и возведение в степень **:

  let powerCalc = new Calculator;
  powerCalc.addMethod("*", (a, b) => a * b);
  powerCalc.addMethod("/", (a, b) => a / b);
  powerCalc.addMethod("**", (a, b) => a ** b);
  let result = powerCalc.calculate("2 ** 3");
  alert( result ); // 8
 */
function Calculator() {
  this.methods = {
    '+': (a, b) => (a + b),
    '-': (a, b) => (a - b),
  };

  this.calculate = function (str) {
    const param = str.split(' ');
    const a = Number(param[0]);
    const b = Number(param[2]);
    const op = param[1];

    if ((!this.methods[op]) || (Number.isNaN(a)) || (Number.isNaN(b))) {
      return NaN;
    }

    const method = this.methods[op];
    return method(a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

/*
  Пусть arr – массив строк.
  Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы
  arr.
 */
function unique(arr) {
  const uniqueArr = [];
  arr.forEach((item) => {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  });
  return uniqueArr;
}
