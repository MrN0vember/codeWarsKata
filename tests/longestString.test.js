const longest = require('../src/longestString');

describe('longest', () => {
    it('returns the longest possible string of distinct letters', () => {
        expect(longest("aretheyhere", "yestheyarehere")).toEqual('aehrsty');
    }) 
});