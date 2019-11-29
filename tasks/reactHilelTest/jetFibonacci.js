// Написать функцию, которая будет возвращать нужное число в последовательности фибоначчи
function jetFibonacciRecursion(sequenceNumber) {
  if (sequenceNumber < 2) return sequenceNumber;
  return jetFibonacciRecursion(sequenceNumber - 1) + jetFibonacciRecursion(sequenceNumber - 2);
}

function jetFibonacciMemoization(sequenceNumber) {
  if (sequenceNumber === 0) return 0;
  if (sequenceNumber <= 2) return 1;
  const fibonacciSequence = [1, 1];
  for (let i = 2; i < sequenceNumber; i += 1) {
    fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  }
  return fibonacciSequence[sequenceNumber - 1];
}

function jetFibonacciDynamicLinearSolution(sequenceNumber) {
  let x = 1;
  let y = 0;
  for (let i = 0; i < sequenceNumber; i += 1) {
    x += y;
    y = x - y;
  }
  return y;
}

// export { jetFibonacciRecursion, jetFibonacciMemoization, jetFibonacciDynamicLinearSolution };
