const getCount = require('../src/vowelCount');

describe('getCount', () => {
    it('returns the number of vowels in a given string', () => {
        expect(getCount('abracadabra')).toEqual(5);
        expect(getCount('i owe you how much')).toEqual(7);
        expect(getCount('jgy')).toEqual(0);
    })
});