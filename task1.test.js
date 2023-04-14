const stringLength = require('./task1.js');

test('the string is at least 1 character long and not longer than 10 characters', () => {
  const str = 'Hi';
  expect(stringLength(str)).toBeGreaterThanOrEqual(1);
  expect(stringLength(str)).toBeLessThanOrEqual(10);
});

test('the string is at least 1 character long and not longer than 10 characters', () => {
  const str = 'Hi buddy how are you';
  expect(stringLength(str)).toBeGreaterThanOrEqual(1);
  expect(stringLength(str)).toBeLessThanOrEqual(10);
});