const { findMissingLetter } = require('../katas/find-missing-letter');

describe('findMissingLetter', () => {
  it('returns an empty string when passed an empty array', () => {
    expect(findMissingLetter([])).toBe('');
  })
  it('returns a string with the missing letter when passed an array of length 2 - which should be 3', () => {
    expect(findMissingLetter(['A', 'C'])).toBe('B');
  })
  it('returns the correct letter when passed a longer uppercase string', () => {
    const arr = ['A', 'B', 'C', 'E'];
    expect(findMissingLetter(arr)).toBe('D');
  })
  it('returns the correct letter when passed a lower case string', () => {
    const arr = ['e', 'f', 'g', 'i'];
    expect(findMissingLetter(arr)).toBe('h');
  })
});