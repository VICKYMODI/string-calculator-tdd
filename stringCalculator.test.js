// stringCalculator.test.js
const add = require('./stringCalculator');

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('should return the number for a single number', () => {
    expect(add('1')).toBe(1);
    expect(add('42')).toBe(42);
  });

  test('should return the sum of two numbers', () => {
    expect(add('1,2')).toBe(3);
    expect(add('10,20')).toBe(30);
  });
});