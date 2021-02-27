const removeChar = require("../src/FirstandLastCharacter");

describe('removeChar',() => {
    it('removes the first and last characters of a string.', () => {
        expect(removeChar('place')).toBe('lac');
        expect(removeChar('person')).toBe('erso');
        expect(removeChar('windmill')).toBe('indmil')
    })
});