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

//strings
describe("ucFirst", () => {
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
      'Вот, что мне хотело…'
    );
  });

  it('не меняет и так короткие строки', () => {
    assert.equal(
      truncate('Всем привет!', 20),
      'Всем привет!'
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
