const Calculator = require('./task3.js');

describe('Mathematical operations', () => {
  describe('Sum', () => {
    test('1 + 3 = 4', () => {
      const calc = new Calculator(1, 3);
      expect(calc.sum()).toBe(4);
    });
    test('15 + 10 = 25', () => {
      const calc = new Calculator(15, 10);
      expect(calc.sum()).toBe(25);
    });
    test('9 + 7 = 16', () => {
      const calc = new Calculator(9, 7);
      expect(calc.sum()).toBe(16);
    });
  });

  describe('Subtract', () => {
    test('1 - 3 = -4', () => {
      const calc = new Calculator(1, 3);
      expect(calc.subtract()).toBe(-2);
    });
    test('15 - 10 = 5', () => {
      const calc = new Calculator(15, 10);
      expect(calc.subtract()).toBe(5);
    });
    test('9 - 7 = 2', () => {
      const calc = new Calculator(9, 7);
      expect(calc.subtract()).toBe(2);
    });
  });

  describe('Multiply', () => {
    test('1 * 3 = 3', () => {
      const calc = new Calculator(1, 3);
      expect(calc.multiply()).toBe(3);
    });
    test('15 * 10 = 150', () => {
      const calc = new Calculator(15, 10);
      expect(calc.multiply()).toBe(150);
    });
    test('9 * 7 = 63', () => {
      const calc = new Calculator(9, 7);
      expect(calc.multiply()).toBe(63);
    });
  });

  describe('Divide', () => {
    test('6 / 3 = 2', () => {
      const calc = new Calculator(6, 3);
      expect(calc.divide()).toBe(2);
    });
    test('15 / 10 = 1.5', () => {
      const calc = new Calculator(15, 10);
      expect(calc.divide()).toBe(1.5);
    });
    test('1 / 4 = 0.25', () => {
      const calc = new Calculator(1, 4);
      expect(calc.divide()).toBe(0.25);
    });
  });
});
