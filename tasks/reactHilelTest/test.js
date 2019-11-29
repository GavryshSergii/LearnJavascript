// import { describe, it } from 'https://cdnjs.cloudflare.com/ajax/libs/mocha/2.1.0/mocha.js';
// import { assert } from 'https://cdnjs.cloudflare.com/ajax/libs/chai/2.0.0/chai.js';

// import { sumUseReduce, sumUseForEach } from './sum';
// import objToArrayUseKeysMap from './objToArray';
// import {
//   jetFibonacciRecursion,
//   jetFibonacciMemoization,
//   jetFibonacciDynamicLinearSolution,
// } from './jetFibonacci';

describe('sum', () => {
  const arrFunc = [sumUseReduce, sumUseForEach];

  arrFunc.forEach((func) => {
    it(`функция ${func.name} суммирует елементы массива`, () => {
      assert.equal(func([2, 3]), 5);
    });
  });
});

describe('objToArray', () => {
  const arrFunc = [objToArrayUseKeysMap];
  const arrParameters = [
    { a: 3, b: 5 },
    { c: 4, f: 16, g: 44 },
    { r: 6, k: 15, 4: 6 },
    { 4: 16, 24: 13, g: -16 },
    { c: 5, f: 19, g: 33 },
  ];
  const arrExpected = [
    [['a', 3], ['b', 5]],
    [['c', 4], ['f', 16], ['g', 44]],
    [['4', 6], ['r', 6], ['k', 15]],
    [['4', 16], ['24', 13], ['g', -16]],
    [['c', 5], ['f', 19], ['g', 33]],
  ];

  const objToString = (obj) => JSON.stringify(obj, null, ' ');

  arrFunc.forEach((func) => {
    describe(`функция ${func.name} преобразует объект в массив, который содержит массив ключа и значения`,
      () => {
        for (let i = 0; i < arrParameters.length; i += 1) {
          it(`объект ${objToString(arrParameters[i])} массив ${objToString(arrExpected[i])}`,
            () => {
              const result = func(arrParameters[i]);
              const expected = arrExpected[i];
              assert.deepEqual(result, expected);
            });
        }
      });
  });
});

describe('Функции возвращают нужное число в последовательности фибоначчи', () => {
  const arrFunc = [
    jetFibonacciRecursion,
    jetFibonacciMemoization,
    jetFibonacciDynamicLinearSolution,
  ];
  const arrParameters = [0, 1, 2, 3, 4, 5, 9, 11, 16, 20];
  const arrExpected = [0, 1, 1, 2, 3, 5, 34, 89, 987, 6765];

  arrFunc.forEach((func) => {
    describe(`функция ${func.name}`, () => {
      for (let i = 0; i < arrParameters.length; i += 1) {
        it(`номер последовательности ${arrParameters[i]} ожидается ${arrExpected[i]
        } возвращается функцией ${func(arrParameters[i])}`, () => {
          const result = func(arrParameters[i]);
          const expected = arrExpected[i];
          assert.equal(result, expected);
        });
      }
    });
  });
});
