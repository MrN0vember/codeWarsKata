const even_or_odd = require('../src/evenOrOdd');

describe('even_or_odd', () => {
    it('returns "Even" for even numbers or "Odd" for odd numbers', () => {
        expect(even_or_odd(2)).toBe('Even');
        expect(even_or_odd(5)).toBe('Odd');
        expect(even_or_odd(16)).toBe('Even');
        expect(even_or_odd(27)).toBe('Odd');
    })

});