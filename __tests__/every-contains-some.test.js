const { every, contains, some } = require('../katas/every-contains-some');

describe('every', () => {
  it('returns false if passed an empty array', () => {
    const list = [];
    const result = every(list);
    expect(result).toBe(false);
  });
  it('takes a function and returns true if single value passes truth test', () => {
    const list = [2];
    const predicate = function (num) {
      return num % 2 === 0;
    };
    const result = every(list, predicate);
    expect(result).toBe(true);
  });
  it('returns true if two values are passed and one of these equates to false in the predicate', () => {
    const list = [2, 3];
    const predicate = function (num) {
      return num % 2 === 0;
    };
    const result = every(list, predicate);
    expect(result).toBe(false);
  });
  it('only calls the function once and breaks out when a false value is found', () => {
    const list = [2, 3, 2];
    const predicate = function (num) {
      return num % 2 === 0;
    };
    const myMock = jest.fn(predicate);
    every(list, myMock);
    expect(myMock.mock.calls.length).toEqual(2);
  });
  it('calls the function the second time with the second argument', () => {
    const list = [2, 3, 2];
    const predicate = function (num) {
      return num % 2 === 0;
    };
    const myMock = jest.fn(predicate);
    every(list, myMock);
    expect(myMock.mock.calls[1][0]).toBe(3)
  })
});

describe('contains', () => {
  it('', () => {

  });
});

describe('some', () => {
  it('', () => {

  });
});