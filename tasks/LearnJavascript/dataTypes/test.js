beforeEach(() => {
  sinon.stub(window, 'prompt');
});

afterEach(() => {
  prompt.restore();
});

describe('readNumber', () => {
  it('if a number, returns it', () => {
    prompt.returns('123');
    assert.strictEqual(readNumber(), 123);
  });

  it('if 0, returns it', () => {
    prompt.returns('0');
    assert.strictEqual(readNumber(), 0);
  });

  it('continues the loop until meets a number', () => {
    prompt.onCall(0).returns('not a number');
    prompt.onCall(1).returns('not a number again');
    prompt.onCall(2).returns('1');
    assert.strictEqual(readNumber(), 1);
  });

  it('if an empty line, returns null', () => {
    prompt.returns('');
    assert.isNull(readNumber());
  });

  it('if cancel, returns null', () => {
    prompt.returns(null);
    assert.isNull(readNumber());
  });
});

// strings
describe('ucFirst', () => {
  it('Переводит первый символ в верхний регистр', () => {
    assert.strictEqual(ucFirst('john'), 'John');
  });

  it('Не умирает на пустых строках', () => {
    assert.strictEqual(ucFirst(''), '');
  });
});

describe('truncate', () => {
  it('усекает строку до заданной длины (включая многоточие)', () => {
    assert.equal(
      truncate('Вот, что мне хотелось бы сказать на эту тему:', 20),
      'Вот, что мне хотело…',
    );
  });

  it('не меняет и так короткие строки', () => {
    assert.equal(
      truncate('Всем привет!', 20),
      'Всем привет!',
    );
  });
});

describe('extractCurrencyValue', () => {
  it('возвращает для строки $120 число 120', () => {
    assert.strictEqual(extractCurrencyValue('$120'), 120);
  });
});

describe('getMaxSubSum', () => {
  it('maximal subsum of [1, 2, 3] equals 6', () => {
    assert.equal(getMaxSubSum([1, 2, 3]), 6);
  });

  it('maximal subsum of [-1, 2, 3, -9] equals 5', () => {
    assert.equal(getMaxSubSum([-1, 2, 3, -9]), 5);
  });

  it('maximal subsum of [-1, 2, 3, -9, 11] equals 11', () => {
    assert.equal(getMaxSubSum([-1, 2, 3, -9, 11]), 11);
  });

  it('maximal subsum of [-2, -1, 1, 2] equals 3', () => {
    assert.equal(getMaxSubSum([-2, -1, 1, 2]), 3);
  });

  it('maximal subsum of [100, -9, 2, -3, 5] equals 100', () => {
    assert.equal(getMaxSubSum([100, -9, 2, -3, 5]), 100);
  });

  it('maximal subsum of [] equals 0', () => {
    assert.equal(getMaxSubSum([]), 0);
  });

  it('maximal subsum of [-1] equals 0', () => {
    assert.equal(getMaxSubSum([-1]), 0);
  });

  it('maximal subsum of [-1, -2] equals 0', () => {
    assert.equal(getMaxSubSum([-1, -2]), 0);
  });

  it('maximal subsum of [2, -8, 5, -1, 2, -3, 2] equals 6', () => {
    assert.equal(getMaxSubSum([2, -8, 5, -1, 2, -3, 2]), 6);
  });
});

describe('camelize', () => {
  it('leaves an empty line as is', () => {
    assert.equal(camelize(''), '');
  });

  it('turns background-color into backgroundColor', () => {
    assert.equal(camelize('background-color'), 'backgroundColor');
  });

  it('turns list-style-image into listStyleImage', () => {
    assert.equal(camelize('list-style-image'), 'listStyleImage');
  });

  it('turns -webkit-transition into WebkitTransition', () => {
    assert.equal(camelize('-webkit-transition'), 'WebkitTransition');
  });

  it('turns list-s-image into listSImage', () => {
    assert.equal(camelize('list-s-image'), 'listSImage');
  });
});

describe('filterRange', () => {
  it('returns the filtered values', () => {
    const arr = [5, 3, 8, 1];

    const filtered = filterRange(arr, 1, 4);

    assert.deepEqual(filtered, [3, 1]);
  });

  it("doesn't change the array", () => {
    const arr = [5, 3, 8, 1];

    const filtered = filterRange(arr, 1, 4);

    assert.deepEqual(arr, [5, 3, 8, 1]);
  });
});

describe('filterRangeInPlace', () => {
  it('returns the filtered values', () => {
    const arr = [5, 3, 8, 1];

    filterRangeInPlace(arr, 1, 4);

    assert.deepEqual(arr, [3, 1]);
  });

  it("doesn't return anything", () => {
    assert.isUndefined(filterRangeInPlace([1, 2, 3], 1, 4));
  });
});

describe('Calculator', () => {
  let calculator;

  before(() => {
    calculator = new Calculator();
  });

  it('calculate(12 + 34) = 46', () => {
    assert.equal(calculator.calculate('12 + 34'), 46);
  });

  it('calculate(34 - 12) = 22', () => {
    assert.equal(calculator.calculate('34 - 12'), 22);
  });

  it('add multiplication: calculate(2 * 3) = 6', () => {
    calculator.addMethod('*', (a, b) => a * b);
    assert.equal(calculator.calculate('2 * 3'), 6);
  });

  it('add power: calculate(2 ** 3) = 8', () => {
    calculator.addMethod('**', (a, b) => a ** b);
    assert.equal(calculator.calculate('2 ** 3'), 8);
  });
});

describe('unique', () => {
  it('removes non-unique elements', () => {
    const strings = ['a', 'b', 'c', 'a', 'a', 'c', 'b', 'x', ':-O'];
    assert.deepEqual(unique(strings), ['a', 'b', 'c', 'x', ':-O']);
  });

  it('does not change the source array', () => {
    const strings = ['a', 'b', 'c', 'd'];
    unique(strings);
    assert.deepEqual(strings, ['a', 'b', 'c', 'd']);
  });
});

describe('uniqueSet', () => {
  it('removes non-unique elements', () => {
    const strings = ['a', 'b', 'c', 'a', 'a', 'c', 'b', 'x', ':-O'];
    assert.deepEqual(uniqueSet(strings), ['a', 'b', 'c', 'x', ':-O']);
  });

  it('does not change the source array', () => {
    const strings = ['a', 'b', 'c', 'd'];
    uniqueSet(strings);
    assert.deepEqual(strings, ['a', 'b', 'c', 'd']);
  });
});

function intersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

describe('aclean', () => {
  it('returns exactly 1 word from each anagram set', () => {
    const arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

    const result = aclean(arr);
    assert.equal(result.length, 3);

    assert.equal(intersection(result, ['nap', 'PAN']).length, 1);
    assert.equal(intersection(result, ['teachers', 'cheaters', 'hectares']).length, 1);
    assert.equal(intersection(result, ['ear', 'era']).length, 1);
  });

  it('is case-insensitive', () => {
    const arr = ['era', 'EAR'];
    assert.equal(aclean(arr).length, 1);
  });
});

//destructuring
describe('topSalary', () => {
  it('returns top-paid person', () => {
    let salaries = {
      John: 100,
      Pete: 300,
      Mary: 250,
    };

    assert.equal(topSalary(salaries), 'Pete');
  });

  it('returns null for the empty object', () => {
    assert.isNull(topSalary({}));
  });
});

// Date
describe('getLocalDay возвращает "европейский" день недели', () => {
  it('3 января 2014 года - пятница', () => {
    assert.equal(getLocalDay(new Date(2014, 0, 3)), 5);
  });

  it('4 января 2014 года - суббота', () => {
    assert.equal(getLocalDay(new Date(2014, 0, 4)), 6);
  });

  it('5 января 2014 года - воскресенье', () => {
    assert.equal(getLocalDay(new Date(2014, 0, 5)), 7);
  });

  it('6 января 2014 года - понедельник', () => {
    assert.equal(getLocalDay(new Date(2014, 0, 6)), 1);
  });

  it('7 января 2014 года - вторник', () => {
    assert.equal(getLocalDay(new Date(2014, 0, 7)), 2);
  });

  it('8 января 2014 года - среда', () => {
    assert.equal(getLocalDay(new Date(2014, 0, 8)), 3);
  });

  it('9 января 2014 года - четверг', () => {
    assert.equal(getLocalDay(new Date(2014, 0, 9)), 4);
  });
});

describe('getWeekDay', () => {
  it('3 января 2014 года - пятница', () => {
    assert.equal(getWeekDay(new Date(2014, 0, 3)), 'ПТ');
  });

  it('4 января 2014 года - суббота', () => {
    assert.equal(getWeekDay(new Date(2014, 0, 4)), 'СБ');
  });

  it('5 января 2014 года - воскресенье', () => {
    assert.equal(getWeekDay(new Date(2014, 0, 5)), 'ВС');
  });

  it('6 января 2014 года - понедельник', () => {
    assert.equal(getWeekDay(new Date(2014, 0, 6)), 'ПН');
  });

  it('7 января 2014 года - вторник', () => {
    assert.equal(getWeekDay(new Date(2014, 0, 7)), 'ВТ');
  });

  it('8 января 2014 года - среда', () => {
    assert.equal(getWeekDay(new Date(2014, 0, 8)), 'СР');
  });

  it('9 января 2014 - четверг', () => {
    assert.equal(getWeekDay(new Date(2014, 0, 9)), 'ЧТ');
  });
});

describe('getDateAgo', () => {
  it('1 день до 02.01.2015 -> день 1', () => {
    assert.equal(getDateAgo(new Date(2015, 0, 2), 1), 1);
  });

  it('2 дня до 02.01.2015 -> день 31', () => {
    assert.equal(getDateAgo(new Date(2015, 0, 2), 2), 31);
  });

  it('100 дней до 02.01.2015 -> день 24', () => {
    assert.equal(getDateAgo(new Date(2015, 0, 2), 100), 24);
  });

  it('365 дней до 02.01.2015 -> день 2', () => {
    assert.equal(getDateAgo(new Date(2015, 0, 2), 365), 2);
  });

  it('переданный объект date не модифицируется', () => {
    let date = new Date(2015, 0, 2);
    let dateCopy = new Date(date);
    getDateAgo(dateCopy, 100);
    assert.equal(date.getTime(), dateCopy.getTime());
  });
});
