const century = require('../src/centuryFromYear');

describe('century',() => {
    it('returns what centuary a given year is in',() => {
        expect(century(1852)).toEqual(19);
        expect(century(1989)).toEqual(20);
    
    })
});