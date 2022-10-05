const {add, subtract, divide, multiply, calculator} = require('./calculator');

describe('add', () => {
  calculator(2, 5);
  test('not empty', () => {
    expect(add(2,5)).not.toBeNull();
  })
  test('answer', () => {
    expect(add(2,5)).toBe(7);
  })
  test('notdefined', () => {
    expect(add(2,5)).not.toBeUndefined();
  })
});

describe('subtract', () => {
  calculator(5, 2);
  test('not empty', () => {
    expect(subtract(5,2)).not.toBeNull();
  })
  test('answer', () => {
    expect(subtract(5,2)).toBe(3);
  })
  test('notdefined', () => {
    expect(subtract(5,2)).not.toBeUndefined();
  })
});

describe('multiply', () => {
  calculator(5, 2);
  test('not empty', () => {
    expect(multiply(5,2)).not.toBeNull();
  })
  test('answer', () => {
    expect(multiply(5,2)).toBe(10);
  })
  test('notdefined', () => {
    expect(multiply(5,2)).not.toBeUndefined();
  })
});

describe('divide', () => {
  calculator(6, 2);
  test('not empty', () => {
    expect(divide(6,2)).not.toBeNull();
  })
  test('answer', () => {
    expect(divide(6,2)).toBe(3);
  })
  test('notdefined', () => {
    expect(divide(6,2)).not.toBeUndefined();
  })
});
