const Sheep = require('./sheep');

const l = new Sheep('dolly');

console.log('lammas name is "%s"!', l.getName());
console.log('name=dolly', l.getName() === 'dolly');

l.setName('shawn');
console.log('lammas name is now "%s"!', l.getName());
console.log('name=shawn', l.getName() === 'shawn');

test('create lammas with name dolly, check that name is dolly', () => {

});
