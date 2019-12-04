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
