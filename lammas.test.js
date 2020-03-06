const Sheep = require('./sheep');

test('create Lammas with name dolly, check that name is dolly', () => {
  const l = new Sheep('dolly');
  expect(l.getName()).toBe('dolly');
});
