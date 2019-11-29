// Написать функцию, которая принимает массив как аргумент, и возвращает сумму всех цифр.
function sumUseReduce(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

function sumUseForEach(arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
}

// export { sumUseReduce, sumUseForEach };
