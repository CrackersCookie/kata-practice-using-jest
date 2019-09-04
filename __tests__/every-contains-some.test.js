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
  it('returns a boolean', () => {
    const list = [];
    const result = contains(list, 0);
    expect(result).toBe(false);
  })
  it('returns true if one matching number is in the array', () => {
    const list = [4];
    const value = 4;
    const result = contains(list, value);
    expect(result).toBe(true);
  })
  it('returns true if two values are given in an array - the matching value at index 1', () => {
    const list = [1, 3];
    const value = 3
    const result = contains(list, value);
    expect(result).toBe(true)
  })
});

describe('some', () => {
  it('returns false if passed an empty array', () => {
    const list = [];
    const result = some(list);
    expect(result).toBe(false);
  });
  it('takes a function and returns true if single value passes truth test', () => {
    const list = [2];
    const predicate = function (num) {
      return num % 2 === 0;
    };
    const result = some(list, predicate);
    expect(result).toBe(true);
  });
  it('returns true if two values are passed in and the second one is true', () => {
    const list = [3, 2];
    const predicate = function (num) {
      return num % 2 === 0;
    };
    const result = some(list, predicate);
    expect(result).toBe(true);
  });
  it('returns false if no matches are found', () => {
    const list = [1, 3, 5];
    const predicate = function (num) {
      return num % 2 === 0;
    };
    const result = some(list, predicate);
    expect(result).toBe(false)
  })
  it('only calls the function once and breaks out when a true value is found', () => {
    const list = [1, 2, 2];
    const predicate = function (num) {
      return num % 2 === 0;
    };
    const myMock = jest.fn(predicate);
    some(list, myMock);
    expect(myMock.mock.calls.length).toEqual(2);
  });
});