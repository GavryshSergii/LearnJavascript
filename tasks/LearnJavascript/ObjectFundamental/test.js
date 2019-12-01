// import { isEmpty } from './objects';

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
    assert.equal(menu.title, "My menu");
  });

  it('returns nothing', () => {
    assert.isUndefined( multiplyNumeric({}) );
  });
});
