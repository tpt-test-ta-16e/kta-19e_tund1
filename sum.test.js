const sum = require('./sum');

test('sum 1 + 2 equals 3', () => {
  const value = sum(1, 2);
  expect(value).toBe(3);
});

test('sum 1 + 4 equals 5', () => {
  expect(sum(1, 4)).toBe(5);
});

const testCases = [
  [1, 2, 3],
  [5, 4, 9],
  [10, 100, 110],
  [11, 101, 112],
  [-5, 9, 4],
  [5, -9, -4],
  [0, 0, 0],
  [-5, -4, -9],
];

// https://jestjs.io/docs/en/api#testeachtablename-fn-timeout
test.each(testCases)('sum(%d, %d) => %d', (a, b, expected) => {
  expect(sum(a, b)).toBe(expected);
});
