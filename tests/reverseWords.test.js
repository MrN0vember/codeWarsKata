const reverseWords = require('../src/reverseWords');

describe('reverseWords', () => {
    it('accepts a string parameter, and reverses each word in the string', () => {
        expect(reverseWords("Hi my name is James")).toBe('iH ym eman si semaJ')
        expect(reverseWords("Test Test Test")).toBe("tseT tseT tseT");
        expect(reverseWords("GoodNight")).toBe('thgiNdooG');
    })
});