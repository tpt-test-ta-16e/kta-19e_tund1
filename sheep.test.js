const Sheep = require('./sheep');

describe('Sheep class', () => {
    describe('.getName', () => {
        test(`create Sheep with name Dolly, check that name is Dolly`, () => {
            const s = new Sheep('Dolly');
            expect(s.getName()).toBe('Dolly');
        });
        test(`create Sheep with name Sally, check that name is Sally`, () => {
            const s = new Sheep('Sally');
            expect(s.getName()).toBe('Sally');
        });
    });
    describe('.setName', () => {
        test(`create Sheep with name Sally, change name to Dolly, check name is now Dolly`, () => {
            const s = new Sheep("Dolly");
            expect(s.getName()).toBe("Dolly");
            s.setName('Sally');
            expect(s.getName()).toBe('Sally');
        });
    });

});