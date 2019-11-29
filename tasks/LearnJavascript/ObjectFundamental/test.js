import { isEmpty } from './objects';

describe("isEmpty", () => {
  it("возвращает true для пустого объекта", () => {
    assert.isTrue(isEmpty({}));
  });

  it("возвращает false, если свойство существует", () => {
    assert.isFalse(isEmpty({
      anything: false,
    }));
  });
});
