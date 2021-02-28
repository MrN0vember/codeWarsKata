const repeatStr = require('../src/stringRepeat');

describe('repeatStr', () => {
    it('which repeats the given string x number of times', () => {
        expect(repeatStr(3, 'Hi')).toBe("HiHiHi");
        expect(repeatStr(5, 'aBc')).toBe("aBcaBcaBcaBcaBc");
        expect(repeatStr(3,'Please stand up ' )).toBe('Please stand up Please stand up Please stand up ');
    })
});