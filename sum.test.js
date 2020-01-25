const sum = require('./sum');

test('sum 1 + 2 equals 3', () => {
    const value = sum(1, 2);
    expect(value).toBe(3);
});

test('sum 1 + 4 equals 5', () => {
    expect(sum(1, 4)).toBe(5);
});