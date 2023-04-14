const capitalize = require('./task4.js');

describe('Return string with the first character capitalized', () => {
  test('word => Word', () => {
    const str = 'word';
    expect(capitalize(str)).toBe('Word');
  });
});
