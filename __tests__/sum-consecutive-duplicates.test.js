const { sumConsecutiveDuplicates } = require('../katas/sum-consecutive-duplicates');

describe('sumConsecutiveDuplicates()', () => {
  it('returns an empty array when passed an empty array', () => {
    expect(sumConsecutiveDuplicates([])).toEqual([]);
  });
  it('returns an array with one number in it when passed one number in an array', () => {
    const arr = [1];
    const result = sumConsecutiveDuplicates(arr);
    expect(result).toEqual([1]);
  });
  it('returns an array with the sum of two numbers when two numbers the same are passed in', () => {
    const arr = [1, 1];
    const result = sumConsecutiveDuplicates(arr);
    expect(result).toEqual([2]);
  });
  it('takes an an array with two different number and returns the same array', () => {
    const arr = [1, 2];
    const result = sumConsecutiveDuplicates(arr);
    expect(result).toEqual([1, 2]);
  });
  it('takes an array of any length and return the correct result', () => {
    const arr = [1, 1, 2, 2, 3];
    const result = sumConsecutiveDuplicates(arr);
    expect(result).toEqual([2, 4, 3]);
    const arr2 = [1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1];
    const result2 = sumConsecutiveDuplicates(arr2);
    expect(result2).toEqual([2, 2, 4, 2, 3]);
  })
});
