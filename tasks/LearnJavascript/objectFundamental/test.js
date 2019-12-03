/* eslint-disable no-undef */
describe('isEmpty', () => {
  it('возвращает true для пустого объекта', () => {
    assert.isTrue(isEmpty({}));
  });

  it('возвращает false, если свойство существует', () => {
    assert.isFalse(isEmpty({
      anything: false,
    }));
  });
});

describe('multiplyNumeric', () => {
  it('умножаем все числовые свойства на 2', () => {
    const menu = {
      width: 200,
      height: 300,
      title: 'My menu',
    };
    multiplyNumeric(menu);
    assert.equal(menu.width, 400);
    assert.equal(menu.height, 600);
    assert.equal(menu.title, 'My menu');
  });

  it('returns nothing', () => {
    assert.isUndefined(multiplyNumeric({}));
  });
});

describe('калькулятор', () => {
  context('Когда 2 и 3 введены', () => {
    beforeEach(() => {
      sinon.stub(window, 'prompt');

      prompt.onCall(0).returns('2');
      prompt.onCall(1).returns('3');

      calculator.read();
    });

    afterEach(() => {
      prompt.restore();
    });

    it('Сумма равна 5', () => {
      assert.equal(calculator.sum(), 5);
    });

    it('Произведение равно 6', () => {
      assert.equal(calculator.mul(), 6);
    });
  });
});

describe('Лестница', () => {
  before(() => {
    window.alert = sinon.stub(window, 'alert');
  });

  beforeEach(() => {
    ladder.step = 0;
  });

  it('up() должен возвращать this', () => {
    assert.equal(ladder.up(), ladder);
  });

  it('down() должен возвращать  this', () => {
    assert.equal(ladder.down(), ladder);
  });

  it('showStep() должен вызывать alert', () => {
    ladder.showStep();
    assert(alert.called);
  });

  it('up() должен увеличивать ступеньки', () => {
    assert.equal(ladder.up().up().step, 2);
  });

  it('down() должен уменьшать ступеньки', () => {
    assert.equal(ladder.down().step, -1);
  });

  it('down().up().up().up() ', () => {
    assert.equal(ladder.down().up().up().up().step, 2);
  });

  after(() => {
    ladder.step = 0;
    alert.restore();
  });
});

describe('calculator', () => {
  let calculator;
  before(() => {
    sinon.stub(window, 'prompt');

    prompt.onCall(0).returns('2');
    prompt.onCall(1).returns('3');

    calculator = new Calculator();
    calculator.read();
  });

  it('when 2 and 3 are entered, the sum is 5', () => {
    assert.equal(calculator.sum(), 5);
  });

  it('when 2 and 3 are entered, the product is 6', () => {
    assert.equal(calculator.mul(), 6);
  });

  after(() => {
    prompt.restore();
  });
});

describe('Accumulator', () => {

  beforeEach(() => {
    sinon.stub(window, 'prompt');
  });

  afterEach(() => {
    prompt.restore();
  });

  it('initial value is the argument of the constructor', () => {
    const accumulator = new Accumulator(1);

    assert.equal(accumulator.value, 1);
  });

  it('after reading 0, the value is 1', () => {
    const accumulator = new Accumulator(1);
    prompt.returns('0');
    accumulator.read();
    assert.equal(accumulator.value, 1);
  });

  it('after reading 1, the value is 2', () => {
    const accumulator = new Accumulator(1);
    prompt.returns('1');
    accumulator.read();
    assert.equal(accumulator.value, 2);
  });
});
