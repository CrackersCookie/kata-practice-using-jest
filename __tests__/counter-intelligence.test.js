const { counterIntelligence } = require('../katas/counter-intelligence');

describe('counterIntelligence', () => {
  it('it takes one letter and returns an X', () => {
    const str = 'Y';
    const result = counterIntelligence(str);
    expect(result).toBe('X');
  });
  it('takes a lowercase letter and returns an upper case X', () => {
    const str = 'v';
    const result = counterIntelligence(str);
    expect(result).toBe('X');
  });
  it('give the correct result for letters at the other end of the alphabet', () => {
    expect(counterIntelligence('a')).toBe('X');
    expect(counterIntelligence('k')).toBe('X');
    expect(counterIntelligence('ND')).toBe('HX');
  });
  it('returns the correct result when passed more than one letter', () => {
    expect(counterIntelligence('BCDY')).toBe('ABCX');
  });
  it('returns the correct result when passed a string with a space in it', () => {
    expect(counterIntelligence('BCD Y')).toBe('ABC X');
  });
  it('returns the correct string when passed a sentence', () => {
    const str = 'NKRRU YCKKZNKGXZ D';
    const expected = 'HELLO SWEETHEART X';
    expect(counterIntelligence(str)).toBe(expected);
  });
  it('returns the correct string when passed a sentence with a coma in it', () => {
    const str = 'ANVNVKNA CX YRLT DY IDLLQRWR XW HXDA FJH QXVN OAXV FXAT, MJAURWP G';
    const expected = 'REMEMBER TO PICK UP ZUCCHINI ON YOUR WAY HOME FROM WORK, DARLING X';
    expect(counterIntelligence(str)).toBe(expected);
  });
  it('returns the correct string when passed a sentence with other characters in it', () => {
    const str = 'ngbk g toik jge :) d';
    const expected = 'HAVE A NICE DAY :) X';
    expect(counterIntelligence(str)).toBe(expected);
  });
});