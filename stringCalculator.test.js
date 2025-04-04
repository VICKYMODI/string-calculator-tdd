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

  test('should handle an unknown amount of numbers', () => {
    expect(add('1,2,3,4,5')).toBe(15);
    expect(add('10,20,30,40')).toBe(100);
  });

  test('should handle new line as delimiter between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
    expect(add('10\n20\n30')).toBe(60);
  });

  test('should support different delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
    expect(add('//.\n1.2.3')).toBe(6);
  })

  test('should throw an exception for negative numbers', () => {
    expect(() => add('-1,2')).toThrow('Negatives not allowed: -1');
    expect(() => add('1,-2,-3')).toThrow('Negatives not allowed: -2, -3');
  });

  test('should ignore numbers greater than 1000', () => {
    expect(add('1001,2')).toBe(2);
    expect(add('1000,1001,2')).toBe(1002);
  });

  test('should handle delimiters of any length', () => {
    expect(add('//[***]\n1***2***3')).toBe(6);
    expect(add('//[##]\n1##2##3')).toBe(6);
  });

  test('should handle multiple delimiters', () => {
    expect(add('//[*][%]\n1*2%3')).toBe(6);
    expect(add('//[##][&&]\n1##2&&3')).toBe(6);
  });

  //multiple delimiter with multiple character
  test('should handle multiple delimiters with multiple characters', () => {
    expect(add('//[**][%%]\n1**2%%3')).toBe(6);
    expect(add('//[###][&&&]\n1###2&&&3')).toBe(6);
  });

});